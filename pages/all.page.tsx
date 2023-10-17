import { NavLink, Link, Outlet } from 'react-router-dom';
import React from "react";

console.log(import.meta.env);

export const Page:React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container-fluid container-xxl">
          <p>© { (new Date().getFullYear()) } Company, Inc</p>
        </div>
      </footer>
    </>
  )
}
