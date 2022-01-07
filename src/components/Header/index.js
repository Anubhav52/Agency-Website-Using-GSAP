import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  z-index: 500;

  @media only Screen and (max-width: 64em) {
    padding: 1rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;
  }
  a::after {
    content: "";
    display: block;
    height: 3px;
    width: 3px;
    background: transparent;
    transition: width 0.4s;
  }
  a:not(:last-child):hover::after {
    width: 100%;
    background: var(--purple);
  }

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transform: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  display: none;

  @media only Screen and (max-width: 768px) {
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${({ clicked }) => (clicked ? "0" : "-0.5rem")};
    transform: ${({ clicked }) =>
      clicked ? "rotate(135deg)" : "roatate(0deg)"};
  }
  &::after {
    top: ${({ clicked }) => (clicked ? "0" : "0.5rem")};
    transform: ${({ clicked }) =>
      clicked ? "rotate(-135deg)" : "roatate(0deg)"};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 70px;
  right: 0;
  left: 0;
  transition: all 0.5s;
  opacity: ${({ clicked }) => (clicked ? "1" : "0")};
  visibility: ${({ clicked }) => (clicked ? "visible" : "hidden")};

  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;
  z-index: 100;

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 2rem;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
  a button {
    font-size: 19.2px;
  }
  a::after {
    content: "";
    display: block;
    height: 3px;
    width: 3px;
    background: transparent;
    transition: width 0.4s;
  }
  a:not(:last-child):hover::after {
    width: 100%;
    background: var(--purple);
  }
`;
const Header = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const mq = window.matchMedia("(max-width:40em)");

    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",
        borderRadius: "0 0 50px 50px",
        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.inout",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top", //means that the 300px down from the element bottom when hits the top og the viewport or scroll bar the animations will trigger.
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",
        borderRadius: "50px",
        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.inout",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top", //means that the 300px down from the element bottom when hits the top og the viewport or scroll bar the animations will trigger.
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="" />
        <h3>Experience</h3>
      </Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        {/* we are passing state to the childern component for it to access to change 
        classes based on the state.  also since it is a styled component so we are able to pass the 
        state as it a component otherwise we would have to manipulate classname based on the state and add
        it to the div or whatev and write the css for the class to effect.*/}
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click} onClick={() => handleClick()}>
        <a href="#home" onClick={() => handleClick()}>
          Home
        </a>
        <a href="#about" onClick={() => handleClick()}>
          About Us
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Services
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
