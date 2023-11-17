"use client"
import Container from "./Container"
import Logo from "./Logo"
import Link from "next/link"
import Button from "./Button"
import clsx from "clsx";
import {HiMenuAlt4} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";


const Header = ({panelId, invert=false, icon, expanded, onToggle, toggleRef }) => {
  return (
    <Container >
    <div className="flex items-center justify-between">
     <Link href={"/"} aria-label="Home"><Logo invert={invert} >Akhil Raj</Logo></Link>
     <div className="flex items-center gap-x-8 ">
       <Button href={"/contact"} invert={invert}>
         Contact Me
       </Button>
       <button ref={toggleRef}
       type="button"
       onClick={onToggle}
       aria-expanded={expanded.toString()}
       aria-controls={panelId}
       className={clsx(
         "group -m-2.5 rounded-full p-2.5 transition",
         invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
       )}
       aria-label="Toggle navigation"
       >
         {!expanded ? <HiMenuAlt4
           className={clsx("h-6 w-6",
           invert ? "fill-white group-hover:fill-neutral-200": "fill-neutral-950 group-hover:fill-neutral-700")}/>
           : <IoMdClose  className={clsx("h-6 w-6",
            invert ? "fill-white group-hover:fill-neutral-200": "fill-neutral-950 group-hover:fill-neutral-700")}/>}
       </button>
     </div>
    </div>
    </Container>
  )
}

export default Header;
