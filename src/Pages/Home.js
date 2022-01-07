import HeroSection from "../Section/Hero";
import About from "../Section/About";
import Services from "../Section/Services";
import Contact from "../Section/Contact";
import Testimonials from "../Section/Testimonials";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
