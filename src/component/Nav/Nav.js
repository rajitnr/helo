import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.location);
    console.log(this.props);
    if (this.props.location.pathname === "/") {
      return null;
    }
    return (
      <div className="nav-bar">
        {/* {(this.props.username && ( */}
        <div className="nav-p1">
          <div className="nav-user-details">
            <img src={this.props.profile_pic} alt="" />
            <span>{this.props.username}</span>
          </div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/home-512.png"
            alt=""
            width="50px"
            onClick={() => this.props.history.push("/dashboard")}
            className="btn-touch"
          />
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_79893.png"
            alt=""
            width="50px"
            className="btn-touch"
            onClick={() => this.props.history.push("/new")}
          />
        </div>
        <div className="nav-p2">
          <img
            src="https://image.flaticon.com/icons/svg/126/126467.svg"
            alt=""
            width="50px"
            className="btn-touch"
            onClick={() => this.props.history.push("/")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    profile_pic: state.profile_pic
  };
};

export default connect(
  mapStateToProps,
  {}
)(Nav);
