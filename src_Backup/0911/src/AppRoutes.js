import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./page/publ/Home";
import MainP from "./page/publ/MainP";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publ" element={<Home />} />
        <Route path="/publ/main" element={<MainP />} />
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
