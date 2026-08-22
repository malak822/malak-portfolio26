import { useApp } from '../context/AppContext'

const links = [
  { href: '#hero', key: 'nav_home' },
  { href: '#about', key: 'nav_about' },
  { href: '#projects', key: 'nav_projects' },
  { href: '#skills', key: 'nav_skills' },
  { href: '#contact', key: 'nav_contact' },
]

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme, menuOpen, toggleMenu, closeMenu } = useApp()

  return (
    <nav className="pill-nav">
      <div className="logo"><span>P</span>ortfolio.</div>
      <div className="nav-right">
        <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className="nav-close" onClick={closeMenu} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
          {links.map((l) => (
            <li key={l.key}>
              <a href={l.href} onClick={closeMenu}>{t[l.key]}</a>
            </li>
          ))}
          <a href="#contact" className="nav-resume-mobile" onClick={closeMenu}>{t.hire_me}</a>
        </ul>

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

        <div className="lang-switcher">
          {['en', 'fr', 'ar'].map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>

        <a href="#contact" className="hire-btn">{t.hire_me}</a>
      </div>
    </nav>
  )
}