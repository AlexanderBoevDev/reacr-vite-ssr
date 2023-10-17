import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const PageHome:React.FC = () => {

  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'counter/incremented' });
  const decrement = () => dispatch({ type: 'counter/decremented' });

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Count: {count}. <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
      </p>
      <p>
        Note how the elapsed time above didn't reset when you switched to the home page.
      </p>
      <p>
        This page is rendered to HTML, see view-source:http://localhost:3000.
      </p>
    </>
  )
}
