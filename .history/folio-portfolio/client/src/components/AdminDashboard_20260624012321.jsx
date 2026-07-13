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

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: '15px 20px',
              background: message.includes('Error') ? '#ff5722' : '#4caf50',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            {message}
          </motion.div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
          {/* Sections List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 style={{ marginBottom: '20px', color: '#ff5722' }}>Sections</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ x: 5 }}
                  onClick={() => handleSelectSection(section)}
                  style={{
                    padding: '15px 20px',
                    background: selectedSection?.id === section.id ? '#ff5722' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 87, 34, 0.3)',
                    borderRadius: '8px',
                    color: '#fff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ fontWeight: '600' }}>#{section.order} - {section.title}</div>
                  <div style={{ fontSize: '12px', color: '#aaa', marginTop: '5px' }}>Type: {section.type}</div>
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setEditMode(true)
                  setSelectedSection(null)
                  setFormData({
                    title: '',
                    type: 'portfolio',
                    content: '',
                    image_url: '',
                    order: sections.length + 1,
                  })
                }}
                style={{
                  padding: '15px 20px',
                  background: 'rgba(76, 175, 80, 0.2)',
                  border: '2px solid #4caf50',
                  borderRadius: '8px',
                  color: '#4caf50',
                  cursor: 'pointer',
                  marginTop: '20px',
                  fontWeight: '600',
                }}
              >
                + New Section
              </motion.button>
            </div>
          </motion.div>

          {/* Editor Form */}
          {editMode && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 87, 34, 0.3)',
                borderRadius: '12px',
              }}
            >
              <h2 style={{ marginBottom: '30px', color: '#ff5722' }}>
                {selectedSection ? 'Edit Section' : 'Create New Section'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '12px' }}>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '12px' }}>
                    Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  >
                    <option value="hero">Hero</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="services">Services</option>
                    <option value="about">About</option>
                    <option value="profile">Profile</option>
                    <option value="blogs">Blogssss</option>
                    <option value="contact">Contact</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '12px' }}>
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleFormChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'monospace',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '12px' }}>
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleFormChange}
                    placeholder="https://..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  {formData.image_url && (
                    <motion.img
                      src={formData.image_url}
                      alt="Preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        marginTop: '15px',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        maxHeight: '250px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '12px' }}>
                    Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleFormChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleSave}
                    style={{
                      padding: '12px 20px',
                      background: '#ff5722',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}
                  >
                    Save
                  </motion.button>
                  {selectedSection && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleDelete(selectedSection.id)}
                      style={{
                        padding: '12px 20px',
                        background: 'rgba(244, 67, 54, 0.2)',
                        color: '#f44336',
                        border: '1px solid #f44336',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                      }}
                    >
                      Delete
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '40px', padding: '20px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}
        >
          <h3 style={{ marginBottom: '15px', color: '#ff5722' }}>📸 Supabase Storage Setup</h3>
          <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
            To upload images and manage portfolio content:
          </p>
          <ol style={{ color: '#aaa', fontSize: '14px', marginLeft: '20px', marginTop: '10px' }}>
            <li>Go to <strong>Supabase Dashboard → Storage</strong></li>
            <li>Create a bucket named <strong>`portfolio-images`</strong></li>
            <li>Upload your images to the bucket</li>
            <li>Copy the public URL and paste it in the <strong>Image URL</strong> field above</li>
          </ol>
        </motion.div>
      </motion.div>
    </div>
  )
}
