import React, { Component } from "react";


class GuestDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
    guests: 1,
    adults: 1,
    children: 0,
    infants: 0,
    guestsFull: false,
    infantsFull: false
    }

  }

  addAdult = (e) => {
    e.preventDefault
    this.props.addGuest()
    if ( this.state.guests < this.props.listing.guests ) {
      this.setState({
        adult: this.state.adult + 1,
        guests: this.state.guests + 1
      })
    } else {
      this.setState({ guestsFull: true })
    }
  }

  removeAdult = (e) => {
    e.preventDefault
    this.props.removeGuest()
    this.setState({
      adults: this.state.adults - 1,
      guests: this.state.adults + 1
    })
  }

  addChild = (e) => {
    e.preventDefault
    this.props.addGuest()
    if ( this.state.guests < this.props.listing.guests ) {
      this.setState({
        children: this.state.children + 1,
        guests: this.state.guests + 1
      })
    } else {
      this.setState({ guestsFull: true })
    }
  }

  removeChild = (e) => {
    e.preventDefault
    this.props.removeGuest()
    this.setState({
        children: this.state.children - 1,
        guests: this.state.guests - 1
    })
  }

  addInfant = (e) => {
    e.preventDefault
    if ( this.state.infants < 5 ) {
      this.setState({ infants: this.state.infants + 1 })
    } else {
      this.setState({ infantsFull: true })
    }
  }

  removeInfant = (e) => {
    e.preventDefault
    this.setState({ infants: this.state.infants - 1 })
  }



  render() {
    const adults = this.state.adults;
    const children = this.state.children;
    const infants = this.state.infants;
    const guests = this.state.guests;
    const guestsFull = this.state.guestsFull;
    const infantsFull = this.state.infantsFull;


    let guestCount = null
    if ( guests == 1 ) {
       guestCount = <span className="guest-count">{guests} guest</span>
    } else if ( guests > 1 ){
       guestCount = <span className="guest-count">{guests} guests</span>
    }

    let infantCount = null
    if ( infants == 1 ) {
      infantCount = <span className="infant-count">{infants} infant</span>
    } else if ( infants > 1) {
      infantCount = <span className="infant-count">{infants} infant</span>
    } else { null }

    return (
      <div className="dropdown guest-dropdown">
        <label className=" guest-dropdown-label" htmlFor="guests">Guests</label>
        <button className="btn btn-default dropdown-toggle guest-dropdown-button" name="guests" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span>{guestCount}</span>
          <span>{infantCount}</span>
          <span className="up-caret"><i className="fa fa-angle-up" aria-hidden="true"></i></span>
        </button>
        <ul className="dropdown-menu container guest-dropdown-menu" aria-labelledby="dropdownMenu1">
          <li className="row guest-counter-item">
            <div className="col-md-2 guest-label-column">
              <label className="guest-label" htmlFor="guests">Adults</label>
            </div>
            <button className="guest-button" disabled={ adults == 1 ? true : false} onClick={this.removeAdult}>-</button>
              <input name="guests" className="guest-input" placeholder={adults} type="text" readOnly value={adults} />
            <button className="guest-button" disabled={ guestsFull ? true : false} onClick={this.addAdult}>+</button>
          </li>
          <li className="row guest-counter-item">
            <div className="col-md-2 guest-label-column">
              <label className="guest-label" htmlFor="guests">Children</label>
              <span className="guest-sublabel">Ages 2 - 12</span>
            </div>
            <button className="guest-button" disabled={ children == 0 ? true : false} onClick={this.removeChild}>-</button>
              <input name="children" className="guest-input" placeholder={children} type="text" readOnly value={children} />
            <button className="guest-button" disabled={ guestsFull ? true : false} onClick={this.addChild}>+</button>
          </li>
          <li className="row guest-counter-item">
            <div className="col-md-2 guest-label-column">
              <label className="guest-label" htmlFor="guests">Infants</label>
              <span className="guest-sublabel">Under 2</span>
            </div>
            <button className="guest-button" disabled={ infants == 0 ? true : false} onClick={this.removeInfant}>-</button>
              <input name="children" className="guest-input" placeholder={infants} type="text" readOnly value={infants} />
            <button className="guest-button" disabled={ infantsFull ? true : false} onClick={this.addInfant}>+</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default GuestDropdown;
