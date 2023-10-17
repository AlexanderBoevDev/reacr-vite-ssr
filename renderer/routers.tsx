import React from "react";
import { Routes, Route } from "react-router-dom";

import { Page } from "../pages/all.page";
import { HomePage } from "../pages/OtherPages/HomePage";
import { AboutPage } from "../pages/OtherPages/AboutPage";

import { NotFoundPage } from "../pages/ErorrPage/NotFoundPage";

export const Routers:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
