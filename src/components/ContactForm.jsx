"use client";

import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import {useState} from "react";

//re_SCgWMyy3_FSTHtDJgykXqLYB3XhKjGNCY

const ContactForm = () => {
  return (
  <FadeIn>
     <form>
      <h2 className="font-display text-base font-semibold text-neutral-950">
      Send a message !
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
      <TextInput label="Name" name="name" autoComplete="name" />
      <TextInput
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
      />
       <TextInput label="Message" name="message" />
      </div>
      <Button type="submit" className="mt-10">
         Let’s work together
       </Button>
     </form>
  </FadeIn>
  )
}

export default ContactForm;
