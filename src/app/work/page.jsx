import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import clsx from "clsx";
import WorkCard from "@/components/WorkCard";

const Projects = [
    {
        title: "StayScape",
        summary:"Global lodging network with diverse listings, instant bookings, and host communication options.",
        liveUrl: "https://stayscape.vercel.app/",
        githubUrl:"https://github.com/Macfros/Stayscape",
        imageUrl:"/Stayscape.png",

    },
    {
        title: "AmiSocial",
        summary:"MERN-based campus social app: connections, events, secure login, dark/light modes, university-focused.",
        githubUrl:"https://github.com/Macfros/AmiSocial",
        imageUrl:"/Amisocial.PNG",

    },
    {
        title: "Crafted Visions",
        summary:"Online platform for creative professionals to showcase and share design portfolios worldwide.",
        liveUrl: "https://crafted-visions.vercel.app/",
        githubUrl:"https://github.com/Macfros/craftedVisions",
        imageUrl:"/CraftedVision.png",

    },
    {
        title: "Simon Game",
        summary:"Digital memory and pattern recognition game for fun and cognitive challenge enthusiasts.",
        githubUrl:"https://github.com/Macfros/Simon-Game",
        imageUrl:"/Simon.JPG",

    },
    {
        title: "Weather App",
        summary:"ReactJS-powered application delivering real-time weather forecasts with user-friendly design and functionality.",
        liveUrl: "https://weatherappakhil.netlify.app",
        githubUrl:"https://github.com/Macfros/weatherappReactJS",
        imageUrl:"/WeatherApp.JPG",
    },
    {
        title: "Ed-tech Landing Page",
        summary:"Ed tech startup landing page: Compelling testimonials, diverse courses, engaging videos, and more.",
        liveUrl: "https://akhil-project-leverage.netlify.app",
        githubUrl:"https://github.com/Macfros/Leverage.edu-IELTS-",
        imageUrl:"/leverage.png",
    },
    ]

const WorkPage=() => {
        //grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black
  return (
    <>
    <PageIntro eyebrow="My Projects" title="Bridging Frontend Creativity with Backend Logic">
    <p>
      Welcome to my project gallery, where I blend front-end design with back-end functionality. Here, you'll find a range of projects that showcase my skills as a full-stack developer. From building responsive websites to creating efficient back-end systems, each project highlights practical solutions to real-world problems. Take a look to see how I apply straightforward, effective coding to create user-friendly web experiences.
    </p>
    </PageIntro>
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Projects.map((project)=> (
            <FadeIn> <WorkCard
                key={project.title}
                title={project.title}
                summary={project.summary}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
                />
                </FadeIn>
            ))}
    </div>
    </div>



    </>
  )
}

export default WorkPage;
