import PropTypes from 'prop-types';
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

// Mapeo de colores para tecnologías
const techColors = {
  "HTML": "bg-orange-100 text-orange-700 border-orange-200",
  "CSS": "bg-blue-100 text-blue-700 border-blue-200",
  "JavaScript": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "React": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Node.js": "bg-green-100 text-green-700 border-green-200",
  "MySQL": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Git": "bg-red-100 text-red-700 border-red-200",
  "GitHub": "bg-gray-100 text-gray-700 border-gray-200",
  "LocalStorage": "bg-purple-100 text-purple-700 border-purple-200",
  "CSS3": "bg-blue-100 text-blue-700 border-blue-200",
  "HTML5": "bg-orange-100 text-orange-700 border-orange-200",
  "ES6 Modules": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Responsive": "bg-teal-100 text-teal-700 border-teal-200",
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    repoUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default function ProjectCard({ proyecto, index }) {
  return (
    <article 
      className="group bg-white rounded-2xl overflow-hidden border border-neutral-200
                 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500
                 focus-within:ring-2 focus-within:ring-accent-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Contenedor de imagen con overlay */}
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={proyecto.image} 
          alt={`Captura de pantalla del proyecto ${proyecto.title}`}
          className="w-full h-full object-cover transform group-hover:scale-110 
                     transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 
                        via-primary-900/50 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300
                        flex flex-col justify-end p-6">
          <p className="text-white text-sm transform translate-y-4 
                        group-hover:translate-y-0 transition-transform duration-300">
            {proyecto.description}
          </p>
        </div>

        {/* Badge de featured */}
        {proyecto.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white 
                          text-xs font-semibold rounded-full shadow-lg">
            Destacado
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Categoría y título */}
        <div className="mb-4">
          <span className="text-accent-500 text-sm font-medium uppercase tracking-wide">
            {proyecto.shortTitle}
          </span>
          <h3 className="text-xl font-bold text-neutral-900 mt-1 group-hover:text-accent-600 
                         transition-colors">
            {proyecto.title}
          </h3>
        </div>

        {/* Descripción (visible en mobile) */}
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3 lg:hidden">
          {proyecto.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proyecto.technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full border
                ${techColors[tech] || "bg-neutral-100 text-neutral-700 border-neutral-200"}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <a
            href={proyecto.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                       bg-primary-800 hover:bg-primary-700 text-white rounded-lg
                       font-medium transition-all duration-300
                       hover:shadow-lg hover:shadow-primary-800/30"
            aria-label={`Ver código fuente de ${proyecto.title} en GitHub`}
          >
            <BsGithub size={18} />
            <span>Código</span>
          </a>
          <a
            href={proyecto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                       bg-accent-500 hover:bg-accent-600 text-white rounded-lg
                       font-medium transition-all duration-300
                       hover:shadow-lg hover:shadow-accent-500/30"
            aria-label={`Ver demo en vivo de ${proyecto.title}`}
          >
            <BsArrowUpRightSquare size={18} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </article>
  );

  
}