import React, { Component } from "react";
import PropTypes from "prop-types";
import { SingleDatePicker,
  SingleDatePickerShape,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
} from "react-dates";
import moment from "moment";
import omit from 'lodash/omit';


class CheckIn extends Component {
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
    this.props.getCheckInDate({ date })
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {

    const focused = this.state.focused;
    const date = this.state.date;

    return (
      <SingleDatePicker
        id="checkin"
        date={date}
        placeholder={moment(new Date()).format("MM/DD/YYYY")}
        focused={focused}
        required={true}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        orientation={HORIZONTAL_ORIENTATION}
        anchorDirection={ANCHOR_LEFT}
        numberOfMonths={1}
        keepOpenOnDateSelect={false}
      />
    )
  }
}

export default CheckIn;
