import React from "react";

export const PageAbout:React.FC = () => {
  return (
    <>
      <h1>About page</h1>
      <p>
        Note how the elapsed time above did not reset when you switched to the /about page.
      </p>
      <p>
        This page is rendered to HTML, see view-source:http://localhost:3000/about.
      </p>
    </>
  )
}
