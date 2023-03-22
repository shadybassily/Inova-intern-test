import About from '../components/homepage_components/About';
import Hero from '../components/homepage_components/Hero';
import LatestNews from '../components/homepage_components/LatestNews';

export default function HomePage() {
   return (
      <div>
         <Hero />
         <LatestNews />
         <About />
      </div>
   );
}
