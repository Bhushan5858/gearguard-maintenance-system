import { useState } from 'react'
import api from '../api'

export default function MaintenanceRequest() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function submit(e) {
        e.preventDefault()
        try {
            await api.post('/requests', { title, description })
            alert('Request created')
            setTitle(''); setDescription('')
        } catch (err) {
            alert('Create failed')
        }
    }

    return (
        <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
            <h2 className="text-2xl font-bold">Create Maintenance Request</h2>
            <input className="input input-bordered w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea className="textarea textarea-bordered w-full" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-primary" type="submit">Create</button>
        </form>
    )
}
