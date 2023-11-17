import react from "../images/react.svg";
import nextjs from "../images/nextjs.svg";
import nodejs from "../images/nodejs.svg";
import github from "../images/github.png";
import Mongodb from "../images/Mongodb.png";
import postgresql from "../images/postgresql.svg";
import vite from "../images/vite.svg";
import tailwindcss from "../images/tailwindcss.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Image from "next/image";


const Tech = [
  ["React",react],
  ["NextJS",nextjs],
  ["NodeJS",nodejs],
  ["MongoDB",Mongodb],
  ["postgresql",postgresql],
  ["Vite",vite],
  ["TailwindCSS",tailwindcss],
  ["Github",github],
]
const TechStack = () => {
  return (
   <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
   <Container>
    <FadeIn className="flex items-center gap-x-8">
    <div className="h-px flex-auto bg-neutral-800" />
      <h1 className="text-center font-display text-xl font-semibold tracking-wider text-white">My Tech Stack</h1>
      <div className="h-px flex-auto bg-neutral-800" />
    </FadeIn>

    <FadeInStagger faster>
       <ul role="list" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {
          Tech.map(([name,logo])=> (
            <li key={name}>
                <FadeIn className="flex">
                    <Image height={48} width={48} src={logo} alt={name} unoptimized/>
                    <p className="font-display text-s text-white my-auto ml-4">{name}</p>
                </FadeIn>
            </li>
          ))
        }
       </ul>
    </FadeInStagger>
   </Container>
   </div>
  )
}

export default TechStack;
