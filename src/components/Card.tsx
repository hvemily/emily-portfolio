import { Link } from "react-router-dom";
import type { Project } from "../data/projects"; // <-- krever at projects.ts eksporterer Project-typen

type CardProps = { item: Project };

export default function Card({ item }: CardProps) {
  return (
    <article className="card overflow-hidden border border-black hover:border-orange-600">
      <Link to={`/projects/${item.slug}`}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4 bg-orange-600">
        <h3 className="text-lg font-semibold text-black">{item.title}</h3>
        <p className="text-sm text-black line-clamp-2 mt-1">{item.teaser}</p>

        <div className="mt-3 flex gap-2">
          <Link className="btn btn-primary" to={`/projects/${item.slug}`}>
            Read more
          </Link>
          {item.live && (
            <a className="btn text-black" href={item.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
