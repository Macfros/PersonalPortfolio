import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import clsx from "clsx";
import WorkCard from "@/components/WorkCard";

const Projects = [
    {
        title: "StayScape",
        summary:"Clone of Airbnb",
        githubUrl:"url-1",
        imageUrl:"",
    },
    {
        title: "AmiSocial",
        summary:"IntraUniveristy Social Media Application",
        githubUrl:"url-2",
        imageUrl:"",
    },
    {
        title: "Crafted Visions",
        summary:"Clone of dribble",
        githubUrl:"url-3",
        imageUrl:"",
    },
    {
        title: "Simon Game",
        summary:"A simple memory game",
        githubUrl:"url-4",
        imageUrl:"",
    },
    {
        title: "Weather App",
        summary:"Weather application on reactJS",
        githubUrl:"url-5",
        imageUrl:"",
    },
    {
        title: "Leverage Landing Page",
        summary:"A landing page",
        githubUrl:"url-6",
        imageUrl:"",
    },
    ]

const WorkPage=() => {
        //grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black
  return (
    <>
    <PageIntro eyebrow="My Work" title="Projects made for real-world problems">
    <p>
      I believe in making projects on the real world problems which I have faced or observed in the society.
      Combining My skills and creativity to develop applications that have real life utility is what I aim for. Please
      check out my work below:
    </p>
    </PageIntro>
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Projects.map((project)=> (
            <WorkCard
                key={project.title}
                title={project.title}
                summary={project.summary}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
                />
            ))}
    </div>
    </div>



    </>
  )
}

export default WorkPage;
