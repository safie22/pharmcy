import { useI18n } from '../i18n/I18nProvider.jsx'
import { GlobeIcon } from './ui/Icons.jsx'

export function LanguageToggle() {
	const { locale, setLocale } = useI18n()
	const isArabic = locale === 'ar'
	return (
		<button
			className="group flex items-center gap-1.5 sm:gap-2 ps-2 pe-2 sm:pe-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-gray-200 shadow-sm hover:bg-white/90 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105"
			onClick={() => setLocale(isArabic ? 'en' : 'ar')}
			aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
		>
			<span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
				<GlobeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
			</span>
			<span className="text-gray-800 hidden xs:inline">
				{isArabic ? 'English' : 'عربي'}
			</span>
		</button>
	)
}
