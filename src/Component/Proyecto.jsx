import Project1Img from '../assets/encriptador.jpeg';
import Project2Img from '../assets/Challenge Alura Geek.jpeg';
import Project3Img from '../assets/Mis favoritos.png';
import Project4Img from '../assets/gestor modo oscuro.png';
import Project5Img from '../assets/test de conducir.png';
import { Element } from "react-scroll";

const Proyecto = () => {
  return (
    <Element name="proyectos">
      <section className='bg-indigo-800 py-16 px-4 md:px-8 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-2xl md:text-3xl text-white text-center mb-12'>
            Proyectos
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

            {/* Proyecto 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto relative">
                  <img src={Project1Img} alt="Project1" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    Encriptador
                  </div>
                  <h3 className="text-lg font-medium mb-2">Challenge Oracle</h3>
                  <p className="text-slate-500 text-sm">
                    Aplicación que permite encriptar y desencriptar mensajes con una lógica definida. Proyecto realizado con HTML, CSS y JavaScript.
                  </p>
                   {/* Botones */}
                    <div className="flex gap-4 p-3">
                      <a
                        href="https://github.com/NinaGaZu/Encriptador"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                      >
                        Ver Repositorio
                      </a>
                      <a
                        href="https://encriptador-cyan-ten.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto relative">
                  <img src={Project2Img} alt="Project2" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    Alura Geek
                  </div>
                  <h3 className="text-lg font-medium mb-2">E-commerce</h3>
                  <p className="text-slate-500 text-sm">
                    Proyecto de gestión de productos geek, donde los usuarios pueden listar, eliminar, registrar y modificar productos de forma dinámica utilizando HTML, CSS y JavaScript.
                  </p>
                  {/* Botones */}
                    <div className="flex gap-4 p-3">
                      <a
                        href="https://github.com/NinaGaZu/Challenge-AluraGeek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                      >
                        Ver Repositorio
                      </a>
                      <a
                        href="challenge-alura-geek-gray-tau.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto relative">
                  <img src={Project3Img} alt="Project3" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    Mis Favoritos
                  </div>
                  <h3 className="text-lg font-medium mb-2">Buscador de Películas</h3>
                  <p className="text-slate-500 text-sm">
                    Aplicación que permite buscar y guardar tus películas favoritas utilizando la API de OMDB. Proyecto realizado con React y hooks personalizados.
                  </p>
                  {/* Botones */}
                    <div className="flex gap-4 p-3">
                      <a
                        href="https://github.com/NinaGaZu/Mis-favoritos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                      >
                        Ver Repositorio
                      </a>
                      <a
                        href="https://mis-favoritos.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto relative">
                  <img src={Project4Img} alt="Project4" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    Gestor de Tareas
                  </div>
                  <h3 className="text-lg font-medium mb-2">Proyecto JS Vanilla</h3>
                  <p className="text-slate-500 text-sm">
                    Gestor de tareas desarrollado en JavaScript con funciones de creación, edición, filtrado y almacenamiento en localStorage. Diseño responsive con soporte para modo oscuro.
                  </p>
                  {/* Botones */}
                    <div className="flex gap-4 p-3">
                      <a
                        href="https://github.com/NinaGaZu/Test-de-conducir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                      >
                        Ver Repositorio
                      </a>
                      <a
                        href="https://test-de-conducir.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Proyecto 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto relative">
                  <img src={Project5Img} alt="Project5" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                    Test de Conducir
                  </div>
                  <h3 className="text-lg font-medium mb-2">Cuestionario Base Exámen Teórico</h3>
                  <p className="text-slate-500 text-sm">
                   Proyecto personal.  Aplicación interactiva para practicar el test teórico de conducir A1, A2, D, E en Chile.
                  </p>
                  {/* Botones */}
                    <div className="flex gap-4 p-3">
                      <a
                        href="https://github.com/NinaGaZu/Gestor-de-tareas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                      >
                        Ver Repositorio
                      </a>
                      <a
                        href="gestor-de-tareas-nu.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Element>
  );
};

export default Proyecto;
