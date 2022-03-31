import NavBar from './components/layout/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="" id="main-container">
        <NavBar />
        <main className="container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
