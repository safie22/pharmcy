import { useI18n } from '../i18n/I18nProvider'
import Hero from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function DashboardPage() {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('medimart:user')
		navigate('/login')
	}

	return (
		<div className="relative min-h-screen">
			<div className="absolute top-2 right-2 z-10">
				<Button 
					onClick={handleLogout}
					variant="ghost"
					className="bg-white/80 backdrop-blur-sm border border-gray-200 text-xs"
				>
					تسجيل الخروج
				</Button>
			</div>
			<Hero />
		</div>
	)
}