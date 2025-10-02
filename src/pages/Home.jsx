import Card from "../components/Card"
import { projects } from "../data/projects"
import Typewriter from "../components/Typewriter"

export default function Home() {
  function scrollToProjects() {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* HERO */}
      <section className="container h-screen flex flex-col items-center justify-center text-center">
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
            className="w-8 h-8 animate-bounce text-white hover:text-red-600 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

      </section>

      {/* PROSJEKTER */}
      <section id="projects" className="container py-10">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold">Projects</h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.slug} item={p} />
          ))}
        </div>
      </section>
    </>
  )
}
