// src/components/InstagramGallery.tsx
import type { InstaItem } from "../data/instagram";

export default function InstagramGallery({ items }: { items: InstaItem[] }) {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((it, i) => (
        <a
          key={i}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-xl border border-orange-600/20"
        >
          <img
            src={it.src}
            alt={it.alt || "Instagram image"}
            className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
        </a>
      ))}
    </div>
  );
}
