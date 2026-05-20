import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Footer from "./Footer";


const Main = () => {
  return(
      <div className="bg-indigo-600">
        <Nav />
        <Hero />
        <Skills />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
  )
}

export default Main;