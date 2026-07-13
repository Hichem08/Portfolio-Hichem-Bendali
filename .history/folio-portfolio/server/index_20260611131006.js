import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  realtime: {
    transport: ws
  }
});
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabase = null

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey)
}

// Sample data for development (fallback if Supabase not configured)
const sampleSections = [
  {
    id: 1,
    title: 'Hero Section',
    type: 'hero',
    content: 'Welcome to our portfolio',
    image_url: null,
    order: 1,
  },
  {
    id: 2,
    title: 'Portfolio Project 1',
    type: 'portfolio',
    content: 'Cutter mobile app',
    image_url: null,
    order: 2,
  },
  {
    id: 3,
    title: 'Services',
    type: 'services',
    content: 'Featured Services',
    image_url: null,
    order: 3,
  },
  {
    id: 4,
    title: 'About',
    type: 'about',
    content: 'About me section',
    image_url: null,
    order: 4,
  },
  {
    id: 5,
    title: 'Profile',
    type: 'profile',
    content: 'Profile section',
    image_url: null,
    order: 5,
  },
  {
    id: 6,
    title: 'Blogs',
    type: 'blogs',
    content: 'Latest news',
    image_url: null,
    order: 6,
  },
  {
    id: 7,
    title: 'Contact',
    type: 'contact',
    content: 'Get in touch',
    image_url: null,
    order: 7,
  },
]

// Routes

// Get all sections
app.get('/api/sections', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('sections')
        .select('*')
        .order('order', { ascending: true })

      if (error) throw error
      return res.json(data || sampleSections)
    }
    res.json(sampleSections)
  } catch (error) {
    console.error('Error fetching sections:', error)
    res.status(500).json({ error: 'Failed to fetch sections' })
  }
})

// Get a specific section
app.get('/api/sections/:id', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('sections')
        .select('*')
        .eq('id', req.params.id)
        .single()

      if (error) throw error
      return res.json(data)
    }
    const section = sampleSections.find((s) => s.id == req.params.id)
    res.json(section)
  } catch (error) {
    console.error('Error fetching section:', error)
    res.status(500).json({ error: 'Failed to fetch section' })
  }
})

// Create a new section
app.post('/api/sections', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(400).json({ error: 'Supabase not configured' })
    }

    const { title, type, content, image_url, order } = req.body

    const { data, error } = await supabase
      .from('sections')
      .insert([{ title, type, content, image_url, order }])
      .select()

    if (error) throw error
    res.json(data[0])
  } catch (error) {
    console.error('Error creating section:', error)
    res.status(500).json({ error: 'Failed to create section' })
  }
})

// Update a section
app.put('/api/sections/:id', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(400).json({ error: 'Supabase not configured' })
    }

    const { title, type, content, image_url, order } = req.body

    const { data, error } = await supabase
      .from('sections')
      .update({ title, type, content, image_url, order })
      .eq('id', req.params.id)
      .select()

    if (error) throw error
    res.json(data[0])
  } catch (error) {
    console.error('Error updating section:', error)
    res.status(500).json({ error: 'Failed to update section' })
  }
})

// Delete a section
app.delete('/api/sections/:id', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(400).json({ error: 'Supabase not configured' })
    }

    const { error } = await supabase
      .from('sections')
      .delete()
      .eq('id', req.params.id)

    if (error) throw error
    res.json({ success: true })
  } catch (error) {
    console.error('Error deleting section:', error)
    res.status(500).json({ error: 'Failed to delete section' })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    supabaseConfigured: !!supabase,
    timestamp: new Date(),
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Portfolio server running on http://localhost:${PORT}`)
  console.log(
    supabase ? '✅ Supabase configured' : '⚠️ Supabase not configured (using sample data)'
  )
})
