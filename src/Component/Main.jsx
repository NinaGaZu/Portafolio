import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Proyecto from "./Proyecto";
import Contacto from "./Contacto";
import Footer from "./Footer";


const Main = () => {
  return(
      <div className="bg-indigo-600">
        <Nav />
        <Hero />
        <Skills />
        <Proyecto />
        <Contacto />
        <Footer />
      </div>
  )
}

export default Main;