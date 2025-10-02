import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Project() {
  const { slug } = useParams()
  const item = projects.find(p => p.slug === slug)
  if (!item) {
    return (
      <section className="container py-10">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-600 mt-2">The project you’re looking for does not exist.</p>
      </section>
    )
  }
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <article className="container py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm">
          <button className="btn" onClick={() => navigator.clipboard?.writeText(shareUrl)} aria-label="Copy article link" title="Copy link">Copy link</button>
          {item.live && <a className="btn" href={item.live} target="_blank" rel="noreferrer">Open live</a>}
          {item.repo && <a className="btn" href={item.repo} target="_blank" rel="noreferrer">Open README</a>}
        </div>
      </header>
      <figure className="mb-6">
        <img src={item.image} alt={item.caption || item.title} className="w-full max-h-[420px] object-cover rounded-xl" />
        {item.caption && <figcaption className="text-sm text-gray-500 mt-2">{item.caption}</figcaption>}
      </figure>
      <div className="prose max-w-none">
        <p>{item.article}</p>
      </div>
    </article>
  )
}