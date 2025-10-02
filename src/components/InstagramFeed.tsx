// src/components/InstagramFeed.tsx
type Props = { src: string; title?: string };

export default function InstagramFeed({ src, title = "Instagram feed" }: Props) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-orange-600/30">
      <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="clipboard-write; encrypted-media"
          loading="lazy"
          style={{ border: 0, overflow: "hidden" }}
        />
      </div>
    </div>
  );
}
