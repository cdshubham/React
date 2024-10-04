import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

async function deleteUser(id) {
  console.log(id);
  const res = await axios.delete(`http://localhost:8000/users/${id}`);
  console.log(res);
}

async function addUser(data) {
  let res = await axios.post(
    "http://localhost:8000/users", //"http://localhost:8000/usersd",-->for error
    JSON.stringify(data)
  );

  console.log(res);
}
async function fetchUsers() {
  return await fetch("http://localhost:8000/users").then((res) => res.json());
}

async function updateUser(data) {
  let res = await axios.put(
    `http://localhost:8000/users/${data[1]}`,
    JSON.stringify(data[0])
  );
  console.log(res);
}

async function patchUser(data) {
  let res = await axios.patch(
    `http://localhost:8000/users/${data[1]}`,
    JSON.stringify(data[0])
  );
  console.log(res);
}

function Query() {
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: 4,
    refetchOnMount: true,
    select: (data) => {
      console.log(data);
      let users = data.map((user) => user.name);
      return users;
    },
    // refetchInterval: 10000,
  });
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => {
      console.log("id", id);
      deleteUser(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const {
    mutate: add,
    isPaused,
    isSuccess,
    isError: gotError,
  } = useMutation({
    mutationFn: (user) => addUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log("are yaar");
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: (user) => updateUser(user),
  });

  const { mutate: patch } = useMutation({
    mutationFn: (user) => patchUser(user),
  });

  async function fetchOptions(id) {
    return await axios.get(`http://localhost:8000/users/${id}`);
  }

  let options = ["a0ca", "cbf2"];
  const result = useQueries({
    queries: options.map((el) => {
      return { queryKey: ["options"], queryFn: () => fetchOptions(el) };
    }),
  });
  console.log(result);

  //dependent query
  async function dependFetch(name) {
    return await axios.get(`http://localhost:8000/users?name=${name}`);
  }

  // if (!data) console.log("data", data[0]);
  const dependRes = useQuery({
    queryKey: ["hobbies"],
    queryFn: () => dependFetch(data[0]),
    enabled: !!data,
  });

  console.log("depend", dependRes?.data?.data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div>
        {data?.map((user) => (
          <div key={user.id}>
            <span>{user.name || user}</span>
            <button
              style={{ marginLeft: "45px" }}
              onClick={() => mutate(user.id)}
              disabled={isDeleting}
            >
              Delete Me
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          add({
            name: "Sam Thomas",
            age: 12,
            city: "Washington",
            is_student: true,
            hobbies: ["playing guitar", "cooking", "gardening"],
            address: {
              street: "789 Oak St",
              city: "Anywhere",
              state: "IL",
              zip: "54321",
            },
            id: "a1a1",
          })
        }
      >
        Add me
      </button>
      <button
        onClick={() =>
          update([
            {
              name: "Sam Thomas",
              age: 24,
              city: "Washington",
              is_student: true,
              hobbies: ["playing guitar", "cooking", "gardening"],
              address: {
                street: "789 Oak St",
                city: "Anywhere",
                state: "IL",
                zip: "54321",
              },
              id: "a1a1",
            },
            "a1a1",
          ])
        }
      >
        Put me
      </button>
      <button
        onClick={() =>
          patch([
            {
              age: 12,
            },
            "a1a1",
          ])
        }
      >
        Patch me
      </button>
      <button onClick={refetch}>refetch</button>
    </>
  );
}

export default Query;
