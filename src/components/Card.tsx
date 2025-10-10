import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type CardProps = { item: Project };

export default function Card({ item }: CardProps) {
  return (
    <article className="group relative rounded-2xl">
  {/* gradient-border wrapper */}
  <div
    className="rounded-2xl p-[1px] 
    bg-gradient-to-r from-sky-400/40 via-violet-500/30 to-fuchsia-500/40 
    transition-transform duration-500 group-hover:scale-[1.015]"
  >
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/80 backdrop-blur-sm">
      <Link to={`/projects/${item.slug}`} className="block relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* shine sweep */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          style={{
            background:
              "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            transform: "translateX(-100%)",
            animation: "shine 1.2s ease-in-out forwards",
          }}
        />
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-medium text-white tracking-wide">
          {item.title}
        </h3>
        <p className="text-sm text-gray-300/90 line-clamp-2 mt-1">
          {item.teaser}
        </p>

        <div className="mt-3 flex gap-2">
          <Link
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-violet-300 
            transition-all duration-500 ease-in-out hover:text-fuchsia-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            to={`/projects/${item.slug}`}
          >
            Read more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>

          {item.live && (
            <a
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-black
                        bg-gradient-to-r from-sky-400 to-fuchsia-500 
                        hover:from-sky-300 hover:to-fuchsia-400 transition-all duration-500"
              href={item.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  </div>

  {/* glow ring on hover */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 
                  group-hover:ring-violet-400/30 transition" />
</article>

  );
}
