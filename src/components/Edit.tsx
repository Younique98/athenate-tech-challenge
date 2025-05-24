import { useState } from 'react'
import { IProject } from '../hooks/useProject'

type TEditProjectProps = {
  project: IProject
  onSave: (updated: IProject) => void
  onCancel: () => void
}

export const Edit = ({ project, onSave, onCancel }: TEditProjectProps) => {
  const [formData, setFormData] = useState<IProject>(project)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const {name, value} = e.target
      setFormData( prev => ( {
          ...prev,
          [name]: value,
    }))
  }

    const handleSubmit = ( e: React.FormEvent ) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Edit Project</h2>

      <div>
        <label className="block font-medium"> Name </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block font-medium"> Location </label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block font-medium"> Headline </label>
        <input
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          className="border px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block font-medium"> Content </label>
        <input
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="border px-2 py-1 w-full"
        />
      </div>




      <div className="flex gap-2">

     <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => onSave(formData)}>
          Save
        </button>
     <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
