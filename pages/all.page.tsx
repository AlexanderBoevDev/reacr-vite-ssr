import { Link, Outlet } from 'react-router-dom';
import React from "react";

// console.log(import.meta.env);

export const Page:React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
