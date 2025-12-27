import { useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function RequestStatus() {
    const { id } = useParams()
    const [status, setStatus] = useState('')

    async function submit(e) {
        e.preventDefault()
        try {
            await api.patch(`/requests/${id}/status`, { status })
            alert('Status updated')
        } catch (err) {
            alert('Update failed')
        }
    }

    return (
        <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
            <h2 className="text-2xl font-bold">Update Request Status</h2>
            <select className="select select-bordered w-full" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="">Select status</option>
                <option value="OPEN">OPEN</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="RESOLVED">RESOLVED</option>
            </select>
            <button className="btn btn-primary" type="submit">Update</button>
        </form>
    )
}
