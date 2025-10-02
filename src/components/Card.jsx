import { Link } from 'react-router-dom'
export default function Card({ item }) {
  return (
    <article className="card overflow-hidden">
      <Link to={`/projects/${item.slug}`}>
        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{item.teaser}</p>
        <div className="mt-3 flex gap-2">
          <Link className="btn btn-primary" to={`/projects/${item.slug}`}>Read more</Link>
          {item.live && <a className="btn" href={item.live} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
    </article>
  )
}