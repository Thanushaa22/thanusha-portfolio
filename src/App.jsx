import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import Education from "./components/Education";
import Experience from "./components/Experience";
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
<Education />
<Experience />
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
