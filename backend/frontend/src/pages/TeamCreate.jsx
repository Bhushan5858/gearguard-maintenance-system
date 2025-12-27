import { useState } from 'react'
import api from '../api'

export default function TeamCreate() {
    const [name, setName] = useState('')

    async function submit(e) {
        e.preventDefault()
        try {
            await api.post('/teams', { name })
            alert('Team created')
            setName('')
        } catch (err) {
            alert('Create failed')
        }
    }

    return (
        <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
            <h2 className="text-2xl font-bold">Create Maintenance Team</h2>
            <input className="input input-bordered w-full" placeholder="Team name" value={name} onChange={e => setName(e.target.value)} />
            <button className="btn btn-primary" type="submit">Create</button>
        </form>
    )
}
