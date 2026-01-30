import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
