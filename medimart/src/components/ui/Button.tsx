import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'ghost'
}

export default function Button({ className, variant = 'primary', ...props }: Props) {
	return (
		<button
			className={clsx(
				'inline-flex items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 xl:py-6 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] hover:scale-[1.02]',
				{
					'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-blue-700 focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100': variant === 'primary',
					'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 focus-visible:ring-gray-500': variant === 'ghost',
				},
				className
			)}
			{...props}
		/>
	)
}


