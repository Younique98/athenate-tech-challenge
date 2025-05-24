import { useState, useEffect } from 'react'

// TODO: (ET) Holding place for now
export interface IProject {
  id: number
  name: string
 location: string
 headline: string
 content: string
}

const DEFAULT_PROJECT: IProject = {
  id: 1,
  name: 'New Project',
 location: 'in-progress',
  headline: 'Kickoff phase',
  content: 'Kickoff phase'
}

export const useProject = () => {
  const [project, setProject] = useState<IProject | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('project')
    if (saved) {
      setProject(JSON.parse(saved))
    } else {
      setProject(DEFAULT_PROJECT)
    }
  }, [])

  const saveProject = (updated: IProject) => {
    setProject(updated)
    localStorage.setItem('project', JSON.stringify(updated))
  }

  return { project, saveProject }
}
