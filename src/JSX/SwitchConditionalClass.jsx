import React, { Component } from "react";

class SwitchConditionalClass extends Component {
  render() {
    const temp = 32;
    switch (true) {
      case temp < 35:
        return <h1>Cold Temp - S</h1>;
      default:
        return <h1>Hot Temp - S</h1>;
    }
  }
}

export default SwitchConditionalClass;
