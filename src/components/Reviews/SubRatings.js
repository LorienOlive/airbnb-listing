import React, { Component } from 'react';

class SubRatings extends Component {

  render() {
    const accuracyStars = [];
    const communicationStars = [];
    const cleanlinessStars = [];
    const locationStars = [];
    const checkInStars = [];
    const valueStars = [];

    const listing = this.props.listing[0];

    const accuracy = listing.ratings.accuracy;
    const communication = listing.ratings.communication;
    const cleanliness = listing.ratings.cleanliness;
    const location = listing.ratings.location;
    const checkIn = listing.ratings.check_in;
    const value = listing.ratings.value;

    for (let i = 0; i < accuracy; i++ ) {
      accuracyStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }

    for (let i = 0; i < communication; i++ ) {
      communicationStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }

    for (let i = 0; i < cleanliness; i++ ) {
      cleanlinessStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }

    for (let i = 0; i < location; i++ ) {
      locationStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }

    for (let i = 0; i < checkIn; i++ ) {
      checkInStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }

    for (let i = 0; i < value; i++ ) {
      valueStars.push(<i className="fa fa-star" aria-hidden="true" />)
    }


    return (
      <div className="container subrating-container">
        <div className="row subrating-row">
          <div className="col-md-6 subrating-column">
            <div className="container subrating-item">
              <div className="row subrating-item-row">
                <div className="col-md-3 subrating-label">
                  <p className="subrating-text">Accuracy</p>
                </div>
                <div className="col-md-3 subrating-stars">
                  <p className="subrating-stars">{accuracyStars}</p>
                </div>
              </div>
            </div>
            <div className="container subrating-item">
              <div className="row subrating-item-row">
                <div className="col-md-3 subrating-label">
                  <p className="subrating-text">Communication</p>
                </div>
                <div className="col-md-3 subrating-stars">
                  <p className="subrating-stars">{communicationStars}</p>
                </div>
              </div>
            </div>
            <div className="container subrating-item">
              <div className="row subrating-item-row">
                <div className="col-md-3 subrating-label">
                  <p className="subrating-text">Cleanliness</p>
                </div>
                <div className="col-md-3 subrating-stars">
                  <p className="subrating-stars">{cleanlinessStars}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 subrating-column">
            <div className="container subrating-item">
              <div className="row subrating-item-row">
                <div className="col-md-3 subrating-label">
                  <p className="subrating-text">Location</p>
                </div>
                <div className="col-md-3 subrating-stars">
                  <p className="subrating-stars">{locationStars}</p>
                </div>
              </div>
            </div>
            <div className="container subrating-item">
              <div className="row subrating-item-row">
                <div className="col-md-3 subrating-label">
                  <p className="subrating-text">Check In</p>
                </div>
                <div className="col-md-3 subrating-stars">
                  <p className="subrating-stars">{checkInStars}</p>
                </div>
              </div>
            </div>
            <div className="container subrating-item">
             <div className="row subrating-item-row">
               <div className="col-md-3 subrating-label">
                 <p className="subrating-text">Value</p>
               </div>
               <div className="col-md-3 subrating-stars">
                 <p className="subrating-stars">{valueStars}</p>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
    )
  }
}

export default SubRatings
