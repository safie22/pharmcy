import { useI18n } from '../i18n/I18nProvider'
import Button from './ui/Button'
import DecorativeShapes from './DecorativeShapes'
import { Link } from 'react-router-dom'

export default function Hero() {
	const { t } = useI18n()
	return (
		<section className="relative w-full min-h-screen flex items-center">
			<DecorativeShapes />
			<div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 xl:py-24 xl:grid-cols-2">
				{/* المحتوى النصي */}
				<div className="text-center xl:text-start space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12">
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tight text-gray-900 leading-tight">
						<span className="block">{t('hero.titleBold')}</span>
						<span className="block text-blue-600 mt-2 sm:mt-3 lg:mt-4">{t('hero.titleAccent')}</span>
					</h1>
					<p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 max-w-3xl mx-auto xl:mx-0 leading-relaxed">
						{t('hero.subtitle')}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center xl:justify-start">
						<Link to="/register" className="w-full sm:w-auto">
							<Button className="w-full sm:w-auto text-base sm:text-lg lg:text-xl xl:text-2xl px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-8">
								{t('hero.cta')}
							</Button>
						</Link>
						<Link to="/login" className="w-full sm:w-auto">
							<Button variant="ghost" className="w-full sm:w-auto text-base sm:text-lg lg:text-xl xl:text-2xl px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-8">
								{t('auth.login')}
							</Button>
						</Link>
					</div>
				</div>
				
				{/* الصورة التوضيحية */}
				<div className="relative order-first xl:order-last">
					<div className="mx-auto aspect-square sm:aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-3xl sm:rounded-4xl lg:rounded-5xl bg-gradient-to-br from-blue-100 to-blue-50 p-6 sm:p-8 lg:p-12 xl:p-16 ring-1 ring-black/5 shadow-2xl">
						<div className="h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white/70 backdrop-blur-sm grid place-items-center ring-1 ring-black/5">
							<div className="text-blue-600 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] animate-float">💊</div>
						</div>
					</div>
					
					{/* عناصر زخرفية إضافية للشاشات الكبيرة */}
					<div className="hidden lg:block absolute -top-6 -right-6 w-20 h-20 xl:w-24 xl:h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
					<div className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 xl:w-20 xl:h-20 bg-green-200 rounded-full opacity-40 animate-bounce-gentle"></div>
					<div className="hidden xl:block absolute top-1/4 -left-8 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
					<div className="hidden xl:block absolute bottom-1/4 -right-8 w-14 h-14 bg-yellow-200 rounded-full opacity-40 animate-bounce-gentle"></div>
				</div>
			</div>
		</section>
	)
}


