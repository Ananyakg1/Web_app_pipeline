import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/destinations')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        setDestinations(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: '#6366f1', marginBottom: '0.2em' }}>Travel Agency</h1>
      <h3 className="subtitle">Explore the world’s best destinations with us!</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="destinations-section">
        <h2>Travel Destinations</h2>
        {loading && <p style={{ color: '#fff' }}>Loading...</p>}
        {error && <p style={{ color: '#fff', background: '#f87171', borderRadius: '8px', padding: '0.5em 1em', display: 'inline-block' }}>Error: {error}</p>}
        <ul className="destinations-list">
          {destinations.map(dest => (
            <li
              key={dest.id}
              className="destination-card"
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(`https://www.google.com/search?q=travel+to+${encodeURIComponent(dest.name)}`, '_blank')}
            >
              <div className="destination-name">{dest.name}</div>
              <div className="destination-country">{dest.country}</div>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer className="footer">© 2025 Travel Agency. All rights reserved.</footer>
    </>
  )
}

export default App
