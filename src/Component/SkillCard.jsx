import PropTypes from 'prop-types';

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};


export default function SkillCard({ name, icon, level, percentage }) {
  return (
    <article 
      className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-200
                 hover:border-accent-400 hover:shadow-lg transition-all duration-300
                 focus-within:ring-2 focus-within:ring-accent-400 focus-within:ring-offset-2"
      tabIndex={0}
      aria-label={`${name}: nivel ${level}`}
    >
      {/* Icono con efecto hover */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 
                          to-secondary-400/20 rounded-xl blur group-hover:blur-md 
                          transition-all duration-300"></div>
          <img 
            src={icon} 
            alt={`Logo de ${name}`} 
            className="relative w-14 h-14 rounded-xl object-cover 
                       group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 group-hover:text-accent-600 
                         transition-colors">
            {name}
          </h3>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium 
                           bg-neutral-100 text-neutral-600 rounded-full">
            {level}
          </span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mt-2">
        <div className="flex justify-between text-xs text-neutral-500 mb-1">
          <span>Progreso</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-500 to-secondary-400 
                       rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Nivel de ${name}: ${percentage}%`}
          ></div>
        </div>
      </div>
    </article>
  );
}

