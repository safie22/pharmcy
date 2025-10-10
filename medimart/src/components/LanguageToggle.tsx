import { useI18n } from '../i18n/I18nProvider'
import { GlobeIcon } from './ui/Icons'

export function LanguageToggle() {
	const { locale, setLocale } = useI18n()
	const isArabic = locale === 'ar'
	return (
		<button
			className="group flex items-center gap-2 ps-2 pe-3 py-1.5 rounded-full text-sm font-semibold border border-gray-200 shadow-sm hover:bg-white/90 bg-white/70 backdrop-blur-sm"
			onClick={() => setLocale(isArabic ? 'en' : 'ar')}
			aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
		>
			<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
				<GlobeIcon className="h-4 w-4" />
			</span>
			<span className="text-gray-800">
				{isArabic ? 'English' : 'عربي'}
			</span>
		</button>
	)
}


