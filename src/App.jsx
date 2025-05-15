 // Este bundle já inclui o Popper.js
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Carrossel } from './components/Carrossel'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Carrossel />
      <Footer />
    </>
  )
}

export default App
