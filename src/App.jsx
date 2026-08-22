import { AppProvider } from './context/AppContext'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function Reveal({ children }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <div className="bg-blobs">
        <span className="b1"></span><span className="b2"></span><span className="b3"></span><span className="b4"></span>
      </div>

      <div className="page-wrap">
        <Hero />

        <div className="bento-row">
          <Reveal><About /></Reveal>
          <Reveal><Skills /></Reveal>
        </div>

        <div className="bento-row reverse">
          <Reveal><Projects /></Reveal>
          <Reveal><Contact /></Reveal>
        </div>

        <Reveal><Footer /></Reveal>
      </div>
    </AppProvider>
  )
}
