import React from 'react'
import { useI18n } from '../i18n/I18nProvider.jsx'

export function LanguageToggle({ className = '' }) {
  const { locale, setLocale } = useI18n()
  const isArabic = locale === 'ar'
  
  return (
    <button
      className={`px-3 py-1.5 text-xs rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-semibold ${className}`}
      onClick={() => setLocale(isArabic ? 'en' : 'ar')}
    >
      {isArabic ? 'English' : 'العربية'}
    </button>
  )
}