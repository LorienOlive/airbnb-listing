import React, { Component } from "react";

import NavBar from "../components/Header/NavBar"

class NavContainer extends Component {


  render() {
    return (
      <div className="navbar-container nav-container">
        <NavBar {...this.props} />
      </div>
    )
  }
}


export default NavContainer;
