import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

type Props = {
	message: string
	open: boolean
	onClose?: () => void
	variant?: 'success' | 'error' | 'info'
}

export default function Snackbar({ message, open, onClose, variant = 'info' }: Props) {
	const [visible, setVisible] = useState(open)

	useEffect(() => setVisible(open), [open])
	useEffect(() => {
		if (!visible) return
		const id = setTimeout(() => {
			setVisible(false)
			onClose?.()
		}, 2500)
		return () => clearTimeout(id)
	}, [visible])

	return (
		<div
			className={clsx(
				'fixed bottom-6 inset-x-0 flex justify-center px-4 pointer-events-none',
				visible ? 'opacity-100' : 'opacity-0',
				'transition-opacity duration-300'
			)}
		>
			<div
				className={clsx(
					'pointer-events-auto rounded-lg shadow-lg px-4 py-2 text-sm',
					{
						'bg-green-600 text-white': variant === 'success',
						'bg-red-600 text-white': variant === 'error',
						'bg-blue-600 text-white': variant === 'info',
					}
				)}
			>
				{message}
			</div>
		</div>
	)
}


