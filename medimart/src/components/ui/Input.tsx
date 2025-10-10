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
			{label && <span className="mb-1 block text-sm text-gray-700">{label}</span>}
			<div className="relative">
				{startIcon && (
					<span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-gray-400">
						{startIcon}
					</span>
				)}
				<input
					ref={ref}
					className={clsx(
						'w-full rounded-xl border bg-white/80 backdrop-blur-sm shadow-sm placeholder:text-gray-400',
						'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
						error ? 'border-red-400' : 'border-gray-300',
						startIcon ? 'ps-10 pe-3 py-2.5' : 'px-3 py-2.5',
						className
					)}
					{...props}
				/>
			</div>
			{error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
		</label>
	)
})

export default Input


