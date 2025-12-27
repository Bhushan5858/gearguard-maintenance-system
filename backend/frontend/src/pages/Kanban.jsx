import { useEffect, useState } from 'react'
import api from '../api'

export default function Kanban() {
    const [data, setData] = useState([])
    useEffect(() => { api.get('/kanban').then(r => setData(r.data)).catch(() => { }) }, [])

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Kanban</h2>
            <div className="grid grid-cols-3 gap-4">
                {['todo', 'inprogress', 'done'].map(col => (
                    <div key={col} className="p-4 bg-base-200 rounded">
                        <h3 className="font-semibold mb-2">{col}</h3>
                        {(data[col] || []).map(item => (
                            <div key={item._id} className="p-2 mb-2 bg-white rounded shadow">{item.title}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
