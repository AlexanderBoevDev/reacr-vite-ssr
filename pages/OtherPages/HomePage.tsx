import React from "react";

export const HomePage:React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Note how the elapsed time above didn't reset when you switched to the home page.
      </p>
      <p>
        This page is rendered to HTML, see view-source:http://localhost:3000.
      </p>
    </>
  )
}
