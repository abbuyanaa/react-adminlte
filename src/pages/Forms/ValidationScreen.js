import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
import SideNav from "../../components/Layouts/SideNav";

const ValidationScreen = () => {
  return (
    <>
      <Header />
      <SideNav />

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Validation</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Validation</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* jquery validation */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Quick Example <small>jQuery Validation</small>
                    </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form id="quickForm">
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="terms"
                            className="custom-control-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck1"
                          >
                            I agree to the{" "}
                            <Link href="#" rel="noreferrer">
                              terms of service
                            </Link>
                            .
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6"></div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>

      <Footer />
    </>
  );
};

export default ValidationScreen;
