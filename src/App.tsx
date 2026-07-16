import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VpnComparison } from './components/VpnComparison'
import { Methodology } from './components/Methodology'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VpnComparison />
        <Methodology />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
