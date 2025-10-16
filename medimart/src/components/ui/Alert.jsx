import { clsx } from 'clsx'

export default function Alert({ variant = 'info', children }) {
	return (
		<div
			className={clsx('rounded-lg border px-3 py-2 text-sm', {
				'border-red-200 text-red-700 bg-red-50': variant === 'error',
				'border-green-200 text-green-700 bg-green-50': variant === 'success',
				'border-blue-200 text-blue-700 bg-blue-50': variant === 'info',
			})}
		>
			{children}
		</div>
	)
}
