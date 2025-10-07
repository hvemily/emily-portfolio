export default function About() {
  return (
    <section className="relative z-10 container py-24">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-orange-600">
          About me
        </h1>
        <div className="mx-auto mt-3 h-px w-24 rounded-full bg-gradient-to-r from-orange-500/60 via-fuchsia-500/60 to-cyan-400/60" />
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Hi, I’m <span className="text-white font-medium">Emily Brynestad</span> — a Frontend Development student at Noroff School of Technology and Digital Media.  
          With a background in Film &amp; TV production, I’ve always been drawn to storytelling and visual design.  
          Now, I bring that same creativity and structure into crafting web experiences that feel polished, intuitive and expressive.
        </p>
      </header>

      {/* Image section */}
      <div className="flex justify-center mb-16">
        <div className="rounded-full p-[2px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40">
          <div className="rounded-full overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm">
            <img
              src="/images/ems.jpg"
              alt="Portrait of Emily Brynestad"
              className="w-56 h-56 object-cover object-center sm:w-64 sm:h-64 md:w-72 md:h-72"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Grid layout */}
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Left column */}
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40">
          <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 h-full">
            <h2 className="text-xl font-semibold text-white mb-4">My background</h2>
            <p className="text-gray-300 leading-relaxed">
              Before diving into web development, I studied Film &amp; TV production at Westerdals (Høyskolen Kristiania).  
              Working with cameras, editing, and visual storytelling gave me an eye for composition, mood, and flow — 
              skills that now shape my approach to front-end design.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              I’m most motivated by projects that balance logic and creativity — combining clean, scalable code with expressive visuals 
              and a user-first mindset. My goal is to create digital experiences that feel meaningful and intuitive.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40">
          <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 h-full">
            <h2 className="text-xl font-semibold text-white mb-4">Skills &amp; focus areas</h2>
            <p className="text-gray-300 mb-5">
              I’m passionate about accessibility, structure, and creating interfaces that feel seamless across devices.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS",
                "Vite", "Accessibility", "UI/UX", "Responsive Design", "REST APIs", "Filming", "Photography", "Editing", "Lighting", "Composition", "General tech", "Gaming"
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section: Photography */}
      <div className="mt-20 rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40">
        <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Photography</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Outside of coding, I’m a passionate photographer — I love capturing concerts, events, and everyday details in vivid light and color.  
            Photography keeps me curious about framing, emotion, and visual rhythm — things that also inspire my frontend work.
          </p>
          <div className="mt-8">
            <a
              href="/photography"
              className="btn btn-primary"
            >
              View my photo gallery →
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <p className="text-gray-400 text-sm mb-4">Want to collaborate or just say hi?</p>
        <a
          href="/contact"
          className="inline-block rounded-full border border-orange-500/70 px-6 py-2 text-sm font-medium text-orange-500 hover:bg-orange-600 hover:text-white transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
