import React, { Component } from "react"

class HouseRules extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMore: false
    }
  }

  showMoreRules = (e) => {
    e.preventDefault
    this.setState({ showMore: true })
  }

  render() {
    const listing = this.props.listing;

    const initStyle = {
      height: "360px",
      width: "525px",
      overflowY: "hidden"
    }

    const expandStyle = {
      height: "auto"
    }
    return (
      <div className="container details-container">
        { listing.description.house_rules ? (
            <div className="row details-row">
              <div>
              <div className="col-md-2 details-header-column">
                <h3 className="details-header">House Rules</h3>
              </div>
              <div className="col-md-10 details-content-column">
                <div style={this.state.showMore ? expandStyle : initStyle}>
                <div className="row rules-top-row">
                  <ul className="rules-list">
                    <li className="rules-list-item">
                      {listing.description.house_rules.smoking}
                    </li>
                    <li className="rules-list-item">
                      {listing.description.house_rules.pets}
                    </li>
                    <li className="rules-list-item">
                      {listing.description.house_rules.events}
                    </li>
                    <li className="rules-list-item">
                      {listing.description.house_rules.check_in}
                    </li>
                    <li className="rules-list-item">
                      {listing.description.house_rules.check_out}
                    </li>
                  </ul>
                  <span className="rules-paragraph">
                    {listing.description.house_rules.details.replace(/&#39;/g,"'").replace(/&quot;/g,'"').split("\n").map(i => {
                      return <p>{i}<br/></p>
                      }
                    )}
                  </span>
                </div>
              </div>
              <div>
                {!this.state.showMore ? (
                  <div>
                    <a className="show-more rules" onClick={this.showMoreRules}>+ See all rules</a>
                  </div>
                ) : ( null )}
              </div>
            </div>
          </div>
        </div>
          ) : (
            <div></div>
          )}
      </div>
    )
  }
}

export default HouseRules;
