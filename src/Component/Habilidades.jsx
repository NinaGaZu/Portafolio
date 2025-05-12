import H1 from "../assets/html5.png";
import H2 from "../assets/css.png";
import H3 from "../assets/JS.png";
import H4 from "../assets/React.jpeg";
import H5 from "../assets/mysql.png";
import H6 from "../assets/node_js.jpeg";
import H7 from "../assets/git.png";
import H8 from "../assets/github.jpeg";
import { Element } from "react-scroll";
 
 export default function Habilidades() {
   return (
    <Element name="habilidades">
     <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row flex-wrap justify-center gap-10">
      {/* <div className='grid justify-items-center m-10'>
        <h1 className='text-3xl text-white mt-10'>Habilidades</h1>
      </div> */}

      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H1} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                Html
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H2} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                CSS
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H3} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                JavaScript
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H4} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                React
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H5} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                MySQL
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H6} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                Node.JS
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H7} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                Git
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-8 
      hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"> 
          <img 
            src={H8} 
            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" 
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
              truncate dark:text-slate-200">
                Github
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base
              leading-tight truncate dark:text-slate-400">
                Intermedio
              </div>
            </div>
        </div>

      </div>
     </div>
    </Element>
   )
 }
 