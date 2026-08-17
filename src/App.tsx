import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Specs } from './components/Specs'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Specs />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App