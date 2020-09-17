import React, { Component } from "react";

export class SeeAndSay extends Component {
  render() {
    return (
      <div>
        <h1>SeeAndSay</h1>
        <p>
          Our project is inspired by the struggles of the visually impaired. The
          inspiration comes from people that we personally know who struggle in
          their daily life to detect the things around them. For example, it is
          really difficult for them to go on social media and see what their
          friends and family are posting. Our app gives them the support to
          better understand the content posted and connect with people around
          them. We think that our app can give people access to the world around
          them and link people together. From this inspiration, our app has two
          major features: image recognition and live camera recognition. The app
          will speak out the objects in the picture/camera using CoreML API if
          the confidence interval is larger than 50%. This means that the user
          can either point at an object to detect it or upload a photo for the
          app. Our app would definitely work well with Voice-Over due to its
          simplicity, which makes it really easy for users to navigate. As our
          first Hackathon and limited knowledge of Swift, we faced a lot of
          struggles along the way in terms of learning syntax and running into
          numerous bugs and errors. We had a really difficult time learning how
          to implement the CoreML model within our program and incorporating it
          with the automated speech. In the end, we powered through and finished
          our app - See and Say.
        </p>
        <a href="https://github.com/bjoernh2000/BostonHacks">
          Visit the GitHub
        </a>
        <h2>Built with</h2>
        <p>Swift, Xcode</p>
      </div>
    );
  }
}

export default SeeAndSay;
