import { useState, useEffect } from 'react'
import axios from 'axios'
import Portfolio from './components/Portfolio'

function App() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get('/api/sections')
        setSections(response.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching sections:', err)
        setError(err.message)
        setLoading(false)
      }
    }

    fetchSections()
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-screen">
        <h1>Error: {error}</h1>
        <p>Make sure the server is running on http://localhost:4000</p>
      </div>
    )
  }

  return <Portfolio sections={sections} />
}

export default App
