import { clsx } from 'clsx'

export default function Button({ className, variant = 'primary', ...props }) {
	return (
		<button
			className={clsx(
				'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 active:scale-[0.98] hover:scale-[1.01]',
				{
					'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow hover:from-blue-600 hover:to-blue-700 focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100': variant === 'primary',
					'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 focus-visible:ring-gray-500': variant === 'ghost',
				},
				className
			)}
			{...props}
		/>
	)
}
