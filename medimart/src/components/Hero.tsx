import { useI18n } from '../i18n/I18nProvider'
import Button from './ui/Button'
import DecorativeShapes from './DecorativeShapes'
import { Link } from 'react-router-dom'

export default function Hero() {
	const { t } = useI18n()
	return (
		<section className="relative w-full">
			<DecorativeShapes />
			<div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
				<div className="text-start">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
						<span className="block">{t('hero.titleBold')}</span>
						<span className="block text-blue-600">{t('hero.titleAccent')}</span>
					</h1>
					<p className="mt-3 text-gray-600 max-w-prose">{t('hero.subtitle')}</p>
					<div className="mt-6 flex gap-3">
						<Link to="/register">
							<Button>{t('hero.cta')}</Button>
						</Link>
						<Link to="/login">
							<Button variant="ghost">{t('auth.login')}</Button>
						</Link>
					</div>
				</div>
				<div className="relative hidden md:block">
					<div className="mx-auto aspect-[4/3] w-full max-w-md rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 p-6 ring-1 ring-black/5 shadow-xl">
						<div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur-sm grid place-items-center ring-1 ring-black/5">
							<div className="text-blue-600 text-7xl">💊</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


