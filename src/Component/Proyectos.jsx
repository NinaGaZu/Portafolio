// src/components/Projects.jsx
import { useState } from "react";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
/* import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"; */

// ✅ Datos centralizados con categorías y tecnologías
const proyectos = [
  {
    id: 1,
    title: "Encriptador Challenge Oracle",
    shortTitle: "Encriptador",
    category: "javascript",
    image: "/src/assets/encriptador.jpeg",
    description: "Aplicación que permite encriptar y desencriptar mensajes con una lógica definida. Implementa algoritmos de cifrado personalizados y diseño responsive.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/NinaGaZu/Encriptador",
    demoUrl: "https://encriptador-cyan-ten.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Alura Geek - E-commerce",
    shortTitle: "Alura Geek",
    category: "javascript",
    image: "/src/assets/Challenge Alura Geek.jpeg",
    description: "Proyecto de gestión de productos geek donde los usuarios pueden listar, eliminar, registrar y modificar productos de forma dinámica.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    repoUrl: "https://github.com/NinaGaZu/Challenge-AluraGeek",
    demoUrl: "https://challenge-alura-geek-gray-tau.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Mis Favoritos - Recomendaciones",
    shortTitle: "Mis Favoritos",
    category: "react",
    image: "/src/assets/Mis favoritos.png",
    description: "Página web que reúne recomendaciones personales en categorías como anime, libros, películas y cómics. Con contenido cargado dinámicamente y estructura modular.",
    technologies: ["JavaScript", "Módulos ES6", "CSS3"],
    repoUrl: "https://github.com/NinaGaZu/Mis-favoritos",
    demoUrl: "https://mis-favoritos.vercel.app/",
    featured: false
  },
  {
    id: 4,
    title: "Gestor de Tareas - Modo Oscuro",
    shortTitle: "Gestor de Tareas",
    category: "javascript",
    image: "/src/assets/gestor modo oscuro.png",
    description: "Gestor de tareas con funciones de creación, edición, filtrado y almacenamiento en localStorage. Incluye diseño responsive y modo oscuro/claro.",
    technologies: ["JavaScript", "LocalStorage", "CSS3", "Responsive"],
    repoUrl: "https://github.com/NinaGaZu/Gestor-de-tareas",
    demoUrl: "https://gestor-de-tareas-nu.vercel.app/",
    featured: true
  },
  {
    id: 5,
    title: "Test de Conducir - Chile",
    shortTitle: "Test de Conducir",
    category: "javascript",
    image: "/src/assets/test de conducir.png",
    description: "Aplicación interactiva para practicar el test teórico de conducir A1, A2, D, E en Chile. Cuestionario con módulos ES6 y validación de respuestas.",
    technologies: ["HTML5", "CSS3", "JavaScript", "ES6 Modules"],
    repoUrl: "https://github.com/NinaGaZu/Test-de-conducir",
    demoUrl: "https://test-de-conducir.vercel.app/",
    featured: false
  }
];

// Categorías para filtros
const categories = [
  { id: "all", label: "Todos", count: proyectos.length },
  { id: "javascript", label: "JavaScript", count: proyectos.filter(p => p.category === "javascript").length },
  { id: "react", label: "React", count: proyectos.filter(p => p.category === "react").length },
];

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProyectos = activeFilter === "all"
    ? proyectos
    : proyectos.filter(proyecto => proyecto.category === activeFilter);

  return (
    <Element name="proyectos" id="proyectos">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header de sección */}
          <div className="text-center mb-16">
            <span className="text-accent-500 font-medium tracking-wide uppercase text-sm">
              Portafolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
              Proyectos <span className="text-accent-500">Destacados</span>
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Soluciones reales que demuestran mis habilidades en desarrollo web
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300
                  ${activeFilter === category.id
                    ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                aria-pressed={activeFilter === category.id}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full
                  ${activeFilter === category.id 
                    ? "bg-white/20 text-white" 
                    : "bg-neutral-200 text-neutral-600"
                  }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProyectos.map((proyecto, index) => (
              <ProjectCard 
                key={proyecto.id} 
                proyecto={proyecto}
                index={index}
              />
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredProyectos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">
                No hay proyectos en esta categoría aún.
              </p>
            </div>
          )}

        </div>
      </section>
    </Element>
  );
}