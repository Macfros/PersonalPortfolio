import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import ContactDetails from "@/components/ContactDetails"
import ContactForm from "@/components/ContactForm";


const Contact= () => {
  return (
    <>
    <PageIntro eyebrow="connect with me" title="Send a email">
    You can fill out the form below to send me an email so that we can connect
    </PageIntro>
    <Container class="mt-24 sm:mt-32 lg:mt-40">
     <div classNam="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
        <ContactDetails />
        <ContactForm />
     </div>
    </Container>
    </>
  )
}

export default Contact;
