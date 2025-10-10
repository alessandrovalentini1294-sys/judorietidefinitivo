import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';



export default function Home() {
  console.log("Main page rendered");
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
