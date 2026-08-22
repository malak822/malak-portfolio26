import { useApp } from '../context/AppContext'

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#2965f1' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
  { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
  { name: 'PHP', icon: 'fab fa-php', color: '#8892bf' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42b883' },
  { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
  { name: 'Tailwind', icon: 'fas fa-wind', color: '#38bdf8' },
  { name: 'Flutter', icon: 'fas fa-mobile-screen', color: '#54c5f8' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
  { name: 'Figma', icon: 'fab fa-figma', color: '#a259ff' },
  { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
  { name: 'DBeaver', icon: 'fas fa-server', color: '#f39c12' },
  { name: 'REST API', icon: 'fas fa-plug', color: '#10b981' },
]

export default function Skills() {
  const { t } = useApp()

  return (
    <div className="bento skills-card" id="skills">
      <span className="eyebrow-tag" style={{ textAlign: 'center' }}>{t.skills_tag}</span>
      <h2 className="bento-heading" style={{ textAlign: 'center' }}>{t.skills_title}</h2>
      <p className="bento-sub" style={{ textAlign: 'center' }}>{t.skills_sub}</p>
      <div className="skill-grid">
        {skills.map((s) => (
          <div className="skill-chip" key={s.name}>
            <div className="skill-chip-icon" style={{ color: s.color, background: `${s.color}22` }}>
              <i className={s.icon}></i>
            </div>
            <span className="skill-chip-name">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}