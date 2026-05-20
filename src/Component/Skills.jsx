// src/components/Skills.jsx
import { Element } from "react-scroll";
import SkillCard from "./SkillCard"; // Componente reutilizable
import PropTypes from 'prop-types';

// ✅ Datos centralizados (fácil de mantener)
const skills = [
  { id: 1, name: 'HTML', icon: '/src/assets/html5.png', level: 'Intermedio', percentage: 75 },
  { id: 2, name: 'CSS', icon: '/src/assets/css.png', level: 'Intermedio', percentage: 75 },
  { id: 3, name: 'JavaScript', icon: '/src/assets/JS.png', level: 'Intermedio', percentage: 70 },
  { id: 4, name: 'React', icon: '/src/assets/React.jpeg', level: 'Intermedio', percentage: 65 },
  { id: 5, name: 'MySQL', icon: '/src/assets/mysql.png', level: 'Intermedio', percentage: 60 },
  { id: 6, name: 'Node.js', icon: '/src/assets/node_js.jpeg', level: 'Intermedio', percentage: 60 },
  { id: 7, name: 'Git', icon: '/src/assets/git.png', level: 'Intermedio', percentage: 80 },
  { id: 8, name: 'GitHub', icon: '/src/assets/github.jpeg', level: 'Intermedio', percentage: 85 },
];


Skills.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default function Skills() {
  return (
    <Element name="habilidades" id="habilidades">
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          
          {/* Header de sección */}
          <div className="text-center mb-16">
            <span className="text-accent-500 font-medium tracking-wide uppercase text-sm">
              Mi Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
              Habilidades <span className="text-accent-500">Técnicas</span>
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Tecnologías con las que construyo soluciones web escalables y accesibles
            </p>
          </div>

          {/* Grid de habilidades */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>

        </div>
      </section>
    </Element>
  );
}