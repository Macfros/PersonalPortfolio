import PageIntro from "@/components/PageIntro";


const AboutPage = () =>{
  return(
    <PageIntro eyebrow="About Me" title="Learn <-> Implement">
    <p>
       We believe that our strength lies in our collaborative approach, which
       puts our clients at the center of everything we do.
     </p>
     <div className="mt-10 max-w-2xl space-y-6 text-base">
       <p>
         Studio was started by three friends who noticed that developer
         studios were charging clients double what an in-house team would
         cost. Since the beginning, we have been committed to doing things
         differently by charging triple instead.
       </p>
       <p>
         At Studio, we’re more than just colleagues — we’re a family. This
         means we pay very little and expect people to work late. We want our
         employees to bring their whole selves to work. In return, we just
         ask that they keep themselves there until at least 6:30pm.
       </p>
     </div>
    </PageIntro>
  )
}

export default AboutPage;