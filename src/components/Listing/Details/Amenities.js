import React, { Component } from 'react';

/* Normally, the icons would be stored in the db, and
I would map over the amenities in a const and then render
the resulting array of elements below, but since I have stored
the icons locally, this component is going to be verbose */

import elevator from "../../../styles/images/elevator.jpg";
import internet from "../../../styles/images/internet.jpg";
import buzzer from "../../../styles/images/buzzer.jpg";
import heating from "../../../styles/images/heating.jpg";
import gym from "../../../styles/images/elevator.jpg";
import wheelchair from "../../../styles/images/wheelchair.jpg";
import family from "../../../styles/images/family.jpg";
import doorman from "../../../styles/images/doorman.jpg";
import wifi from "../../../styles/images/wifi.jpg";
import utensils from "../../../styles/images/utensils.jpg";
import parking from "../../../styles/images/parking.jpg";
import hottub from "../../../styles/images/hottub.jpg";
import tv from "../../../styles/images/TV.jpg";
import iron from "../../../styles/images/iron.jpg";
import hairdryer from "../../../styles/images/hairdryer.jpg";
import dryer from "../../../styles/images/dryer.jpg";
import washer from "../../../styles/images/washer.jpg";
import shampoo from "../../../styles/images/shampoo.jpg";
import laptop from "../../../styles/images/laptop.jpg";
import pool from "../../../styles/images/pool.jpg";
import snowflake from "../../../styles/images/snowflake.jpg";
import hanger from "../../../styles/images/hanger.jpg";
import towels from "../../../styles/images/towels.jpg";

class Amenities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMore: false
    }
  }

  showMoreList = (e) => {
    e.preventDefault
    this.setState({ showMore: true })
  }

  render() {
    const listing = this.props.listing;

    const initStyle = {
      width: "525px",
      height: "110px",
      overflowY: "hidden",
      overflowX: "auto",
      marginRight: "100px"
    }

    const expandStyle = {
      height: "auto"
    }

    return (
      <div className="details">
        <div className="container details-container">
          { listing.description.amenities ? (
            <div className="row details-row">
              <div className="col-md-2 details-header-column">
                <h3 className="details-header">Amenities</h3>
              </div>
              <div className="col-md-10 details-content-column" style={this.state.showMore ? expandStyle : initStyle}>
                <div className="row amenities-row">
                  <div className="col-md-5 left-amenities-column">
                    <ul className="left-amentities">
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={elevator} alt="elevator" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Elevator</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Pets allowed
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={internet} alt="internet" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Internet</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Indoor fireplace
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Breakfast
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={buzzer} alt="buzzer" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Buzzer/wireless intercom</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={heating} alt="thermometer" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Heating</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={gym} alt="barbell" />
                          </div>
                          <div className="col-md-9">
                            <h3 className="details-header">Gym</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={wheelchair} alt="wheelchair" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Wheelchair accessible</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={family} alt="family" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Family/kid friendly</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={doorman} alt="doorman" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Doorman</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={wifi} alt="wifi" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Wireless Internet</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={utensils} alt="utensils" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Kitchen</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={parking} alt="parking" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Free parking on premises</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={hottub} alt="hot tub" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Hot tub</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={tv} alt="tv" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Cable TV</h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 right-amentities-column">
                    <ul className="right-amentities">
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Suitable for events
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={iron} alt="iron" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Iron</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Smoking allowed
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={hairdryer} alt="hair dryer" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Hair dryer</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={dryer} alt="clothes dryer" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Dryer</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={washer} alt="washing machine" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Washer</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={shampoo} alt="shampoo" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Shampoo</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={laptop} alt="laptop" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Laptop friendly workspace</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={pool} alt="swimming pool" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Pool</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={tv} alt="television" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">TV</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={snowflake} alt="snowflake" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Air conditioning</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={hanger} alt="wire hanger" />
                          </div>
                          <div className="col-md-9 amenities-name">
                            <h3 className="details-header">Hangers</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-3 amenities-img">
                            <img className="amenities-icon" src={towels} alt="towels" />
                          </div>
                          <div className="col-md-7 amenities-name">
                            <h3 className="details-header">Essentials</h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Private entrance
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Free parking on street
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-10">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Paid parking off premises
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row amenities-row family-amenities">
                  <div className="col-md-5 left-amenities-column">
                    <ul className="left-amenities">
                      <li className="container amenities-item">
                        <h3 className="details-header">
                          Family amenities
                        </h3>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Baby bath
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Baby monitor
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Babysitter recommendations
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Bathtub
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Changing table
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Children's books and toys
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Children's dinnerware
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Crib
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Fireplace guards
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="right-family-amenities">
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Game console
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              High chair
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Outlet Covers
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Pack 'n Play/travel crib
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Room darkening shades
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Stair gates
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Table corner guards
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="container amenities-item">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="details-header" style={{ textDecoration: "line-through", color: "#777777" }}>
                              Window guards
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          {!this.state.showMore ? (
            <div>
              <a className="show-more amenities" onClick={this.showMoreList}>+ More</a>
            </div>
          ) : ( null )}
        </div>
      </div>
    )
  }
}

export default Amenities
