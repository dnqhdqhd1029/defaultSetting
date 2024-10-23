import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/publ/Home";
import MainP from "./pages/publ/MainP";
import CounselingMainP from "./pages/publ/CounselingMainP";
import CounselingMiniP from "./pages/publ/CounselingMiniP";
import CsMainP from "./pages/publ/CsMainP";
import ConciergeP from "./pages/publ/ConciergeP";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publ" element={<Home />} />
        <Route path="/publ/main" element={<MainP />} />
        <Route path="/publ/counselingMain" element={<CounselingMainP />} />
        <Route path="/publ/csMain" element={<CsMainP />} />
        <Route path="/publ/concierge" element={<ConciergeP />} />
        <Route path="/publ/counselingMini" element={<CounselingMiniP />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="publ" />
    //     <Route index element={<Home />} />
    //     <Route path="guide" element={<Guide />} />
    //     <Route path="layout" element={<Layout />} />
    //     <Route path="report" element={<ReportP />} />
    //     {/*<Route path="main" element={<MainP />} />*/}
    //     {/*<Route path="list" element={<ListP />} />*/}
    //   </Routes>
    // </BrowserRouter>
  );
};

export default AppRoutes;
