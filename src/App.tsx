import NavBar from './components/layout/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="" id="main-container">
        <NavBar />
        <main className="container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
