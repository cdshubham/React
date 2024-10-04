import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Show } from "./Show.jsx";
import { AppLayout } from "./AppLayout.jsx";
import { Error as Err } from "./Error.jsx";
import { CreateForm, action as FormSubmit } from "./CreateForm.jsx";
import Form from "./Form.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import Red from "./Red.jsx";
import Query from "./Query.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HOC from "./HOC.jsx";
import CompoundComponents from "./CompoundComponents.jsx";
import StyledComponent from "./StyledComponent.jsx";
import GlobalStyles from "./globalStyle.js";
import Basic from "./Basic.jsx";
import Callback from "./Callback.jsx";
import Memo from "./Memo.jsx";
import Transition from "./Transition.jsx";
import Deffered from "./Deffered.jsx";
import Id from "./Id.jsx";
import LayoutEffect from "./LayoutEffect.jsx";
import ForwardRef from "./ForwardRef.jsx";
import ImpHandle from "./ImpHandle.jsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 0,
    },
  },
});

const AppRouter = createBrowserRouter([
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "useCallback",
    element: <Callback />,
  },
  {
    path: "useMemo",
    element: <Memo />,
  },
  {
    path: "transition",
    element: <Transition />,
  },
  {
    path: "/defferd",
    element: <Deffered />,
  },
  {
    path: "/id",
    element: <Id />,
  },
  {
    path: "/layout",
    element: <LayoutEffect />,
  },
  {
    path: "basic",
    element: <Basic />,
  },
  {
    path: "red",
    element: <Red />,
  },
  {
    path: "query",
    element: <Query />,
  },
  {
    path: "hoc",
    element: <HOC />,
  },
  {
    path: "forwardRef",
    element: <ForwardRef />,
  },
  {
    path: "imphandle",
    element: <ImpHandle />,
  },
  {
    path: "compoundComponents",
    element: <CompoundComponents />,
  },
  {
    path: "styledComponents",
    element: <StyledComponent />,
  },
  {
    path: "/home",
    element: <AppLayout />,
    errorElement: <Err />,
    children: [
      {
        path: "app",
        element: <App />,
        errorElement: <Err />,
      },
      {
        path: "form",
        element: <CreateForm />,
        action: FormSubmit,
      },
      {
        path: "show/:sd",
        loader: async function ({ params }) {
          console.log("params", params);
          return await fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .catch(() => {
              throw new Error("error aa gyi he");
            });
        },
        element: <Show />,
      },
    ],
  },
  {
    path: "*",
    element: <Err />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </QueryClientProvider>
);
