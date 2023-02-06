import React from "react";
import { Link, NavLink } from "react-router-dom";
import menus from "../../data/menus";

const SideNav = () => {
  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src="/assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            (주)일오삼씨앤에스
          </span>
        </Link>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/assets/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                Admin
              </Link>
            </div>
          </div>

          {/* SidebarSearch Form */}
          {/* <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div> */}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {menus.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="nav-header menu-open">{item.name}</li>
                    {item.items &&
                      item.items.map((c, i) => {
                        return (
                          <li className="nav-item" key={i}>
                            <NavLink
                              to={`${item.url}${c.url}`}
                              className="nav-link"
                              activeclassname="active"
                            >
                              <i className="far fa-circle nav-icon"></i>
                              <p> {c.name}</p>
                            </NavLink>
                          </li>
                        );
                      })}
                  </div>
                );
              })}

              <li className="nav-item menu-open">
                <Link to="#" className="nav-link active">
                  {/* <i className="nav-icon fas fa-edit" /> */}
                  <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/forms/general" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/forms/advanced" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/forms/validation" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Validation</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link">
                  {/* <i className="nav-icon fas fa-table" /> */}
                  <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/tables/simple" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tables/mui" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Mui Table</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  {/* <i className="nav-icon fas fa-th" /> */}
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
