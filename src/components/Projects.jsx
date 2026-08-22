import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

const projects = [
  { key: 'p3_title', imgs: ['/jmail1.png', '/jmil2.png', '/jmil3.png'], contain: false, tags: ['React', 'Laravel'] },
  { key: 'p0_title', imgs: ['/discover-fashion-app.png', '/2.png', '/3.png', '/4.png' , '/5.png', '/6.png', '/7.png'], contain: true, tags: ['Flutter', 'Laravel API'] },
  { key: 'p1_title', imgs: ['/Screenshotporfil.png', '/screen1.png', '/screenshotop.png', '/screensh.png'], contain: false, tags: ['Laravel', 'MySQL'] },
  /*{ key: 'p4_title', imgs: ['/video_2026-08-12_02-39-11.mp4'/*, '/dashboard-stats.png'], contain: true, tags: ['Flutter', 'API'] },*/
]

function ProjectTile({ project, title, onOpen }) {
  const [idx, setIdx] = useState(0)
  const total = project.imgs.length

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % total) }

  return (
    <div className="proj-tile" onClick={() => onOpen(project, title, idx)}>
      <div className={`proj-thumb ${project.contain ? 'contain' : ''}`}>
        <img src={project.imgs[idx]} alt={`${title} — screenshot ${idx + 1}`} onError={(e) => { e.currentTarget.style.opacity = 0 }} />
        {total > 1 && (
          <>
            <button className="proj-nav prev" onClick={prev} aria-label="Previous image"><i className="fas fa-chevron-left"></i></button>
            <button className="proj-nav next" onClick={next} aria-label="Next image"><i className="fas fa-chevron-right"></i></button>
            <span className="proj-counter">{idx + 1} / {total}</span>
          </>
        )}
      </div>
      <div className="proj-tile-body">
        <div className="proj-tile-title">{title}</div>
        <div className="proj-tile-tags"><b>{project.tags[0]}</b> · {project.tags[1]}</div>
      </div>
      <span className="proj-expand-hint"><i className="fas fa-expand"></i></span>
    </div>
  )
}

function ProjectModal({ data, onClose }) {
  const [idx, setIdx] = useState(data.idx)
  const total = data.project.imgs.length

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % total) }

  return (
    <div className="proj-modal-backdrop" onClick={onClose}>
      <div className="proj-modal" onClick={(e) => e.stopPropagation()}>
        <button className="proj-modal-close" onClick={onClose} aria-label="Close"><i className="fas fa-times"></i></button>
        <div className={`proj-modal-media ${data.project.contain ? 'contain' : ''}`}>
          <img src={data.project.imgs[idx]} alt={`${data.title} — screenshot ${idx + 1}`} />
          {total > 1 && (
            <>
              <button className="proj-nav prev" onClick={prev} aria-label="Previous image"><i className="fas fa-chevron-left"></i></button>
              <button className="proj-nav next" onClick={next} aria-label="Next image"><i className="fas fa-chevron-right"></i></button>
              <span className="proj-counter">{idx + 1} / {total}</span>
            </>
          )}
        </div>
        <div className="proj-modal-body">
          <div className="proj-modal-title">{data.title}</div>
          <div className="proj-tile-tags"><b>{data.project.tags[0]}</b> · {data.project.tags[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useApp()
  const [modalData, setModalData] = useState(null)

  const openModal = (project, title, idx) => setModalData({ project, title, idx })
  const closeModal = () => setModalData(null)

  return (
    <div className="bento projects-card" id="projects">
      <span className="eyebrow-tag">{t.proj_tag}</span>
      <h2 className="bento-heading">{t.proj_title}</h2>
      <p className="bento-sub">{t.proj_sub}</p>
      <div className="proj-grid">
        {projects.map((p) => (
          <ProjectTile key={p.key} project={p} title={t[p.key]} onOpen={openModal} />
        ))}
      </div>
      {modalData && <ProjectModal data={modalData} onClose={closeModal} />}
    </div>
  )
}