"use client";

import WorkCard from "@/components/WorkCard";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import brikow from "@/images/brikow.svg";
import celebal from "@/images/celebal.svg";
import icon from "@/images/icon.svg";
import { Chrono } from "react-chrono";
import "@/app/globals.css";
import Image from "next/image"

const workdes=[
  {
    title:(<div className="">Brickow</div>),
    cardTitle: "Frontend Developer",
    cardSubtitle: "july 23 - Oct 23",
    cardDetailedText:(
      <ul className="flex flex-col gap-4 tracking-wide sm:text-[1rem]">
        <li>Managed front-end development using Vite in the MERN stack, seamlessly integrating ReactJS, ExpressJS, and Node.js. Established efficient communication protocols and organized workflows, yielding a robust project architecture.</li>
        <li>Optimized Tailwind CSS for design efficiency and performance, implementing critical features such as a cumulative billing system, project tracking, and JWT-based authentication and authorization.</li>
        <li>Proficiently managed version control using Git, ensuring seamless collaboration within a multidisciplinary team.</li>
      </ul>
    ),
    logo: brikow,
  },
  {
    title:(<div className="">Celebal technologies</div>),
    cardTitle: "Web Developer",
    cardSubtitle: "june 23 - Aug 23",
   cardDetailedText:(
      <ul className="flex flex-col gap-4 tracking-wide sm:text-[1rem]">
        <li>Collaborated closely with a mentor to acquire in-depth knowledge of React's core concepts, including components, state management, and UI rendering techniques, resulting in a strong foundation.</li>
        <li>Implemented a full-stack project with CRUD capabilities, showcasing expertise in frontend-backend data flow management and demonstrating end-to-end development skills.</li>
      </ul>
    ),

    logo: celebal,
  },
  {
    title:(<div className="">TestBook</div>),
    cardTitle: "Technical Writer",
    cardSubtitle: "june 22 - Aug 22",
    cardDetailedText:(
      <ul className="flex flex-col gap-4 tracking-wide sm:text-[1rem]">
        <li>Specializing in meticulously crafting optimized examination pages for government job vacancies across India, with a keen emphasis on <b>SEO enhancement.</b></li>
        <li>Conducting exhaustive research to ensure content accuracy and relevance, effectively aligning with the specific demands of the domain.</li>
        <li>Seamlessly integrating advanced SEO strategies to enhance organic visibility while maintaining precision and relevance in content presentation for highly optimized examination pages.</li>
      </ul>
    ),
    logo: icon,
  },
]

const Experience = () => {
  return (
    <FadeIn className="relative">
        <PageIntro eyebrow="" title="My Experiences" className="z-10 bg-red-900">
       I have completed Internships in the following companies. You can see the timeline of my internships below.
       </PageIntro>
       <div>
       <FadeIn>
         <Chrono
            hideControls
             items={workdes}
            mode="VERTICAL_ALTERNATING"
            disableClickOnCircle
            itemWidth={100}
            cardHeight={300}
            theme={{
                    primary: "black",
                    secondary: "black",
                    cardBgColor: "#F0F0F0",
                    cardForeColor: "violet",
                    titleColor: "black",
                    titleColorActive: "White",
                    cardTitleColor: "black",
                  }}
             timelinePointDimension={70}
             >
             <div className="chrono-icons">
                        <Image
                          src={brikow}
                          alt="brikow"

                        />
                        <Image
                          src={celebal}
                          alt="celebal"
                        />
                        <Image
                          src={icon}
                          alt="testbook"
                        />
               </div>
               </Chrono>
               </FadeIn>
       </div>
   </FadeIn>
  )
}

export default Experience;
