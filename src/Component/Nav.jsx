import { GiButterfly } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
  setToggle(true);
}

function closeMenu(){
  setToggle(false);
}

  return(
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="#" className="text-white font-mono text-3xl
          tracking-winder flex items-center"><GiButterfly /> Gianina Gaete</a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
          <Link to="habilidades"
            smooth={true}
            duration={500}
            offset={-70} // ajusta según la altura de tu navbar
            className="text-white hover:bg-indigo-800
            rounded-full px-5 py-2 text-xl">Habilidades</Link>  {/* + formación TI */}
          <Link to="proyectos"
            smooth={true}
            duration={500}
            offset={-70} // ajusta según la altura de tu navbar
            className="text-white hover:bg-indigo-800
            rounded-full px-5 py-2 text-xl">Proyectos</Link>
          <Link to="contacto"
            smooth={true}
            duration={500}
            offset={-70} // ajusta según la altura de tu navbar 
            className="text-white hover:bg-indigo-800
            rounded-full px-5 py-2 text-xl">Contacto</Link>
          </div>
          <div className="ssm:block lg:hidden">
            
            {toggle ? (
              <AiOutlineClose size={30} onClick={closeMenu}
               className="text-white cursor-pointer"/>) 
              : (<HiMenuAlt1 size={30} onClick={openMenu}
              className="text-white cursor-pointer"/>)}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex-justify-between ml-10">
          <ul>
            <Link to="habilidades"
            smooth={true}
            duration={500}
            offset={-70}>
            <li className="text-white text-xl mb-2 
            cursor-pointer">Habilidades</li>
            </Link>
            <Link to="proyectos"
            smooth={true}
            duration={500}
            offset={-70}>
            <li className="text-white text-xl mb-2 
            cursor-pointer">Proyectos</li>
            </Link>
            <Link to="contacto"
            smooth={true}
            duration={500}
            offset={-70}>
            <li className="text-white text-xl mb-2 
            cursor-pointer">Contacto</li>
            </Link>
          </ul>
        </div>
        ):(
          <div></div>
        )}
        
      </div>
    </>
  )
}

export default Nav;