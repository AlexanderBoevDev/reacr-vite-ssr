import React from "react";

export const AboutPage:React.FC = () => {
  return (
    <>
      <h2>About</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the /about page.
      </p>
      <p>
        This page is rendered to HTML, see view-source:http://localhost:3000/about.
      </p>
    </>
  )
}
