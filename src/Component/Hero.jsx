import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import HeroPic from "../assets/Nina.jpg";

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">Yo soy</p>
        <h1 className="text-6xl">Gianina Gaete</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">Lorem 
          ipsum dolor, sit amet consectetur 
          adipisicing elit. Sapiente distinctio minus 
          ipsum dolor corporis impedit error? Tempore 
          ratione eum fuga dolores deleniti commodi 
          tempora eveniet fugiat sed, recusandae amet 
          sit?</p>
      </div>

      <div className="w-1/3 items-center ssm:w-fit">
        <img src={HeroPic} alt="Nina" width={250} height={250} 
        className="rounded-full w-full border-8 border-white" />
      </div>

      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">Sobre mí</p>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3
        rounded-full hover:bg-indigo-800 hover:text-white">
          Ver más...
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
           <a
            href="https://instagram.com/gianina_gaete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80"
            >    
          <BsInstagram size={40} className="border-4
           hover:border-indigo-800 rounded-full"/>
          </a>
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