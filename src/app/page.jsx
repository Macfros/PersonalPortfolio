import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import TechStack from "@/components/TechStack";

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
    </main>
  )
}
