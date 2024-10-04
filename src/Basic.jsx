import { useState } from "react";
import { createPortal } from "react-dom";

export default function Basic() {
  return (
    <div>
      <Cover>
        <Inner />
      </Cover>
    </div>
  );
}

function Inner() {
  return createPortal(
    <div>
      <form>
        <input type="text" />
        <input type="submit" />
        <button type="submit">Click Me</button>
      </form>
    </div>,
    document.body
  );
}

function Cover({ children }) {
  return <div>{children}</div>;
}
