import About from '../components/homepage_components/About';
import Hero from '../components/homepage_components/Hero';
import LatestNews from '../components/homepage_components/LatestNews';
import Navbar from '../components/Navbar';

export default function HomePage() {
   return (
      <div>
         <Navbar />
         <Hero />
         <LatestNews />
         <About />
      </div>
   );
}
