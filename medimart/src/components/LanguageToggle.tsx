import { useI18n } from '../i18n/I18nProvider'

export function LanguageToggle() {
	const { locale, setLocale } = useI18n()
	const isArabic = locale === 'ar'
	return (
		<button
			className="px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 shadow-sm hover:bg-gray-50 bg-white/80 backdrop-blur-sm"
			onClick={() => setLocale(isArabic ? 'en' : 'ar')}
			aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
		>
			{isArabic ? 'EN' : 'ع'}
		</button>
	)
}


