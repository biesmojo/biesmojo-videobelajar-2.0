import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <img src="assets/images/logo.png" alt="Logo VideoBelajar" style={{width:'135px', height:'32px'}} />
        </div>
        <nav className="site-nav">
          <a href="/index">Beranda</a>
          <a href="/kursus">Kursus</a>
          <a href="/tentang">Tentang</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
        <div className="profile">
          <img src="assets/images/avatar.png" alt="Profil" />
        </div>
      </div>
    </header>
  )
}

export default App
