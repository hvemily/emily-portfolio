export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Emily Brynestad</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="mailto:someone@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}