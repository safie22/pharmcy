import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	error?: string
	startIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
	{ className, label, error, startIcon, ...props },
	ref
) {
	return (
		<label className="block text-start">
			{label && <span className="mb-2 sm:mb-3 lg:mb-4 block text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 font-medium">{label}</span>}
			<div className="relative">
				{startIcon && (
					<span className="pointer-events-none absolute inset-y-0 start-3 sm:start-4 lg:start-5 flex items-center text-gray-400">
						{startIcon}
					</span>
				)}
				<input
					ref={ref}
					className={clsx(
						'w-full rounded-lg sm:rounded-xl lg:rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm placeholder:text-gray-400',
						'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300',
						'text-sm sm:text-base lg:text-lg xl:text-xl',
						error ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-gray-300',
						startIcon ? 'ps-10 sm:ps-12 lg:ps-14 xl:ps-16 pe-4 py-3 sm:py-4 lg:py-5 xl:py-6' : 'px-4 py-3 sm:py-4 lg:py-5 xl:py-6',
						className
					)}
					{...props}
				/>
			</div>
			{error && <span className="mt-2 block text-xs sm:text-sm lg:text-base text-red-600 animate-fade-in">{error}</span>}
		</label>
	)
})

export default Input


