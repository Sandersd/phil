import Hero from './(sections)/Hero'
import TrustBar from './(sections)/TrustBar'
import Services from './(sections)/Services'
import Antiques from './(sections)/Antiques'
import Clips from './(sections)/Clips'
import About from './(sections)/About'
import FAQ from './(sections)/FAQ'
import CTAForm from './(sections)/CTAForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Antiques />
        <Clips />
        <About />
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}