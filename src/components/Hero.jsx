import { useApp } from '../context/AppContext'
import Navbar from './Navbar'

export default function Hero() {
  const { t } = useApp()

  return (
    <section className="bento hero-card" id="hero">
      <Navbar />
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-socials">
            <a href="https://github.com/malak822" target="_blank" rel="noopener" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://t.me/+W2KLsQxXVL42YTI0" target="_blank" rel="noopener" title="Telegram"><i className="fab fa-telegram"></i></a>
            <a href="mailto:malak.serinee@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          </div>
          <h1>{t.hello}</h1>
          <p className="hero-desc">{t.hero_desc}</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-solid"><i className="fas fa-envelope"></i> {t.contact_me_btn}</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-frame">
            <img src="/about.jpg" alt="Malak avatar" className="hero-avatar-img" />
          </div>
          <div className="speech-bubble">Hi</div>
          <div className="float-badge fb1"><i className="fab fa-laravel"></i></div>
          <div className="float-badge fb2"><i className="fab fa-vuejs"></i></div>
          <div className="float-badge fb3"><i className="fab fa-php"></i></div>
          <div className="float-badge fb4"><i className="fab fa-react"></i></div>
        </div>
      </div>
    </section>
  )
}