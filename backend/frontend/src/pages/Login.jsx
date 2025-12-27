import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    async function submit(e) {
        e.preventDefault()
        try {
            await api.post('/users/login', { email, password })
            nav('/kanban')
        } catch (err) {
            alert('Login failed')
        }
    }

    return (
        <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
            <h2 className="text-2xl font-bold">Login</h2>
            <input className="input input-bordered w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" className="input input-bordered w-full" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    )
}
