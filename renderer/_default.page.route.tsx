import React from "react";
import { Route, Routes } from "react-router-dom";
import { Page } from "../pages/all.page";
import { PageHome } from "../pages/page.home";
import { PageAbout } from "../pages/page.about";
import { PageContact } from "../pages/page.contact";
import { NotFoundPage } from "../pages/page.404";

export const Router:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<PageHome />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="contact" element={<PageContact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
