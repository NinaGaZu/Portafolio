import Project1Img from '../assets/encriptador.jpeg';
import Project2Img from '../assets/Challenge Alura Geek.jpeg';
import Project3Img from '../assets/Mis favoritos.png';
import Project4Img from '../assets/encriptador.jpeg';
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
          <div className='bg-white rounded-xl shadow-md overflow-hidden 
              transform transition duration-300 hover:scale-105'>
            <div className='flex flex-col md:flex-row'>
              <div className='p-6 md:p-8 flex-1'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold mb-2'>
                  Encriptador
                </div>
                <h3 className='text-lg font-medium mb-2'>Subheading</h3>
                <p className='text-slate-500 text-sm'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
              <div className='md:w-48 flex-shrink-0'>
                <img 
                  src={Project1Img} 
                  alt="Project1" 
                  className='w-full h-48 md:h-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className='bg-white rounded-xl shadow-md overflow-hidden 
              transform transition duration-300 hover:scale-105'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-48 flex-shrink-0'>
                <img 
                  src={Project2Img} 
                  alt="Project2" 
                  className='w-full h-48 md:h-full object-cover'
                />
              </div>
              <div className='p-6 md:p-8 flex-1'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold mb-2'>
                  Alura Geek
                </div>
                <h3 className='text-lg font-medium mb-2'>Subheading</h3>
                <p className='text-slate-500 text-sm'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className='bg-white rounded-xl shadow-md overflow-hidden 
              transform transition duration-300 hover:scale-105'>
            <div className='flex flex-col md:flex-row'>
              <div className='p-6 md:p-8 flex-1'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold mb-2'>
                  Mis Favoritos
                </div>
                <h3 className='text-lg font-medium mb-2'>Subheading</h3>
                <p className='text-slate-500 text-sm'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
              <div className='md:w-48 flex-shrink-0'>
                <img 
                  src={Project3Img} 
                  alt="Project3" 
                  className='w-full h-48 md:h-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className='bg-white rounded-xl shadow-md overflow-hidden 
              transform transition duration-300 hover:scale-105'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-48 flex-shrink-0'>
                <img 
                  src={Project4Img} 
                  alt="Project4" 
                  className='w-full h-48 md:h-full object-cover'
                />
              </div>
              <div className='p-6 md:p-8 flex-1'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold mb-2'>
                  Encriptador
                </div>
                <h3 className='text-lg font-medium mb-2'>Subheading</h3>
                <p className='text-slate-500 text-sm'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
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