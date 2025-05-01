"use client";

import WorkCard from "@/components/WorkCard";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import RSK from "@/images/RSK.svg";
import brikow from "@/images/brikow.svg";
import celebal from "@/images/celebal.svg";
import icon from "@/images/icon.svg";
import { Chrono } from "react-chrono";
import "@/app/globals.css";
import Image from "next/image"

const workdes=[
  {
    title:(<div className="">RSK Business Solutions</div>),
    cardTitle: "Backend Developer - Full Time",
    cardSubtitle: "March 24 - Present",
    cardDetailedText:(
      <ul className="flex flex-col gap-4 tracking-wide sm:text-[1rem]">
        <li>Built .NET Core services with gRPC APIs, reducing inter-service latency by 70% and enabling real-time server log access.</li>
        <li>Integrated an API Gateway with advanced authorization and caching mechanisms, significantly enhancing security and reducing data retrieval times by 80%.</li>
        <li>Built an automated PDF generation system, producing reports, invoices, and handbooks with an average processing time of less than 2 seconds per document.</li>
      </ul>
    ),
    logo: RSK,
  },
  {
    title:(<div className="">Briqko</div>),
    cardTitle: "Frontend Developer - Internship",
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
    cardTitle: "Web Developer - Internship",
    cardSubtitle: "june 23 - Aug 23",
   cardDetailedText:(
      <ul className="flex flex-col gap-4 tracking-wide sm:text-[1rem]">
        <li>Collaborated closely with a mentor to acquire in-depth knowledge of React core concepts, including components, state management, and UI rendering techniques, resulting in a strong foundation.</li>
        <li>Implemented a full-stack project with CRUD capabilities, showcasing expertise in frontend-backend data flow management and demonstrating end-to-end development skills.</li>
      </ul>
    ),

    logo: celebal,
  },
  {
    title:(<div className="">TestBook</div>),
    cardTitle: "Technical Writer - Internship",
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
        My experience spans both frontend and backend technologies, enabling me to build seamless, full-stack web applications from concept to deployment.
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
                          src={RSK}
                          alt="brikow"

                        />
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
