export function MailIcon({ className = "h-4 w-4" }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
			<path d="M4 6h16v12H4z" />
			<path d="m22 6-10 7L2 6" />
		</svg>
	)
}

export function UserIcon({ className = "h-4 w-4" }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
			<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
			<path d="M4 22a8 8 0 0 1 16 0" />
		</svg>
	)
}

export function LockIcon({ className = "h-4 w-4" }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
			<rect x="4" y="11" width="16" height="9" rx="2"/>
			<path d="M8 11V8a4 4 0 0 1 8 0v3" />
		</svg>
	)
}

export function GlobeIcon({ className = "h-4 w-4" }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
			<circle cx="12" cy="12" r="9" />
			<path d="M3 12h18" />
			<path d="M12 3a15 15 0 0 0 0 18a15 15 0 0 0 0-18Z" />
		</svg>
	)
}
