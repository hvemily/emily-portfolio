import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;       // ms per bokstav
  startDelay?: number;  // ms før start
  className?: string;
  showCursor?: boolean;
};

export default function Typewriter({
  text,
  speed = 90,
  startDelay = 0,
  className = "text-5xl md:text-7xl font-extrabold italic tracking-wide text-orange-600",
  showCursor = false, // du ville ha ren tekst – sett true hvis du vil ha | på slutten
}: Props) {
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    let t: number | undefined;
    if (i === 0 && startDelay > 0) {
      t = window.setTimeout(() => setI(1), startDelay);
      return () => clearTimeout(t);
    }
    if (i < text.length) {
      t = window.setTimeout(() => setI(i + 1), speed);
    }
    return () => clearTimeout(t);
  }, [i, speed, startDelay, text]);

  const shown = text.slice(0, Math.min(i, text.length));

  return (
    <span className={className}>
      {shown}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
}
