// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 mt-8 mb-8">
      {/* subtle gradient hairline */}
      <div
        className="h-[1px] bg-gradient-to-r from-orange-500/40 via-fuchsia-500/40 to-cyan-400/40 mb-8"
        aria-hidden="true"
      />
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-300/90">
          <p>&copy; {year} Emily Brynestad</p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-3">
            {/* Reusable pill button */}
            <SocialIcon
              href="https://github.com/USERNAME" // TODO
              label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.24 3.41 9.68 8.15 11.25.6.12.82-.27.82-.6 0-.3-.01-1.1-.02-2.17-3.31.73-4.01-1.63-4.01-1.63-.55-1.43-1.35-1.81-1.35-1.81-1.1-.77.08-.75.08-.75 1.21.09 1.84 1.27 1.84 1.27 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.65-.31-5.43-1.37-5.43-6.09 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26a11.4 11.4 0 0 1 6 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.31 0 4.73-2.79 5.77-5.45 6.08.43.37.81 1.11.81 2.25 0 1.62-.02 2.92-.02 3.31 0 .33.22.73.83.6A11.51 11.51 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/USERNAME" // TODO
              label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9h3v12h-3V9Zm6 0h2.86v1.64h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.02 3.63 4.65V21h-3v-6.03c0-1.44-.03-3.29-2.01-3.29-2.01 0-2.32 1.57-2.32 3.18V21h-3V9Z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/USERNAME" // TODO
              label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.84.07 1.2.06 1.86.25 2.3.41.58.22 1 .48 1.44.92.44.44.7.86.92 1.44.16.44.35 1.1.41 2.3.06 1.26.07 1.64.07 4.84s-.01 3.58-.07 4.84c-.06 1.2-.25 1.86-.41 2.3a3.72 3.72 0 0 1-.92 1.44c-.44.44-.86.7-1.44.92-.44.16-1.1.35-2.3.41-1.26.06-1.64.07-4.84.07s-3.58-.01-4.84-.07c-1.2-.06-1.86-.25-2.3-.41a3.72 3.72 0 0 1-1.44-.92 3.72 3.72 0 0 1-.92-1.44c-.16-.44-.35-1.1-.41-2.3C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.84c.06-1.2.25-1.86.41-2.3.22-.58.48-1 .92-1.44.44-.44.86-.7 1.44-.92.44-.16 1.1-.35 2.3-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.98.05-1.5.21-1.85.35-.47.18-.81.39-1.16.73-.34.35-.55.69-.73 1.16-.14.35-.3.87-.35 1.85-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05.98.21 1.5.35 1.85.18.47.39.81.73 1.16.35.34.69.55 1.16.73.35.14.87.3 1.85.35 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.98-.05 1.5-.21 1.85-.35.47-.18.81-.39 1.16-.73.34-.35.55-.69.73-1.16.14-.35.3-.87.35-1.85.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-.98-.21-1.5-.35-1.85a2.2 2.2 0 0 0-.73-1.16 2.2 2.2 0 0 0-1.16-.73c-.35-.14-.87-.3-1.85-.35-1.24-.06-1.61-.07-4.75-.07Zm0 2.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4Zm0 2a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm5.1-2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="mailto:hello@yourdomain.com" // TODO
              label="Email"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M2.25 6.5A2.25 2.25 0 0 1 4.5 4.25h15a2.25 2.25 0 0 1 2.25 2.25v11a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.5v-11Zm2.7.25 6.65 5.01a.75.75 0 0 0 .9 0l6.7-5.01H4.95Z" />
              </svg>
            </SocialIcon>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={label}
        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200
                   transition-all hover:translate-y-[-1px] hover:bg-white/10 hover:text-white
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
      >
        {children}
        {/* subtle ring on hover */}
        <span className="sr-only">{label}</span>
      </a>
    </li>
  )
}
