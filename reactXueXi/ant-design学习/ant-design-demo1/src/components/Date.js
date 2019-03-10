import React, { Component } from "react";

import { DatePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Date extends Component {
  constructor(props) {
    super(props);
 
  }

  onChange(){
      console.log(1)
  }

  render() {
    return (
      <div>
        <div>
          <DatePicker onChange={this.onChange} />
          <br />
          <MonthPicker onChange={this.onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={this.onChange} />
          <br />
          <WeekPicker onChange={this.onChange} placeholder="Select week" />
        </div>
      </div>
    );
  }
}

export default Date;
