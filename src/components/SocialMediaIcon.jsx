import Link from "next/link";
import clsx from "clsx";
import {
  BsTwitter,
  BsGithub,
  BsLinkedin
} from "react-icons/bs"

export const SocialMediaProfiles= [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/contactmeakhil/",
    icon: BsLinkedin
  },
  {
    title: "Twitter",
    href: "https://twitter.com/AkhilRaj310/",
    icon: BsTwitter
  },
  {
    title: "GitHub",
    href: "https://github.com/macfros",
    icon: BsGithub
  },

]
const SocialMediaIcon= ({className,invert=false}) => {
  return (<ul
    role="list"
    className={clsx("flex gap-x-10",
    invert ? "text-white" : "text-neutral-950",
    className)}>

    { SocialMediaProfiles.map((item)=> {
      return <li key={item.title}>
       <Link href={item.href}
       aria-label={item.title}
       className={clsx("transition",
     invert ? "hover:text-neutral-200" : "hover:text-neutral-700")}>
          <item.icon className="h-6 w-6 fill-current"/>
       </Link>
      </li>
    })}
  </ul>)
}

export default SocialMediaIcon;
