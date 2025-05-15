import CertificateDisplay from './_components/CertificateDisplay'
import Footer from './_components/Footer'
import Header from './_components/Header'
import Hero from './_components/Hero'
import StartCourse from './_components/StartCourse'

async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StartCourse />
      <CertificateDisplay />
      <Footer />
    </>
  )
}

export default Home
