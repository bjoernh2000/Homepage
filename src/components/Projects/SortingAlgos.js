import React, { Component } from "react";
import styled from "styled-components";
import { mergeSortAnimation } from "./Sorting/mergeSort";
import { bubbleSortAnimation } from "./Sorting/bubbleSort";
import { quickSortAnimation } from "./Sorting/quickSort";
import "./SortingAlgos.css";

const StyledArray = styled.div`
  position: absolute;
  left: 30%;
  top: 80%;
  width: 50%;
`;

const Bars = styled.div`
  width: 3px;
  display: inline-block;
  margin: 0 1px;
`;

const Primary = "green";
const Secondary = "red";
const PivotColor = "purple";
const Sorted = "lightgreen";
const Speed = 3;

export class SortingAlgos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      numMax: 150,
      arrayLen: 100,
      arrayBarStyle: []
    };
    this.onNumChange = this.onNumChange.bind(this);
    this.onLenChange = this.onLenChange.bind(this);
  }

  generateArray(numMax, arrayLen) {
    const array = [];
    const arrayBarStyle = [];
    for (let i = 0; i < arrayLen; i++) {
      var r = Math.floor(Math.random() * numMax) + 1;
      array.push(r);
      arrayBarStyle.push(Primary);
    }
    this.setState({ array });
    this.setState({ arrayBarStyle });
  }

  areEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  mergeSort() {
    const colors = mergeSortAnimation(this.state.array.slice());
    for (let i = 0; i < colors.length; i++) {
      if (i % 2 === 0) {
        const [barOneIdx, barTwoIdx] = colors[i];
        setTimeout(() => {
          let temp = this.state.arrayBarStyle.slice();
          temp[barOneIdx] = Secondary;
          temp[barTwoIdx] = Secondary;
          this.setState({ arrayBarStyle: temp });
        }, i * Speed);

        setTimeout(() => {
          let temp = this.state.arrayBarStyle.slice();
          temp[barOneIdx] = Primary;
          temp[barTwoIdx] = Primary;
          this.setState({ arrayBarStyle: temp });
        }, i * Speed + 9);
      } else {
        setTimeout(() => {
          let temp = this.state.array.slice();
          const [barOneIdx, newHeight] = colors[i];
          temp[barOneIdx] = newHeight;
          this.setState({ array: temp });
        }, i * Speed);
      }
    }
    // let temp = [];
    // for (let i = 0; i < this.arrayBarStyle.length; i++) {
    //   temp.push(Sorted);
    // }
    // this.setState({ arrayBarStyle: temp });
  }

  bubbleSort() {
    const colors = bubbleSortAnimation(this.state.array.slice());
    for (let i = 0; i < colors.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = colors[i];
      setTimeout(() => {
        let temp = this.state.arrayBarStyle.slice();
        temp[barOneIdx] = Secondary;
        temp[barTwoIdx] = Secondary;
        this.setState({ arrayBarStyle: temp });
      }, i * Speed);
      setTimeout(() => {
        let temp = this.state.arrayBarStyle.slice();
        temp[barOneIdx] = Primary;
        temp[barTwoIdx] = Primary;
        this.setState({ arrayBarStyle: temp });
      }, i * Speed + 9);
      if (swap) {
        setTimeout(() => {
          let tempArray = this.state.array;
          let temp = tempArray[barOneIdx];
          tempArray[barOneIdx] = tempArray[barTwoIdx];
          tempArray[barTwoIdx] = temp;
          this.setState({ array: tempArray });
        }, i * Speed);
      }
    }
  }

  quickSort() {
    const colors = quickSortAnimation(this.state.array.slice());
  }

  componentDidMount() {
    this.generateArray(this.state.numMax, this.state.arrayLen);
  }
  render() {
    return (
      <div>
        <h1>Sorting Algorithm Visualiser</h1>
        <br />
        <StyledArray>
          {this.state.array.map((val, ind) => (
            <Bars
              key={ind}
              style={{
                backgroundColor: this.state.arrayBarStyle[ind],
                height: `${val * 2}px`
              }}
              id="array-bars"
            ></Bars>
          ))}
          <br />
          <label>Max Number</label>
          <input
            type="number"
            className="form-control"
            onChange={this.onNumChange}
            required
            value={this.state.numMax}
            style={{ width: "175px" }}
          />
          <label>Array Length</label>
          <input
            type="number"
            className="form-control"
            onChange={this.onLenChange}
            required
            value={this.state.arrayLen}
            style={{ width: "175px" }}
          />
          <br />
          <button
            onClick={() =>
              this.generateArray(this.state.numMax, this.state.arrayLen)
            }
          >
            Generate a New Array
          </button>
          <div class="divider" />
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <div class="divider" />
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <div class="divider" />
          <button onClick={() => this.quickSort()}>Quick Sort</button>
        </StyledArray>
      </div>
    );
  }
  onNumChange(event) {
    this.setState({ numMax: event.target.value });
  }
  onLenChange(event) {
    this.setState({ arrayLen: event.target.value });
  }
}

export default SortingAlgos;
