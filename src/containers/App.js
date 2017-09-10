import React, { Component } from "react";

import "../styles/App.css";

import NavContainer from "./NavContainer";
import ListingContainer from "./ListingContainer";
import Footer from "../components/Footer";


class App extends Component {

  render() {
    return (
      <div className="app container">
        <NavContainer />
        <div className="row">
          <ListingContainer />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
