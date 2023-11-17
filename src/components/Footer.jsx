import Container from "./Container";
import FadeIn from "./FadeIn";
import Link from "next/link";
import Logo from "./Logo"
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return(
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
       <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        <FooterNavigation />
       </div>
       <div className="mb-20 mt-24 flex flex-wrap items-end w-full justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
             Akhil Raj
            </Logo>
            </Link>
            <p className="text-sm text-neutral-700">
              @Akhil Raj Portfolio {new Date().getFullYear()}
            </p>
       </div>
      </FadeIn>
    </Container>
  )
}

export default Footer;
