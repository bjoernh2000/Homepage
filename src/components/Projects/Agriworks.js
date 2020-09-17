import React, { Component } from "react";

export class Agriworks extends Component {
  render() {
    return (
      <div>
        <h1>Agriworks</h1>
        <p>
          This project I worked with a team of around 10 engineers, in the
          Hack4Impact club at BU. The project is to fill in the lack of
          agricultural data currently available in India. It serves as a central
          repository for users to sign up and log their own data, or analyze
          other agricultural data that is available. We used Agile development
          tactics to work effectively.
        </p>
        <a href="https://agri-works.org/">Visit the site</a>
        <br />
        <h2>Built with</h2>
        <p>Flask Backend</p>
        <p>Vue.js Framework Frontend</p>
        <p>MongoDB</p>
        <p>Hosted on AWS with Elastic Beanstalk</p>
      </div>
    );
  }
}

export default Agriworks;
