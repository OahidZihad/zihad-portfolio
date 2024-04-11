import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Research from "./Components/Research/Research";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Services></Services>
      <Research></Research>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
