import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";


const WorkCard = ({title, summary ,liveUrl, githubUrl="/work", imageUrl="/Img-1.png"}) => {
   return(
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow h-80 w-96">
            <div className="h-80 w-96">
               <img className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" src={imageUrl}/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
               <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <h1 className="text-3xl font-bold text-white">{title}</h1>
                  <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{summary}</p>
                  <div className="flex gap-2">
                  {liveUrl && <button className="rounded-full bg-neutral py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
                                       <div className="flex gap-2">
                                       <IoIosRocket />
                                       <Link href={liveUrl} target="_blank">Live</Link>
                                       </div>
                                    </button>}
                  <button className="rounded-full bg-neutral py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
                     <div className="flex gap-2">
                        <FaGithub />
                        <Link href={githubUrl} target="_blank">Github</Link>
                     </div>
                  </button>
                  </div>
               </div>
            </div>
         </div>
      )
}

export default WorkCard;
