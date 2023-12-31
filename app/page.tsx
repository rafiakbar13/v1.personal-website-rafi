import Footer from '@/common/components/Footer'
import Hero from '@/common/components/Hero'
import Navbar from '@/common/components/Navbar/Navbar'
import About from '@/module/About'
import Project from '@/module/projects'
import Tech from '@/module/skills'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main data-scroll-container className="flex flex-col items-center max-w-7xl mx-auto">
        <About />
        <Tech />
        <Project />
      </main>
      <Footer />
    </>

  )
}
