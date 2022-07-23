// MyOtherComponent.js
import React, { Component } from 'react';

class MyChildComponent extends Component {
  render() {
    return (
      <div>
        <div class="holder">{this.props.count}</div>
      </div>
    );
  }
}
export default MyChildComponent;