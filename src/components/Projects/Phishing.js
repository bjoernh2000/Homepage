import React, { Component } from "react";

export class Phishing extends Component {
  render() {
    return (
      <div>
        <h1>Phishing</h1>
        <p>
          Used python anaconda with scikit-learn to classify phishing data from
          an online database. Analysis was done with jupyter notebooks, and I
          found the most suitable classification algorithm for classifying this
          database. Random Forest classification gave a 92% accuracy with a 0.94
          F1-score.
        </p>
        <p>The features included:</p>
        <p>having_IP_address</p>
        <p>URL_Length</p>
        <p>Shortining_Service</p>
        <p>having_At_Symbol</p>
        <p>double_slash_redirecting</p>
        <p>Prefix_Suffix</p>
        <p>having_Sub_Domain</p>
        <p>SSLfinal_State</p>
        <p>Domain_registeration_length</p>
        <p>Favicon</p>
        <p>popUpWidnow</p>
        <p>Iframe</p>
        <p>age_of_domain</p>
        <p>DNSRecord</p>
        <p>web_traffic</p>
        <p>Page_Rank</p>
        <p>Google_Index</p>
        <p>Links_pointing_to_page</p>
        <p>Statistical_report</p>

        <a href="https://github.com/bjoernh2000/phishing/blob/master/Phishing.ipynb">
          Visit the github
        </a>
        <h2>Built with</h2>
        <p>Jupyter Notebook</p>
        <p>Python numpy, pandas</p>
        <p>sci-kit learn</p>
      </div>
    );
  }
}

export default Phishing;
