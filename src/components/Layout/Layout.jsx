import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import css from "../Layout/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.mainContent}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
