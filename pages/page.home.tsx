import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const PageHome:React.FC = () => {
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "counter/incremented" });
  const decrement = () => dispatch({ type: "counter/decremented" });
  
  return (
    <>
      <h1>Home page</h1>
      <p>
        Count: {count}. <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
      </p>
      <p>
        Note how the elapsed time above did not reset when you switched to the home page.
      </p>
      <p>
        This page is rendered to HTML, see view-source:http://localhost:3000.
      </p>
    </>
  )
}
