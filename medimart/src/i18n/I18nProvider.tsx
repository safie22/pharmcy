import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ar from './ar.json'
import en from './en.json'

type Locale = 'ar' | 'en'

type I18nContextType = {
	locale: Locale
	setLocale: (l: Locale) => void
	t: (path: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const STORAGE_KEY = 'medimart:locale'

const dict: Record<Locale, Record<string, any>> = { ar, en }

function getValue(obj: Record<string, any>, path: string): string {
	return path.split('.').reduce((acc: any, key) => (acc ? acc[key] : undefined), obj) ?? path
}

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [locale, setLocaleState] = useState<Locale>(() => {
		const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
		return saved ?? 'ar'
	})

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, locale)
		const html = document.documentElement
		html.lang = locale
		html.dir = locale === 'ar' ? 'rtl' : 'ltr'
	}, [locale])

	const t = useMemo(() => (path: string) => getValue(dict[locale], path), [locale])

	const setLocale = (l: Locale) => setLocaleState(l)

	const value = useMemo(() => ({ locale, setLocale, t }), [locale])

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
	const ctx = useContext(I18nContext)
	if (!ctx) throw new Error('useI18n must be used within I18nProvider')
	return ctx
}


