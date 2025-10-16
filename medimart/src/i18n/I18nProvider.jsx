import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ar from './ar.json'
import en from './en.json'

const I18nContext = createContext(undefined)

const STORAGE_KEY = 'medimart:locale'

const dict = { ar, en }

function getValue(obj, path) {
	return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj) ?? path
}

export const I18nProvider = ({ children }) => {
	const [locale, setLocaleState] = useState(() => {
		const saved = localStorage.getItem(STORAGE_KEY)
		return saved ?? 'ar'
	})

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, locale)
		const html = document.documentElement
		html.lang = locale
		html.dir = locale === 'ar' ? 'rtl' : 'ltr'
	}, [locale])

	const t = useMemo(() => (path) => getValue(dict[locale], path), [locale])

	const setLocale = (l) => setLocaleState(l)

	const value = useMemo(() => ({ locale, setLocale, t }), [locale])

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
	const ctx = useContext(I18nContext)
	if (!ctx) throw new Error('useI18n must be used within I18nProvider')
	return ctx
}
