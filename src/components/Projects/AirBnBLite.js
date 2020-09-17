import React, { Component } from "react";

export class AirBnBLite extends Component {
  render() {
    return (
      <div>
        <h1>AirBnBLite</h1>
        <p>
          This project is a small web app that runs with python flask, and
          authenticates with flask sessions. The website is a lite version of
          Airbnb, users can create accounts to be renters, or create accounts to
          login as users who need properties. I used sha256 for password hashing
          and MongoDB stored properties users owned and users themselves.
        </p>
        <a href="https://github.com/bjoernh2000/Airbnblite">Visit the github</a>
        <h2>Built with</h2>
        <p>Flask</p>
        <p> MongoDB</p>
      </div>
    );
  }
}

export default AirBnBLite;
