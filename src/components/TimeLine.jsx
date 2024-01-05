'use client'

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import FadeIn from "./FadeIn";
import brikow from "@/images/brikow.svg";


const TimeLine = () => {
  return (
    <Timeline className="relative w-4/5 sm:w-1/2 sm:w-m-10 mx-auto mt-10 font-display">
     <Timeline.Item>
       <Timeline.Point icon={IoSchool} />
        <FadeIn>
       <Timeline.Content>
         <Timeline.Time>August 2020 - present</Timeline.Time>
         <Timeline.Title>Amity University Haryana</Timeline.Title>
         <Timeline.Body className="tracking-tight">
           Bachelor of Technology in Computer Science Engineering
           <br />
           Minor in Computer Forensics
           <br />
           83.4%
         </Timeline.Body>
       </Timeline.Content>
       </FadeIn>
     </Timeline.Item>
     <Timeline.Item>
       <Timeline.Point icon={FaSchool} />
       <FadeIn>
       <Timeline.Content>
         <Timeline.Time>2011- 2019</Timeline.Time>
         <Timeline.Title>UCSKM Public School</Timeline.Title>
         <Timeline.Body>
         PCM -92.8%
         </Timeline.Body>
       </Timeline.Content>
      </FadeIn>
     </Timeline.Item>
   </Timeline>
  )
}

export default TimeLine;
