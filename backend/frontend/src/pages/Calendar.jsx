import { useEffect, useState } from 'react'
import api from '../api'

export default function Calendar() {
    const [events, setEvents] = useState([])
    useEffect(() => { api.get('/calendar').then(r => setEvents(r.data)).catch(() => { }) }, [])

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Calendar</h2>
            <ul className="list-disc pl-6">
                {events.map(ev => <li key={ev._id}>{ev.date} - {ev.title}</li>)}
            </ul>
        </div>
    )
}
