import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./page/publ/Home";
import Layout from "./page/publ/Layout";
import MainP from "./page/publ/MainP";
import NotFound from "./page/publ/NotFound";
import Guide from "./page/publ/Guide";
import ReportP from "./page/publ/Report";
import ListP from "./page/publ/ListP";
import ReportListP from "./page/publ/ReportListP";
import CurationEditP from "./page/publ/CurationEditP";
import CurationListP from "./page/publ/CurationListP";

//import Guide from '/puble/Guide';
//import NotFound from '/puble/NotFound';

// const routes = () => [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/layout",
//     element: <Layout />,
//   },
//   {
//     path: "/publ/report",
//     element: <Report />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
//   {
//     path: "/guide",
//     element: <Guide />,
//   },
//   {
//     path: "/preview",
//     element: <Preview />,
//   },
// ];

// const mapRoutes = (routes) => {
//   return routes.map(({ path, element, children }) => {
//     return {
//       path,
//       element,
//       children: !!children && mapRoutes(children),
//     };
//   });
// };

// const BaseRoute = () => {
//   return useRoutes(mapRoutes(routes()));
// };

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publ" element={<Home />} />
        <Route path="/publ/guide" element={<Guide />} />
        <Route path="/publ/layout" element={<Layout />} />
        <Route path="/publ/report" element={<ReportP />} />
        <Route path="/publ/main" element={<MainP />} />
        <Route path="/publ/list" element={<ListP />} />
        <Route path="/publ/reportList" element={<ReportListP />} />
        <Route path="/publ/curationEdit" element={<CurationEditP />} />
        <Route path="/publ/curationList" element={<CurationListP />} />
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
