import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="grid12-6">
        <img src={require("../assets/DSC_0017.JPG")} alt="Bjoern" />
        <div className="inner_box">
          <h3>
            Hello! I am Bjoern, and this is my Homepage. You can learn a bit
            more about me under About, and some projects I've worked on under
            Projects. Feel free to contact me if something interests you!
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
