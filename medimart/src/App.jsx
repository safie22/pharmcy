import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import { I18nProvider } from './i18n/I18nProvider.jsx'
import { LanguageToggle } from './components/LanguageToggle.jsx'

export default function App() {
  console.log('App component rendering...')
  
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <header className="p-3 flex items-center justify-end">
            <LanguageToggle />
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </I18nProvider>
  )
}