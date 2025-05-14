 // Este bundle já inclui o Popper.js
import './App.css'
import { Carrossel } from './components/Carrossel'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Oferta } from './components/Oferta'

function App() {
  return (
    <>
      <Header />
      <Oferta />
      <Footer />
    </>
  )
}

export default App
