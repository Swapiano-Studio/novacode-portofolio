import StarBackground from '../component/StarBackground'
import NavBar from '../component/NavBar'
import HeroSection from '../component/HeroSection'
import AboutSection from '../component/AboutSection'
import SkillsSection from '../component/SkillsSection'
import ProjectSection from '../component/ProjectSection'
import ContactSection from '../component/ContactSection'
import Footer from '../component/Footer'

const Home = (toast) => {
  return (
    <div className='min-h-screen bg-background texr-foreground overflow-x-hidden'>
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection toast={toast}/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
