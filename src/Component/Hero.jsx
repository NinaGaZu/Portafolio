import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import HeroPic from "../assets/Nina.jpg";

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">Yo soy</p>
        <h1 className="text-6xl">Gianina Gaete</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">
          Me gusta la tecnología porque siempre está cambiando y eso me motiva a seguir aprendiendo. Cada proyecto que hago es una oportunidad para mejorar, probar nuevas ideas y buscar la mejor forma de que algo funcione y se vea bien.
     Manejo HTML, CSS, JavaScript, React, Git, GitHub, MySQL y Node.js, gracias a mi formación en Talento Digital y el programa Oracle ONE de Alura Latam. Ahora estoy explorando cómo aplicar inteligencia artificial en el desarrollo web.
     Estoy abierta a oportunidades laborales, colaboraciones freelance o pasantías para ganar más experiencia y seguir creciendo.
        </p>
      </div>

      <div className="w-1/3 items-center ssm:w-fit">
        <img src={HeroPic} alt="Foto de Gianina Gaete, desarrolladora web" width={500} height={500} 
        className="rounded-full w-full border-8 border-white" />
      </div>

      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">Sobre mí</p>
        <p className="text-slate-300">
          Desarrolladora web en constante aprendizaje. 
          Amo los desafíos y crear soluciones prácticas con tecnología.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3
        rounded-full hover:bg-indigo-800 hover:text-white">
          <a href="/Gianina Gaete-CV 2025.pdf.pdf"
              download>
            Descargar CV
          </a>
        </button>

        <div className="flex mt-5 space-x-4 cursor-pointer">
          <a
            href="https://github.com/NinaGaZu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80"
            >        
          <BsGithub size={40} className="border-4
           hover:border-indigo-800 rounded-full"/>
          </a>
          {/* <a
            href="https://instagram.com/gianina_gaete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80"
            >    
          <BsInstagram size={40} className="border-4
           hover:border-indigo-800 rounded-full"/>
          </a> */}
          <a
            href="https://www.linkedin.com/in/gianina-gaete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80"
            >    
          <BsLinkedin size={40} className="border-4
           hover:border-indigo-800 rounded-full"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;