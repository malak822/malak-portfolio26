import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()

  return (
    <div className="bento footer-card">
      <div>
        <div className="footer-brand"><span>M</span>alak.</div>
        <div className="footer-tag">{t.footer_tag}</div>
      </div>
      <div className="footer-socials-mini">
        <a href="https://github.com/malak822" target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
        <a href="https://t.me/+W2KLsQxXVL42YTI0" target="_blank" rel="noopener"><i className="fab fa-telegram"></i></a>
      </div>
      <div className="footer-copy">{t.footer}</div>
    </div>
  )
}