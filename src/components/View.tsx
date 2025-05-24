import { IProject } from "@/hooks/useProject"

type TProps = {
    project: IProject
    onEdit: () => void
}

// TODO: (ET) Edit project type and interface to match what is needed.
export const View = ({ project, onEdit }: TProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">About Me</h2>
      <div><strong>Name:</strong> {project.name}</div>
      <div><strong>Location:</strong> {project.location}</div>
      <div><strong>Headline:</strong> {project.headline}</div>
      <div><strong>Content:</strong> {project.content}</div>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={onEdit}
      >
        Edit Project
      </button>
    </div>
  )
}