import { Navigate, Route, Routes } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import { LanguageToggle } from './components/LanguageToggle'
import LogoBrand from './components/LogoBrand'

export default function App() {
	return (
		<I18nProvider>
			<div className="min-h-screen flex items-center justify-center relative">
				<header className="absolute top-4 inset-x-0 px-6 flex items-center justify-between">
					<LogoBrand />
					<div className="">
					<LanguageToggle />
					</div>
				</header>
				<Routes>
					<Route path="/" element={<Navigate to="/login" replace />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
			</div>
		</I18nProvider>
	)
}


