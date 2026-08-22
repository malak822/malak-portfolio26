import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function Contact() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSend = () => {
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) {
      alert(t.fill_fields)
      return
    }
    const subject = encodeURIComponent('Message from Portfolio — ' + form.name)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`)
    window.location.href = `mailto:malak.serinee@gmail.com?subject=${subject}&body=${body}`
    setForm({ name: '', email: '', msg: '' })

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="bento contact-card" id="contact">
      <span className="eyebrow-tag" style={{ textAlign: 'center' }}>{t.talk_tag}</span>
      <h2 className="bento-heading" style={{ textAlign: 'center' }}>{t.contact_title}</h2>
      <p className="bento-sub" style={{ textAlign: 'center' }}>{t.contact_sub}</p>

      <div className="contact-top">
        <div className="contact-avatar"><img src="/contact.jpg" alt="Malak" /></div>
        <div className="contact-form">
          <div className="row2">
            <input type="text" name="name" placeholder={t.ph_name} value={form.name} onChange={handleChange} />
            <input type="email" name="email" placeholder={t.ph_email} value={form.email} onChange={handleChange} />
          </div>
          <textarea name="msg" placeholder={t.ph_msg} value={form.msg} onChange={handleChange}></textarea>
          <button className="send-btn-full" onClick={handleSend}>
            <i className="fas fa-paper-plane"></i> {t.send_btn}
          </button>
        </div>
      </div>

      <div className="contact-info-row">
        <a href="mailto:malak.serinee@gmail.com"><i className="fas fa-envelope"></i> malak.serinee@gmail.com</a>
        <a href="https://github.com/malak822" target="_blank" rel="noopener"><i className="fab fa-github"></i> github.com/malak822</a>
        <a href="https://t.me/+W2KLsQxXVL42YTI0" target="_blank" rel="noopener"><i className="fab fa-telegram"></i> Telegram</a>
      </div>

      {sent && (
        <div className="success-toast">
          <div className="success-check">
            <svg viewBox="0 0 52 52">
              <circle className="success-check-circle" cx="26" cy="26" r="24" fill="none" />
              <path className="success-check-mark" fill="none" d="M14 27l7 7 16-16" />
            </svg>
          </div>
          <div className="success-title">{t.sent_title}</div>
          <div className="success-msg">{t.sent_msg}</div>
        </div>
      )}
    </div>
  )
}