import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import '../styles.css'

export default function AdminDashboard() {
  const [sections, setSections] = useState([])
  const [selectedSection, setSelectedSection] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    content: '',
    image_url: '',
    order: 0,
  })
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  // Fetch sections on mount
  useState(() => {
    fetchSections()
  }, [])

  const fetchSections = async () => {
    try {
      const response = await axios.get('/api/sections')
      setSections(response.data)
      setLoading(false)
    } catch (error) {
      setMessage('Error fetching sections')
      setLoading(false)
    }
  }

  const handleSelectSection = (section) => {
    setSelectedSection(section)
    setFormData(section)
    setEditMode(true)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'order' ? parseInt(value) : value,
    }))
  }

  const handleSave = async () => {
    try {
      if (selectedSection?.id) {
        await axios.put(`/api/sections/${selectedSection.id}`, formData)
        setMessage('Section updated successfully!')
      } else {
        await axios.post('/api/sections', formData)
        setMessage('Section created successfully!')
      }
      setEditMode(false)
      setFormData({
        title: '',
        type: '',
        content: '',
        image_url: '',
        order: 0,
      })
      fetchSections()
    } catch (error) {
      setMessage('Error saving section: ' + error.message)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      try {
        await axios.delete(`/api/sections/${id}`)
        setMessage('Section deleted successfully!')
        setEditMode(false)
        fetchSections()
      } catch (error) {
        setMessage('Error deleting section: ' + error.message)
      }
    }
  }

  if (loading) {
    return <div className="loading-screen"><h1>Loading Admin Dashboard...</h1></div>
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      padding: '40px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <h1 style={{ marginBottom: '40px', fontSize: '48px' }}>
          Portfolio <span style={{ color: '#ff5722' }}>Admin Dashboard</span>
        </h1>

        
      </motion.div>
    </div>
  )
}
