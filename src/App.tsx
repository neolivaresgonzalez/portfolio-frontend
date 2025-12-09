import { useEffect, useState } from 'react'
import { fetchAPI } from './lib/api'
import type { Project, StrapiListResponse } from './types'

function App() {
  const [status, setStatus] = useState<string>('Checking API...')
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setStatus('Fetching projects...')
        const response = await fetchAPI<Project>('/projects')
        // Handle both list and single response structures just in case, though /projects should be list
        const data = Array.isArray(response.data) ? response.data : [response.data]
        setProjects(data.map(item => item.attributes))
        setStatus('Connected to Strapi!')
      } catch (err) {
        console.error(err)
        setError('Failed to connect to Strapi. Check console for details.')
        setStatus('Error')
      }
    }

    loadProjects()
  }, [])

  return (
    <div className="app-container">
      <h1>Portfolio Frontend</h1>
      <div className="status-card">
        <p><strong>Status:</strong> {status}</p>
        {error && <p className="error">{error}</p>}
        {projects.length > 0 && (
          <div className="projects-preview">
            <h2>Latest Projects</h2>
            <ul>
              {projects.map((project) => (
                <li key={project.slug}>{project.title}</li>
              ))}
            </ul>
          </div>
        )}
        {status === 'Connected to Strapi!' && projects.length === 0 && (
          <p>No projects found. Make sure to publish some content in Strapi!</p>
        )}
      </div>
    </div>
  )
}

export default App
