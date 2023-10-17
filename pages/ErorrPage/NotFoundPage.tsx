import React from "react";
import { NavLink } from "react-router-dom";

export const NotFoundPage:React.FC = () => {
  return (
    <>
      <h1>Not Found</h1>
      <h2>Error 404</h2>
      <NavLink to="/" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } >
        Go to home
      </NavLink>
    </>
  )
}
