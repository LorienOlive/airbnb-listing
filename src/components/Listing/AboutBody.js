import React, { Component } from 'react';


class AboutBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMore: false
    }
  }

  showMoreAbout = (e) => {
    e.preventDefault
    this.setState({showMore: true })
  }

  render() {
    const listing = this.props.listing;
    console.log(listing)
    const initStyle = {
      height: "177px",
      overflowY: "hidden"
    }

    const expandStyle = {
      height: "auto"
    }

    return (
      <div>
        <div className="about-container" style={this.state.showMore ? expandStyle : initStyle} >
          <h3 className="about-header">
            About this listing
          </h3>
          <h4 className="about-subheader">
            The space
          </h4>
          <span className="about-paragraph">
            {listing.space.replace(/&#39;/g,"'").replace(/&quot;/g,'"').split("\n").map(i => {
              return <p>{i}<br/></p>
              }
            )}
          </span>
          <h4 className="about-subheader">
            Guest access
          </h4>
          <p className="about-paragraph">
            {listing.guest_access}
          </p>
          <h4 className="about-subheader">
            Interaction with guests
          </h4>
          <p className="about-paragraph">
            {listing.interaction}
          </p>
        </div>
        {!this.state.showMore ? (
          <div>
            <a className="show-more" onClick={this.showMoreAbout}>+ More</a>
          </div>
        ) : ( null )}
      </div>
    )
  }
}

export default AboutBody;
