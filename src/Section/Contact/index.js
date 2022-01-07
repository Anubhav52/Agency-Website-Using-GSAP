import React from "react";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedIn from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;
  color: var(--white);
  margin-bottom: 3rem;
  &::before {
    content: " ";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`;
const Icon = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
      background-color: var(--purple);
      color: var(--white);
    }
    &:active {
      transform: scale(0.9);
      background-color: var(--pink);
      color: var(--white);
    }
  }
`;
const Row = styled.div`
  input {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &:not(:last-child) {
        margin-right: 0rem;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icon>
        <a href="/">
          <img src={Facebook} alt="" />
        </a>
        <a href="/">
          <img src={LinkedIn} alt="" />
        </a>
        <a href="/">
          <img src={Twitter} alt="" />
        </a>
        <a href="/">
          <img src={Instagram} alt="" />
        </a>
      </Icon>

      <Form>
        <Row>
          <input type="text" name="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            placeholder="Enter working Email Id"
          />
        </Row>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="2"
          placeholder="Your Message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
