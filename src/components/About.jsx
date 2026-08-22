import { useApp } from '../context/AppContext'

export default function About() {
  const { t } = useApp()

  return (
    <div className="bento about-card" id="about">
      <div className="about-avatar-frame">
        <img src="/hero-avatar.jpg" alt="Malak" className="about-avatar-img" />
      </div>
      <div className="about-body">
        <span className="eyebrow-tag">{t.about_tag}</span>
        <h2 className="bento-heading">{t.about_title}</h2>
        <p>{t.about_p1}</p>
        <div className="about-stats-row">
          <div><div className="stat-num">3+</div><div className="stat-label">{t.stat1}</div></div>
          <div><div className="stat-num">10+</div><div className="stat-label">{t.stat2}</div></div>
          <div><div className="stat-num">24h</div><div className="stat-label">{t.stat4}</div></div>
        </div>
        <a href="#projects" className="learn-more-btn">{t.learn_more} <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  )
}