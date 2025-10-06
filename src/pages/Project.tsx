import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";

function words(str: string) {
  return (str || "").trim().split(/\s+/).filter(Boolean);
}

export default function Project() {
  const { slug } = useParams();
  const item = projects.find((p) => p.slug === slug);

  // progress bar
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? (done / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!item) {
    return (
      <section className="container py-10">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-400 mt-2">
          The project you’re looking for does not exist.
        </p>
        <Link className="btn mt-6" to="/">Back to home</Link>
      </section>
    );
  }

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  // lesetid
  const readMinutes = useMemo(() => {
    const w = words(item.article || "").length;
    return Math.max(1, Math.round(w / 180)); // ~180 wpm
  }, [item.article]);

  // prev/next
  const idx = projects.findIndex((p) => p.slug === item.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const stack = (item as any).stack as string[] | undefined; // optional
  const year = (item as any).year as string | number | undefined; // optional
  const role = (item as any).role as string | undefined; // optional

  return (
    <>
      {/* progress bar */}
      <div
        className="fixed left-0 top-0 h-1 z-40 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-400"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <article ref={articleRef} className="container py-10">
        {/* breadcrumb / back */}
        <nav className="mb-6 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-gray-300">{item.title}</span>
        </nav>

        {/* hero header */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-white via-orange-200 to-fuchsia-300 bg-clip-text text-transparent drop-glow">
            {item.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-1 text-gray-300/90">
              ~{readMinutes} min read
            </span>
            {year && (
              <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-1 text-gray-300/90">
                {year}
              </span>
            )}
            {role && (
              <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-1 text-gray-300/90">
                {role}
              </span>
            )}
            {Array.isArray(stack) &&
              stack.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2 py-1 text-gray-200"
                >
                  {t}
                </span>
              ))}
          </div>

          {/* actions */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <button
              className="btn"
              onClick={onCopy}
              aria-live="polite"
              aria-label="Copy article link"
              title="Copy link"
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
            {item.live && (
              <a className="btn" href={item.live} target="_blank" rel="noreferrer">
                Open live
              </a>
            )}
            {item.repo && (
              <a className="btn" href={item.repo} target="_blank" rel="noreferrer">
                Open repository
              </a>
            )}
          </div>
        </header>

                {/* hero image */}
        {item.image && (
          <figure className="mb-8">
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/30 to-cyan-400/40">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                {item.live ? (
                  <a href={item.live} target="_blank" rel="noreferrer" title="Open live project">
                    <img
                      src={item.image}
                      alt={item.caption || item.title}
                      className="w-full max-h-[480px] object-cover transition-transform duration-700 hover:scale-[1.02] cursor-pointer"
                      loading="eager"
                    />
                  </a>
                ) : (
                  <img
                    src={item.image}
                    alt={item.caption || item.title}
                    className="w-full max-h-[480px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />
                )}

                {/* shine sweep */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 45%, rgba(255,255,255,.28) 50%, transparent 55%)",
                    transform: "translateX(-100%)",
                    animation: "shine 1.2s ease-in-out forwards",
                  }}
                />
              </div>
            </div>
            {item.caption && (
              <figcaption className="text-sm text-gray-500 mt-2">{item.caption}</figcaption>
            )}
          </figure>
        )}


        {/* article body */}
        <section className="prose prose-invert max-w-none prose-a:text-orange-400">
          <p className="leading-relaxed text-gray-200">{item.article}</p>
        </section>

        {/* prev / next nav */}
        <footer className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="flex-1 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-colors"
              >
                <p className="text-xs text-gray-400">Previous</p>
                <p className="text-sm text-white">{prev.title}</p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className="flex-1 text-right rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-colors"
              >
                <p className="text-xs text-gray-400">Next</p>
                <p className="text-sm text-white">{next.title}</p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </footer>
      </article>
    </>
  );
}
