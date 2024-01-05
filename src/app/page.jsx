import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import TechStack from "@/components/TechStack";
import Button from "@/components/Button"

export default function Home() {
  return (
    <main className="text-black">

    <Container className="mt-24 sm:32 ">
     <FadeIn className="max-w-3xl">
       <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
       Hi! I'm Akhil Raj
       </h1>
       <p className="mt-6 text-xl text-neutral-600">
       I'm a Full Stack Web Developer
       </p>
     </FadeIn>
    </Container>

    <TechStack />

    <div className="flex justify-center items-center mt-5 h-20">
     <Button href={process.env.RESUME_LINK} children="Resume" className="text-5xl h-[50px]
     w-1/6"/>

    </div>


    </main>
  )
}
