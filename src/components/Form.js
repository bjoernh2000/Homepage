import React from "react";
import { bottom } from "@popperjs/core";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", name: "", email: "" };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  render() {
    return (
      <form className="contact-mailing">
        <h1>Contact me here directly</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={this.onNameChange}
            placeholder="Your Name"
            required
            value={this.state.name}
            style={{ width: "50%" }}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={this.onEmailChange}
            placeholder="example@email.com"
            required
            value={this.state.email}
            style={{ width: "50%" }}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            id="contact-mailing"
            name="contact-mailing"
            onChange={this.onMessageChange}
            placeholder="Post your message here"
            required
            value={this.state.message}
            style={{ width: "100%", height: "150px" }}
          />
        </div>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}
          style={{
            backgroundColor: "#518270",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"
          }}
        />
      </form>
    );
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "homepage_mail";

    this.sendMessage(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendMessage(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Something went wrong:", err));
  }
}

export default Form;
