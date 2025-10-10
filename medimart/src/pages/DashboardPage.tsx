import { useI18n } from '../i18n/I18nProvider'
import Hero from '../components/Hero'

export default function DashboardPage() {
	useI18n()
	return <Hero />
}


