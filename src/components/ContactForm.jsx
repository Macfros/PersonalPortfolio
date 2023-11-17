"use client";

import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import {useState} from "react";
import clsx from "clsx";

const ContactForm = () => {
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });

  const handleParam = () => (e) => {
   const name = e.target.name;
   const value = e.target.value;
   setQuery((prevState) => ({
     ...prevState,
     [name]: value
   }));
 };


 const formSubmit = (e) => {
   e.preventDefault();
   const formData = new FormData();
   Object.entries(query).forEach(([key, value]) => {
     formData.append(key, value);
   });
   fetch(`https://getform.io/f/${process.env.NEXT_PUBLIC_MAIL_ID}`, {
     method: "POST",
     body: formData,
     encType: "multipart/form-data"
   }).then(() => setQuery({ name: "", email: "", message: "" }));
 };

  return (
  <FadeIn>
     <form onSubmit={formSubmit}>
      <h2 className="font-display text-base font-semibold text-neutral-950">
      Send a message !
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
      <TextInput label="Name" name="name" autoComplete="name" value={query.name}
            onChange={handleParam()} required/>
      <TextInput
        label="Email"
        type="email"
        name="email"
        value={query.email}
      onChange={handleParam()}
        autoComplete="email"
      />
       <TextInput label="Message" name="message"  value={query.message}
            onChange={handleParam()}/>
      </div>
      <Button type="submit" className="mt-10" disabled={!query.name  || !query.email || !query.message} >
         Let’s work together
       </Button>
     </form>
  </FadeIn>
  )
}

export default ContactForm;
