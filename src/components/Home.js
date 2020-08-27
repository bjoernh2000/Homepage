import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="grid12-6">
        <img src={require("../assets/DSC_0017.JPG")} alt="Bjoern" />
        <div className="inner_box">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
