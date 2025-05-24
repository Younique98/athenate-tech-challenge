'use client'
import { useProject } from '@/hooks/useProject'
import { View } from '@/components/View'
import { Edit } from '@/components/Edit'
import { useState } from 'react'


export default function Home() {
    const { project, saveProject } = useProject()
    const [editMode, setEditMode] = useState(false)

    if (!project) return <p>Loading....</p>
    return (
        <main className="p-4">
            <h1>Athenate Project</h1>
            {editMode ? (
                <Edit
                    project={project}
                    onSave={(updated) => {
                        saveProject(updated)
                    }}
                    onCancel={() => setEditMode(false)}
                />
            ) : (
                <View project={project} onEdit={() => setEditMode(true)} />
            )}
        </main>
    )
}
