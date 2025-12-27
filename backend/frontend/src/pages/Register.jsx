import { useState } from 'react'
import api from '../api'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('USER')

    async function submit(e) {
        e.preventDefault()
        try {
            await api.post('/users/register', { email, password, role })
            alert('Registered')
        } catch (err) {
            alert('Register failed')
        }
    }

    return (
        <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
            <h2 className="text-2xl font-bold">Register (Manager only)</h2>
            <input className="input input-bordered w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" className="input input-bordered w-full" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <select className="select select-bordered w-full" value={role} onChange={e => setRole(e.target.value)}>
                <option>USER</option>
                <option>TECHNICIAN</option>
                <option>MANAGER</option>
            </select>
            <button className="btn btn-primary" type="submit">Register</button>
        </form>
    )
}
