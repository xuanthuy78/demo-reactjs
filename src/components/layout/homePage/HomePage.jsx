import React, { Component } from 'react'
import './HomePage.css';
import { Link } from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <main className="left-content">
        <div className="main-header">
          <h1 className="title">Master</h1>
          <p className="description">
            Description Description Description Description Description Description Description Description Description
            Description Description DescriptionDescription
        </p>
        </div>
        <div className="main-content">
          <div className="nav-filter">
            <div className="nav-item search">
              <div className="result">
                <Link className="navbar-brand" to="/">2,825 Found</Link>
              </div>
              <form className="form-inline" action="/action_page.php">
                <label className="title" htmlFor="parts-type">Parts Type :</label>
                <input type="email" className="form-control" id="email" />
                <label lass="title" htmlFor="item-name">Item Name :</label>
                <input type="password" className="form-control" id="pwd" />
                <button type="submit" className="btn btn-primary"><i className="fas fa-search mr-2" /><span className="title-search">Search</span></button>
              </form>
            </div>
            <div className="nav-item add-master">
              <button type="submit" className="btn btn-primary"><i className="fas fa-plus-circle mr-2" /><span className="title-add">Add</span></button>
            </div>
          </div>
          <div className="box-table mt-2">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-body table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID:</th>
                          <th>Name:</th>
                          <th>Tenant:</th>
                          <th>Descriptiont:</th>
                          <th>Edit:</th>
                          <th>Delete:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>001</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg " /></td>
                          <td><i className="far fa-trash-alt fa-lg fa-lg" /></td>
                        </tr>
                        <tr>
                          <td>002</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg" /></td>
                          <td><i className="far fa-trash-alt fa-lg" /></td>
                        </tr>
                        <tr>
                          <td>003</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg" /></td>
                          <td><i className="far fa-trash-alt fa-lg" /></td>
                        </tr>
                        <tr>
                          <td>004</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg" /></td>
                          <td><i className="far fa-trash-alt fa-lg" /></td>
                        </tr>
                        <tr>
                          <td>005</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg" /></td>
                          <td><i className="far fa-trash-alt fa-lg" /></td>
                        </tr>
                        <tr>
                          <td>006</td>
                          <td>VMTemplate001</td>
                          <td>lsvgs</td>
                          <td>Description Description Description Description Descriptio…</td>
                          <td><i className="far fa-edit fa-lg" /></td>
                          <td><i className="far fa-trash-alt fa-lg" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="card-end">
                      <i className="fas fa-ellipsis-v fa-2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer">
          <div className="main-total">
            <p>2,825件中 31件～60件を表示</p>
          </div>
          <div className="main-pagination">
            <div className="pagination">
              <Link to="/"><i className="fas fa-arrow-left fa-sm" /></Link>
              <Link to="/">1</Link>
              <Link to="/">2</Link>
              <Link to="/">3</Link>
              <Link to="/" className="active">4</Link>
              <Link to="/">5</Link>
              <Link to="/">6</Link>
              <Link to="/">7</Link>
              <Link to="/">8</Link>
              <Link to="/">9</Link>
              <Link to="/">10</Link>
              <Link href className="next"  to="/">...</Link>
              <Link to="/" className="last">Last</Link>
              <Link to="/"><i className="fas fa-arrow-right fa-sm" /></Link>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </main>
    )
  }
}

export default HomePage
