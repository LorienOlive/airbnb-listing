import React, { Component } from "react";
import { SingleDatePicker,
  SingleDatePickerShape,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
} from "react-dates";
import moment from "moment";
import omit from 'lodash/omit';


class CheckOut extends Component {
  constructor(props) {
      super(props);
      this.state = {
        focused: false,
        date: null,
      };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
    this.props.getCheckOutDate({ date })
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {

    const minStay = this.props.listing.description.availability.min_stay;
    let initDate = moment(new Date()).add('days', minStay).format("MM/DD/YYYY");

    const focused = this.state.focused;
    const date = this.state.date;

    if (this.props.checkInDate) {
        const checkIn = this.props.checkInDate
        console.log(this.props.checkInDate)
        console.log(checkIn)
        // const formatDate = checkIn.format()
        initDate = moment(checkIn).add('days', minStay).format("MM/DD/YYYY")
    }

    return (
      <SingleDatePicker
        id="checkout"
        date={date}
        placeholder={initDate}
        focused={focused}
        required={true}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        orientation={HORIZONTAL_ORIENTATION}
        anchorDirection={ANCHOR_LEFT}
        numberOfMonths={1}
        keepOpenOnDateSelect={false}
        minimumNights={minStay}
      />
    )
  }

  // componentWillReceiveProps(props, nextProps) {
  //
  // }
  //
  // const newDate = moment(this.props.checkInDate).add('days', minStay).format("MM/DD/YYYY");


}

export default CheckOut;
