import React from "react";
import { Route, Routes } from "react-router-dom";
import { Page } from "../pages/all.page";
import { PageHome } from "../pages/page.home";
import { PageAbout } from "../pages/page.about";
import { NotFoundPage } from "../pages/404";

export const Router:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<PageHome />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
