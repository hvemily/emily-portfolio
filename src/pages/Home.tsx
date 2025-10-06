import { Link } from "react-router-dom"
import Card from "../components/Card"
import { projects } from "../data/projects"
import Typewriter from "../components/Typewriter"

export default function Home() {
  function scrollToProjects() {
    document.getElementById("projects-anchor")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="starry-bg" aria-hidden="true">
          <span className="starry-twinkle" />
        </div>

        <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center">
          <h1 className="mb-6">
            <Typewriter text={"<EMILY BRYNESTAD/>"} speed={70} />
          </h1>
          <p className="text-lg text-gray-300">
            Frontend student @ Noroff School of Technology and Digital Media.
          </p>

          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
            className="mt-14 transition transform hover:scale-110"
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
      <section className="relative z-10 container pt-16 pb-32 mb-16">
        <header id="projects-anchor" className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-orange-600">
            Projects made through Noroff School of Technology &amp; Digital Media
          </h2>
          <div className="mx-auto mt-3 h-px w-24 rounded-full bg-gradient-to-r from-orange-500/60 via-fuchsia-500/60 to-cyan-400/60" />
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.slug} item={p} />
          ))}
        </div>
      </section>

      {/* ABOUT / MORE ABOUT ME (teaser) */}
      <section id="about" className="relative z-10 container py-24">
        <header className="mt-20 mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-orange-600">
            A little about me
          </h3>
          <div className="mx-auto mt-3 h-px w-16 rounded-full bg-gradient-to-r from-orange-500/60 via-fuchsia-500/60 to-cyan-400/60" />
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I’m a Frontend Development student at Noroff with a background in Film &amp; TV production.
            I care about clean, accessible interfaces and thoughtful details.
          </p>

          {/* CTA to full About page */}
          <div className="mt-6">
            <Link to="/about" className="btn btn-primary">
              Read more about me →
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
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
                  "Accessibility", "UI/UX", "REST APIs", "Vite", "Vitest",
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
      </section>
    </>
  )
}
