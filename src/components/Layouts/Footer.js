import React from "react";

const Footer = () => {
  return (
    <>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <strong>
          Copyright © 2022-{new Date().getFullYear()}{" "}
          <a href="http://153cns.com/" target="_blank" rel="noreferrer">
            153CNS.{" "}
          </a>
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.1.0
        </div>
      </footer>
    </>
  );
};

export default Footer;
