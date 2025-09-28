import HeroSection from './components/HeroSection';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CarrouselSection } from './components/CarrouselSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CarrouselSection />
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;