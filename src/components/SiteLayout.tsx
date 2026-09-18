import { Link, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#services', label: 'Услуги' },
  { to: '#studio', label: 'Студия' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/"><img src={site.logoUrl} alt="" /> <span>{site.shortName}</span></Link>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <a key={to} href={to}>{label}</a>
          ))}
          <a className="nav-book" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться ↗</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name}</p><a href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a>
      </footer>
    </div>
  )
}
