import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns:
    minmax(100px, max-content)
    repeat(auto-fill, 200px) 20%;
  grid-auto-rows: minmax(25px, auto);
`;

const AboutWrap = styled.div`
  margin-top: 1em;
  margin-right: 6em;
  margin-left: 1em;
`;

export const About = () => (
  <AboutWrap>
    <h1>About</h1>
    <img
      src={require("../assets/mmexport1535890633461 2.JPG")}
      alt="Bjoern"
      style={{
        position: "absolute",
        maxWidth: "500px",
        right: "8%"
      }}
    />
    <p style={{ maxWidth: "50%" }}>
      I am a Computer Science Major with a Business Administration Minor at
      Boston University. I am a junior Fall 2020.
    </p>
    <p style={{ maxWidth: "50%" }}>
      A little about me: I lived in Germany until I was 10 taking the German
      Grundschule, after which I moved Shanghai, China for 8 years taking the IB
      Diploma program. For higher education, I then moved once again to take
      classes in Boston.
    </p>
    <h2>Contact Bjoern</h2>
    <GridWrapper>
      <h5>Email</h5>
      <p>bjoernh@bu.edu</p>
    </GridWrapper>
    {/* Add if phone number required */}
    {/* <GridWrapper>
      <h4>Phone (bold - active)</h4>
      <p>+1 857-472-8458</p>
      <p style={{ fontWeight: "bold" }}>+49 151-7217-4028</p>
      <p>+86 139-1665-5984</p>
    </GridWrapper> */}
    <Form />
  </AboutWrap>
);
