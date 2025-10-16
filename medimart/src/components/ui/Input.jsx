import { forwardRef } from 'react'
import { clsx } from 'clsx'

const Input = forwardRef(function Input(
	{ className, label, error, startIcon, ...props },
	ref
) {
	return (
		<label className="block text-start">
			{label && <span className="mb-1 block text-xs text-gray-700 font-medium">{label}</span>}
			<div className="relative">
				{startIcon && (
					<span className="pointer-events-none absolute inset-y-0 start-2 flex items-center text-gray-400">
						{startIcon}
					</span>
				)}
				<input
					ref={ref}
					className={clsx(
						'w-full rounded border bg-white/80 backdrop-blur-sm shadow-sm placeholder:text-gray-400',
						'focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200',
						'text-sm',
						error ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-gray-300',
						startIcon ? 'ps-8 pe-3 py-2' : 'px-3 py-2',
						className
					)}
					{...props}
				/>
			</div>
			{error && <span className="mt-0.5 block text-xs text-red-600 animate-fade-in">{error}</span>}
		</label>
	)
})

export default Input
