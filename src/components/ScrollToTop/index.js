import styled from "styled-components";
import arrow from "../../assets/arrow-up.svg";

const Up = styled.div`
  position: fixed;
  right: 6rem;
  bottom: 5rem;
  cursor: pointer;

  @media only screen and (max-width: 48em) {
    display: none;
  }
  img {
    width: 3rem;
    height: 3rem;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--white);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      background-color: var(--purple);
    }
    &:active {
      transform: scale(0.8);
      background-color: var(--pink);
    }
  }
`;
const ScrollUp = () => {
  const element = document.getElementById("home");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

const ScrollToTop = () => {
  return (
    <Up onClick={() => ScrollUp()}>
      <img src={arrow} alt="" />
    </Up>
  );
};

export default ScrollToTop;
