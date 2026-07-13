require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')
const ws = require('ws')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// Supabase client with WebSocket support for Node.js < 22
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabase = null

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey, {
    realtime: {
      headers: {
        'X-Client-Info': 'realtime-js/latest',
      },
      transport: ws,
    },
    global: {
      headers: {
        'X-Client-Info': '@supabase/supabase-js-v2',
      },
    },
  })
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

      // If table doesn't exist or error, use sample data
      if (error) {
        console.log('Database not ready, using sample data. Error:', error.message)
        return res.json(sampleSections)
      }
      return res.json(data || sampleSections)
    }
    res.json(sampleSections)
  } catch (error) {
    console.error('Error fetching sections:', error)
    // Return sample data instead of 500 error
    res.json(sampleSections)
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

      if (error) {
        console.log('Database not ready, using sample data. Error:', error.message)
        const section = sampleSections.find((s) => s.id == req.params.id)
        return res.json(section)
      }
      return res.json(data)
    }
    const section = sampleSections.find((s) => s.id == req.params.id)
    res.json(section)
  } catch (error) {
    console.error('Error fetching section:', error)
    const section = sampleSections.find((s) => s.id == req.params.id)
    res.json(section)
  }
})

// Create a new section
app.post('/api/sections', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({ message: 'Database not configured. Please set up Supabase.' })
    }

    const { title, type, content, image_url, order } = req.body

    const { data, error } = await supabase
      .from('sections')
      .insert([{ title, type, content, image_url, order }])
      .select()

    if (error) {
      console.log('Could not create section in database. Error:', error.message)
      return res.json({ message: 'Database table may not exist. Run SUPABASE_SETUP.sql first.' })
    }
    res.json(data[0])
  } catch (error) {
    console.error('Error creating section:', error)
    res.json({ message: 'Error creating section. Check server logs.' })
  }
})

// Update a section
app.put('/api/sections/:id', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({ message: 'Database not configured. Please set up Supabase.' })
    }

    const { title, type, content, image_url, order } = req.body

    const { data, error } = await supabase
      .from('sections')
      .update({ title, type, content, image_url, order })
      .eq('id', req.params.id)
      .select()

    if (error) {
      console.log('Could not update section in database. Error:', error.message)
      return res.json({ message: 'Database table may not exist. Run SUPABASE_SETUP.sql first.' })
    }
    res.json(data[0])
  } catch (error) {
    console.error('Error updating section:', error)
    res.json({ message: 'Error updating section. Check server logs.' })
  }
})

// Delete a section
app.delete('/api/sections/:id', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({ message: 'Database not configured. Please set up Supabase.' })
    }

    const { error } = await supabase
      .from('sections')
      .delete()
      .eq('id', req.params.id)

    if (error) {
      console.log('Could not delete section from database. Error:', error.message)
      return res.json({ message: 'Database table may not exist. Run SUPABASE_SETUP.sql first.' })
    }
    res.json({ success: true })
  } catch (error) {
    console.error('Error deleting section:', error)
    res.json({ message: 'Error deleting section. Check server logs.' })
  }
}))

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
