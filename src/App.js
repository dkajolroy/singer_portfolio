import NavBars from './Components/NavBars/NavBars'
import Home from './Components/Home/Home'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Pricing from './Components/Pricing/Pricing'
import Product from './Components/Product/Product'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import AOS from 'aos/dist/aos'

function App() {
  AOS.init();

  return (
    <>
      <NavBars />
      <Home />
      <Service />
      <Pricing />
      <Product />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
