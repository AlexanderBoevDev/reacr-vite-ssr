import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../scss/main.scss";

//console.log(import.meta.env);

export const Page:React.FC = () => {
  return (
    <>
      <header className="container-xxl">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
      <main className="container-xxl">
        <Outlet />
      </main>
      <footer className="container-xxl">
        <div className="container-fluid container-xxl">
          <p>© { (new Date().getFullYear()) } Company, Inc</p>
        </div>
      </footer>
    </>
  )
}
