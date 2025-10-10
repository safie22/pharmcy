import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'ghost'
}

export default function Button({ className, variant = 'primary', ...props }: Props) {
	return (
		<button
			className={clsx(
				'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]',
				{
					'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-blue-700 focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed': variant === 'primary',
					'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-200': variant === 'ghost',
				},
				className
			)}
			{...props}
		/>
	)
}


