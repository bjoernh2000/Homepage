import React, { Component } from "react";

export class SortingAlgos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  generateArray(numMax, arrayLen) {
    const array = [];
    while (array.length < arrayLen) {
      var r = Math.floor(Math.random() * numMax) + 1;
      if (array.indexOf(r) === -1) array.push(r);
    }
    this.setState({ array });
  }

  componentDidMount() {
    this.generateArray(100, 100);
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        {array.map((val, ind) => (
          <div key={ind}>{val}</div>
        ))}
      </div>
    );
  }
}

export default SortingAlgos;
