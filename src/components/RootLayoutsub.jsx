'use client'

import { usePathname } from 'next/navigation'
import { useId, useState, useRef, useEffect } from 'react'; //useId - generates a unique id
import {motion, MotionConfig, useReducedMotion} from "framer-motion";
import Header from "./Header";
import Navigation from "./Navigation";
import Container from "./Container";
import Footer from "./Footer";
import SocialMediaIcon from "./SocialMediaIcon";
import {HiMenuAlt4} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";

const RootLayoutInner= ({children}) => {
  const panelId= useId();
  const [expanded, setExpanded]= useState(false);
  const openRef= useRef();
  const closeRef= useRef();
  const navRef= useRef();
  const shouldReducedMotion = useReducedMotion();
  useEffect(()=> {
    function onClick(event) {
      if(event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }

     window.addEventListener("click",onClick);

     return () => {
       window.removeEventListener("click",onClick);
     };

  },[]);

  return (
    <MotionConfig transition={shouldReducedMotion ? {duration: 0}: undefined }>
       <header>
         <div className="absolute left-0 right-0 top-2 z-40 pt-14"
         aria-hidden={expanded ? "true" : undefined}
         inert={expanded ? "" : undefined}>
             <Header
             panelId={panelId}
             icon={HiMenuAlt4}
             toggleRef={openRef}
             expanded={expanded}
             onToggle={()=> {
               setExpanded((expanded) => !expanded);
               window.setTimeout(()=>
             closeRef.current?.focus({preventScroll: true}));
             }}/>
         </div>
        <motion.div
         layout
         id={panelId}
         style={{height: expanded ? "auto" : "0.5rem"}}
         className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
         aria-hidden={expanded ? undefined : ""}
         inert={expanded ? undefined : ""}
        >
            <motion.div layout className="bg-neutral-800">
               <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
                 <Header
                 invert
                 panelId={panelId}
                 icon={IoMdClose}
                 toggleRef={openRef}
                 expanded={expanded}
                 onToggle={()=> {
                   setExpanded((expanded) => !expanded);
                   window.setTimeout(()=>
                 closeRef.current?.focus({preventScroll: true}));
                 }}/>
               </div>
               <Navigation />
               <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                   <Container>
                      <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                        <div className="sm:border-l sm:bordertransparent sm:pl-16">
                          <h2 className="ont-display  text-base font-semibold text-white">
                            Find me on:
                          </h2>
                          <SocialMediaIcon className="mt-6 mb-6" invert/>
                        </div>
                      </div>
                   </Container>
               </div>
            </motion.div>
        </motion.div>
       </header>
       <motion.div
       layout
       style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
       className="relative flex flex-auto overflow-hidden bg-white pt-14"
       >
         <motion.div
         layout
         className="relative isolate flex w-full flex-col pt-9">
             <main className="w-full flex-auto"> {children} </main>
             {/*Footer*/}
             <Footer />
         </motion.div>
       </motion.div>
    </MotionConfig>
  )
};

const RootLayoutsub = ({children}) => {
  const pathname=usePathname();
  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}

export default RootLayoutsub;
