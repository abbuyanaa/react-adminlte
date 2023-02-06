import React from "react";
import { Link } from "react-router-dom";
import BaseContent from "../../components/BaseContent";
import departments from "../../data/departments";

const BiDepartmentsScreen = () => {
  return (
    <BaseContent>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>부서관리</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">홈</Link>
                  </li>
                  <li className="breadcrumb-item active">부서관리</li>
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
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">부서</h3>
                    <div className="card-tools">
                      <Link to="#" className="btn btn-block btn-primary">
                        신규
                      </Link>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 300 }}
                  >
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>조직코드</th>
                          <th>조직명</th>
                          <th>사용여부</th>
                          <th>등록일</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departments.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                              <Link to={`#`}>{item.departmentName}</Link>
                            </td>
                            <td>{item.isActive ? "YES" : "NO"}</td>
                            <td>{item.createdDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          «
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          »
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </BaseContent>
  );
};

export default BiDepartmentsScreen;
