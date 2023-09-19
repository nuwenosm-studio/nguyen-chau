import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import StudioPage from '@/components/StudioPage';
import ContactPage from '@/components/ContactPage';

export default function Home() {
   return (
      <main>
         <HomePage />
         <AboutPage />
         <StudioPage />
         <ContactPage />
      </main>
   )
}
