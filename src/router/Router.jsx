import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../pages'
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}