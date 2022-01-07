import { GlobalStyle } from "./globalStyles";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
