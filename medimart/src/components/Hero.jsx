import { useI18n } from '../i18n/I18nProvider'
import Button from './ui/Button'
import DecorativeShapes from './DecorativeShapes'
import { Link } from 'react-router-dom'

export default function Hero() {
	const { t } = useI18n()
	return (
		<section className="relative w-full min-h-screen flex items-center">
			<DecorativeShapes />
			<div className="relative mx-auto max-w-4xl px-4 py-8">
				{/* المحتوى النصي */}
				<div className="text-center space-y-4">
					<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
						<span className="block">{t('hero.titleBold')}</span>
						<span className="block text-blue-600 mt-1">{t('hero.titleAccent')}</span>
					</h1>
					<p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
						{t('hero.subtitle')}
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Link to="/register" className="w-full sm:w-auto">
							<Button className="w-full sm:w-auto">
								{t('hero.cta')}
							</Button>
						</Link>
						<Link to="/login" className="w-full sm:w-auto">
							<Button variant="ghost" className="w-full sm:w-auto">
								{t('auth.login')}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
