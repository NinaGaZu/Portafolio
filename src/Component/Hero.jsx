import { BsGithub, BsLinkedin } from "react-icons/bs";
import HeroPic from "../assets/Nina.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-primary-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
        {/* Texto */}
        <div className="space-y-6">
          <p className="text-accent-400 font-medium tracking-wide">Yo soy</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Gianina <span className="text-accent-500">Gaete</span>
          </h1>
          <hr className="border-neutral-700" />
          <p className="text-neutral-400 leading-relaxed">
            Me encanta la tecnología porque nunca se queda quieta —siempre hay algo nuevo por aprender, 
            y eso me motiva a seguir creciendo. Cada proyecto es una excusa perfecta para probar ideas, 
            mejorar lo que ya sé y buscar que todo funcione bien… ¡y se vea bonito!

            Trabajo con HTML, CSS, JavaScript, React, Git, GitHub, MySQL y Node.js, gracias a mi paso por Talento 
            Digital y el programa Oracle ONE de Alura Latam. Últimamente, estoy metiéndome en el mundo de la 
            inteligencia artificial aplicada al desarrollo web (¡muy emocionante todo eso!).

            Estoy abierta a oportunidades laborales, colaboraciones freelance o pasantías. Si tenés un proyecto en 
            mente o quieres crear algo juntos, ¡me encantaría escucharte!
          </p>
      
          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="/public/CV_Gianina_Gaete.pdf" download
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 
               text-white px-6 py-3 rounded-lg font-medium transition-all 
               hover:shadow-lg hover:shadow-accent-500/25">
              Descargar CV
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/NinaGaZu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 
                 bg-white/10 hover:bg-accent-500/20 
                 border-2 border-white/20 hover:border-accent-400
                 rounded-full transition-all duration-300 
                 hover:scale-110"
                aria-label="GitHub de Gianina Gaete"
              >
                <BsGithub size={24} className="text-white" />
              </a>
  
              <a
                href="https://www.linkedin.com/in/gianina-gaete/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 
                 bg-white/10 hover:bg-accent-500/20 
                 border-2 border-white/20 hover:border-accent-400
                 rounded-full transition-all duration-300 
                 hover:scale-110"
                aria-label="LinkedIn de Gianina Gaete"
              >
                <BsLinkedin size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-400 
                           to-secondary-400 rounded-full blur-2xl opacity-20"></div>
            <img src={HeroPic} alt="Gianina Gaete" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full 
                            object-cover border-4 border-accent-400/30 
                            shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;


