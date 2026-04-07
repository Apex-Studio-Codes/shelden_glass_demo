import AnnouncementBanner from '../components/layout/AnnouncementBanner'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import LegalBar from '../components/layout/LegalBar'
import Hero from '../components/sections/Hero'
import ShopCategories from '../components/sections/ShopCategories'
import Wedding from '../components/sections/Wedding'
import Booking from '../components/sections/Booking'
import Artists from '../components/sections/Artists'
import Gallery from '../components/sections/Gallery'
import About from '../components/sections/About'
import FindUs from '../components/sections/FindUs'
import GiftCards from '../components/sections/GiftCards'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Fixed header: banner + navbar stacked together so they don't overlap */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner />
        <Navbar />
      </div>

      <main>
        <Hero />
        <ShopCategories />
        <Wedding />
        <Booking />
        <Artists />
        <Gallery />
        <About />
        <FindUs />
        <GiftCards />
        <Contact />
      </main>
      <Footer />
      <LegalBar />
    </>
  )
}
