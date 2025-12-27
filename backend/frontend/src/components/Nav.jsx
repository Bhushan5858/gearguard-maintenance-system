import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="navbar bg-base-200 p-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Maintenance UI</Link>
            </div>
            <div className="flex-none">
                <Link to="/kanban" className="btn btn-ghost">Kanban</Link>
                <Link to="/calendar" className="btn btn-ghost">Calendar</Link>
                <Link to="/equipment" className="btn btn-ghost">Equipment</Link>
                <Link to="/request" className="btn btn-ghost">Request</Link>
            </div>
        </div>
    )
}
