import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseContent from "../../BaseContent";

const BiWarehouseAddForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log(params.id);

  return (
    <>
      <BaseContent>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>창고 신규</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">홈</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/bi/warehouses">창고관리</Link>
                    </li>
                    <li className="breadcrumb-item active">신규</li>
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
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">창고 신규</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form className="form-horizontal">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label
                                htmlFor="whCode"
                                className="col-sm-2 col-form-label"
                              >
                                창고코드
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="whCode"
                                  placeholder="창고코드"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label
                                htmlFor="whName"
                                className="col-sm-2 col-form-label"
                              >
                                창고명
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="whName"
                                  placeholder="창고명"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label className="col-sm-2 col-form-label">
                                구분
                              </label>
                              <div className="col-sm-10">
                                <select className="form-control">
                                  <option>창고 1</option>
                                  <option>창고 2</option>
                                  <option>창고 3</option>
                                  <option>창고 4</option>
                                  <option>창고 5</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label
                                htmlFor="address"
                                className="col-sm-2 col-form-label"
                              >
                                주소
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  placeholder="주소"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label
                                htmlFor="comment"
                                className="col-sm-2 col-form-label"
                              >
                                적요
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="comment"
                                  placeholder="적요"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group row">
                              <label className="col-sm-2 col-form-label">
                                사용여부
                              </label>
                              <div className="col-sm-10">
                                <div className="icheck-primary d-inline">
                                  <input type="checkbox" id="active" />
                                  <label htmlFor="active">사용</label>
                                </div>{" "}
                                <div className="icheck-primary d-inline">
                                  <input type="checkbox" id="inactive" />
                                  <label htmlFor="inactive">중단</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                          저장
                        </button>
                        <button
                          type="submit"
                          onClick={() => navigate(-1)}
                          className="btn btn-default float-right"
                        >
                          취소
                        </button>
                      </div>
                      {/* /.card-footer */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </BaseContent>
    </>
  );
};

export default BiWarehouseAddForm;
