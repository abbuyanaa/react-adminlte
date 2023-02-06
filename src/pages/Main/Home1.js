import React from "react";
import { Link } from "react-router-dom";
import BaseContent from "../../components/BaseContent";
import Statistics from "../../components/Layouts/Statistics";

const Home1 = () => {
  return (
    <BaseContent>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              <Statistics />
            </div>
          </section>
        </div>
      </div>
    </BaseContent>
  );
};

export default Home1;
