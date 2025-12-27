import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './pages/Login'
import Register from './pages/Register'
import EquipmentCreate from './pages/EquipmentCreate'
import MaintenanceRequest from './pages/MaintenanceRequest'
import TeamCreate from './pages/TeamCreate'
import Kanban from './pages/Kanban'
import CalendarPage from './pages/Calendar'
import RequestStatus from './pages/RequestStatus'

export default function App() {
    return (
        <div className="min-h-screen bg-base-100">
            <Nav />
            <div className="p-6">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/equipment" element={<EquipmentCreate />} />
                    <Route path="/request" element={<MaintenanceRequest />} />
                    <Route path="/teams" element={<TeamCreate />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/requests/:id/status" element={<RequestStatus />} />
                </Routes>
            </div>
        </div>
    )
}
