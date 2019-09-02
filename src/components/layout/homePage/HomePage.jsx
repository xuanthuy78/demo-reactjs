import React, { Component } from 'react'
import './HomePage.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as callApi from "../../../services/apiCall";
import * as actions from "../../../actions/index";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      total: 0
    };
  }

  componentDidMount() {
    callApi
      .callApi("comments", "GET", null)
      .then(res => {
        if (res && res.data) {
          this.setState({
            total: res.data.length
          })
        }
      }
      );
    this.getListComment(this.state.pageNumber);
  }

  showComments(comments) {
    var result = null;
    if (comments.length > 0) {
      result = comments.map((comment, index) => {
        return (
          <tr key={index}>
            <td>{comment.id}</td>
            <td>{comment.email}</td>
            <td>jpg</td>
            <td>{comment.name}</td>
            <td><i className="far fa-edit fa-lg " /></td>
            <td><i className="far fa-trash-alt fa-lg fa-lg" /></td>
          </tr>
        );
      });
    }
    return result;
  }

  getListComment = (number) => {
    callApi
    .callApi(`comments?_limit=10&_page=${number}`, "GET", null )
    .then(res => {
      if (res && res.data) {
        this.props.onListComment(res.data);
      }
    }
  );
    
  }

  handlePagination = (number) => {
    if (number !== this.state.pageNumber) {
      this.getListComment(number);
      this.setState({
        pageNumber: number
      })
    }
  }

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <Link className="arrow-left" to="#"><i className="fas fa-arrow-left fa-sm"></i></Link>;
    }
    if (type === 'next') {
      return <Link className="arrow-left" to="#"><i className="fas fa-arrow-right fa-sm"></i></Link>;
    }
    return originalElement;
  } 

  render() {
    var { comments } = this.props;

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
                <Link className="navbar-brand" to="/">{this.state.total} Found</Link>
              </div>
              <form className="item form-inline" action="/action_page.php">
                <label className="title" htmlFor="parts-type">Parts Type :</label>
                <input type="email" className="form-control" id="email" placeholder="Parts Type" />
                <label lass="title" htmlFor="item-name">Item Name :</label>
                <input type="password" className="form-control" id="pwd" placeholder="Item Name" />
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
                        {this.showComments(comments)}
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
          {/* <div className="main-total">
           <p>{this.state.total}件中 31件～60件を表示</p>
            </div> */} 
          <div className="main-pagination">
            <Pagination
              onShowSizeChange={this.onShowSizeChange}
              onChange={this.handlePagination}
              defaultCurrent={3}
              total={this.state.total}
              current={this.state.pageNumber}
              className="mb-5"
              showTitle
              itemRender={this.itemRender} 
              showTotal={(total, range) => `${total}件中 ${range[1]+1} 件～60件を表示`}
            />
          </div>
        </div>
        <div className="clearfix" />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.listComment,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListComment: data => {
      dispatch(actions.listComment(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
