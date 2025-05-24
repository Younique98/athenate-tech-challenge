import { IProject } from '../hooks/useProject'

// TODO: (ET) update placeholder text with new data needed
export const fetchProject = async (): Promise<IProject> => {
  const raw = localStorage.getItem('project')
  if (raw) {
    return JSON.parse(raw)
  }

  // Fallback default
  return {
    id: 1,
    name: 'New Project',
    location: "Clarksville",
    headline: 'in-progress',
    content: 'Starting point'
  }
}

export const saveProject = async (project: IProject): Promise<void> => {
  // Simulate a slight delay like a real API call
  await new Promise((resolve) => setTimeout(resolve, 300))
  localStorage.setItem('project', JSON.stringify(project))
}
