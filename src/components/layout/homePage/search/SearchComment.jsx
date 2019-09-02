import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../../../actions/index";

export class SearchComment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: ""
    };
  }

  onChange = event => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onClear = () => {
    this.setState({
      name: "",
      description: ""
    });
  }

  onSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state);
    this.onClear();
  };

  
  render() {
    var { name, description } = this.state;
    return (
      <div className="nav-filter">
        <div className="nav-item search">
          <div className="result">
            <Link className="navbar-brand" to="/">{this.props.total} Found</Link>
          </div>
          <form className="item form-inline">
            <label className="title" htmlFor="parts-type">Name :</label>
            <input type="text" name="name" value={name} onChange={this.onChange} className="form-control" id="email" placeholder="Name" />
            <label className="title" htmlFor="item-name">Description :</label>
            <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} id="pwd" placeholder="Description" />
            <button type="submit" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search mr-2" /><span className="title-search">Search</span></button>
          </form>
        </div>
        <div className="nav-item add-master">
          <button type="submit" className="btn btn-primary"><i className="fas fa-plus-circle mr-2" /><span className="title-add">Add</span></button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch : keyword => {
      dispatch(actions.searchComments(keyword));
    }
  };
};

export default connect(null , mapDispatchToProps)(SearchComment);
