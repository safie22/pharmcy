import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
	className?: string
}

export default function Card({ children, className }: Props) {
	return (
		<div className={`rounded-2xl border border-white/60 bg-white/80 shadow-xl backdrop-blur-md ring-1 ring-black/5 transition-shadow hover:shadow-2xl ${className ?? ''}`}>
			{children}
		</div>
	)
}


