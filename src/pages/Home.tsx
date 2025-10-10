import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import { projects } from "../data/projects"

export default function Home() {
  // Fade-in states
  const [aboutVisible, setAboutVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)

  // Scroll helpers with offsets (tweak numbers if you want more/less gap)
  function scrollToAbout() {
    const el = document.getElementById("about-anchor")
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 55
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  function scrollToProjects() {
    const el = document.getElementById("projects-anchor")
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 60 // større negativ verdi = mer luft
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  // Observe anchors to trigger fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "about-anchor" && entry.isIntersecting) setAboutVisible(true)
          if (entry.target.id === "projects-anchor" && entry.isIntersecting) setProjectsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const aboutEl = document.getElementById("about-anchor")
    const projectsEl = document.getElementById("projects-anchor")
    if (aboutEl) observer.observe(aboutEl)
    if (projectsEl) observer.observe(projectsEl)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="starry-bg" aria-hidden="true">
          <span className="starry-twinkle" />
        </div>

        <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center">
          <div className="relative overflow-visible">
            <h1
              className="mb-6 text-2xl md:text-4xl font-normal tracking-tight
                        leading-[1.12] pb-1 overflow-visible
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-sky-300 via-violet-400 to-fuchsia-500
                        drop-shadow-[0_0_24px_rgba(168,85,247,0.55)]"
            >
              Emily Brynestad
            </h1>
          </div>

          <p className="text-lg text-gray-300">
            Frontend student @ Noroff School of Technology and Digital Media.
          </p>

          <button
            onClick={scrollToAbout}
            aria-label="Scroll to next section"
            className="mt-14 transition-transform duration-500 ease-in-out hover:scale-110 group"
          >
            <svg
              className="w-8 h-8 animate-bounce transition-all duration-700 ease-in-out 
                        text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] 
                        group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
            >
              <defs>
                <linearGradient id="hoverGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6EE7FF" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                className="transition-all duration-700 ease-in-out group-hover:[stroke:url(#hoverGradient)]"
              />
            </svg>
          </button>


        </div>
      </section>

      {/* ABOUT / MORE ABOUT ME */}
      <section
        id="about"
        className={`relative z-10 container py-24 transition-all duration-1000 ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <header id="about-anchor" className="mt-20 mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-violet-400">
            A little about me
          </h3>
          <div className="mx-auto mt-3 h-px w-16 rounded-full bg-gradient-to-r from-orange-500/60 via-fuchsia-500/60 to-cyan-400/60" />
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I’m a Frontend Development student at{" "}
            <a
              href="https://www.noroff.no"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-violet-400 hover:text-violet-300 transition-colors duration-300"
            >
              Noroff
            </a>{" "}
            with a background in Film &amp; TV production. I care about clean, accessible interfaces and thoughtful details.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 items-stretch mb-12">
          {/* Education */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40 h-full">
            <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-6 h-full">
              <h4 className="text-lg font-semibold text-white">Education</h4>
              <ul className="mt-5 space-y-5">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
                  <p className="text-gray-200">
                    2023–2025 Frontend Development (2-year), <span className="text-gray-100 font-medium">Noroff</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Focus: HTML, CSS, JavaScript, TypeScript, React, UI/UX, accessibility.
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <p className="text-gray-200">
                    2019–2022 B.A. Film &amp; TV Production,{" "}
                    <span className="text-gray-100 font-medium">Westerdals (Høyskolen Kristiania)</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Storytelling, production workflows, creative direction, editing, photography.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Focus / skills */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40 h-full">
            <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-6 h-full">
              <h4 className="text-lg font-semibold text-white">What I’m into</h4>
              <p className="mt-4 text-gray-300">
                Building smooth, accessible web experiences. Also into tech, gaming, film &amp; music.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind",
                  "Accessibility", "UI/UX", "REST APIs", "Vite", "Vitest", "Gaming", "Film", "Photography", "Music", "Culinary experiences", "Culture"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA + down arrow to projects */}
        <div className="flex flex-col items-center mt-8 mb-20">
          <Link
            to="/about"
            className="inline-block mb-8 font-medium text-violet-300 
                      transition-all duration-500 ease-in-out 
                      hover:text-violet-100 hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.7)] 
                      hover:scale-[1.05]"
          >
            Read more about me →
          </Link>
          <p className="mb-6">..or look at my projects down here!</p>




          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
            className="transition transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 animate-bounce text-white hover:text-orange-600 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className={`relative z-10 container pt-16 pb-32 transition-all duration-1000 ${
          projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <header id="projects-anchor" className="mb-10 text-center">
          <h3 className="text-2xl md:text-1xl font-normal tracking-tight text-violet-400">
            Projects made through Noroff School of Technology &amp; Digital Media
          </h3>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.slug} item={p} />
          ))}
        </div>
      </section>
    </>
  )
}
