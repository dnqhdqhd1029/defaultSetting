import React from "react";
import HeaderP from "./HeaderP";
import ReportMenuP from "./ReportMenuP";
import ReportContentP from "./ReportContentP";
import ReportPreviewP from "./ReportPreviewP";
import "../../assets/style/style.scss";
import "nanoscroller/bin/css/nanoscroller.css";
import { ContainerFilled } from "@ant-design/icons";

const Layout = () => {
  return (
    <>
      <HeaderP />

      <section className="container">{/*이 안에 내용 들어감*/}</section>
    </>
  );
};

export default Layout;
