import Twitter from "../../assets/twitter-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const Footers = styled.footer`
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem calc(2.5rem + 2vw);

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;

    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    filter: invert(100%);
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const Footer = () => {
  return (
    <Footers>
      <LeftText>
        © 2021 Built and Design by <a href="#home">@Experience</a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="/">
          <img src={Twitter} alt="" />
        </a>
        <a href="/">
          <img src={Instagram} alt="" />
        </a>
        <a href="/">
          <img src={Gmail} alt="" />
        </a>
      </RightText>
    </Footers>
  );
};

export default Footer;
