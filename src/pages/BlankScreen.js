import React from "react";
import { Link } from "react-router-dom";
import BaseContent from "../components/BaseContent";

const BlankScreen = () => {
  return (
    <BaseContent>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>빈칸화면</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">홈</Link>
                  </li>
                  <li className="breadcrumb-item active">테스트</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
      </div>
    </BaseContent>
  );
};

export default BlankScreen;
