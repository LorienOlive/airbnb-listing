import React, { Component } from "react";
import { connect } from 'react-redux';

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

const MapStateToProps = (state) => {

}

const MapDispatchToProps = (state) => {
  
}

export default connect(MapStateToProps, MapDispatchToProps)(NavContainer);
