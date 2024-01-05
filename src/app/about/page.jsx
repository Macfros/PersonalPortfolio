"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from "next/image";

import { EffectCards } from 'swiper/modules';

import PageIntro from "@/components/PageIntro";


const AboutPage = () =>{

    const Images= ["/Img-1.png","/Img-2.png","/Img-3.png","/Img-4.png","/Img-5.png","/Img-6.png","/Img-7.png"];

  return(
    <PageIntro eyebrow="About Me" title="Learn <-> Implement">
    <p>
       I believe that the only way you grow is by constantly learning new things and implementing it in your
       daily life beacuse without implementation it's just theory.
     </p>
     <div className="mt-10 max-w-2xl space-y-6 text-base">
       <p>
         I'm a full stack web developer. My primary tech Stack is MERN. I am also involved in DSA problem solving and have solved over <b>350+</b> questions on coding platforms such as LeetCode and GeeksforGeeks.
       </p>
       <p>
         My extra curriculars include <b>Public Speaking and Debating</b>. I am a part of public speaking and ebating society at my college and have participated and organised various events.
       </p>
     </div>
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-20"
      >
        {Images.map((image) => (
                  <SwiperSlide key={image} className="

                  "
                  ><Image src={image} alt={"Description"} width={500} height={300} /></SwiperSlide>
                ))}
      </Swiper>
    </PageIntro>
  )
}

export default AboutPage;
