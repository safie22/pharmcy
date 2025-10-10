import { useState } from 'react'
import Input from './Input'

type Props = React.ComponentProps<typeof Input>

export default function PasswordInput(props: Props) {
	const [visible, setVisible] = useState(false)
	return (
		<div className="relative">
			<Input
				{...props}
				type={visible ? 'text' : 'password'}
				startIcon={<span>🔒</span>}
			/>
			<button
				type="button"
				className="absolute inset-y-0 end-3 my-auto h-8 w-8 grid place-items-center text-gray-500 hover:text-gray-700"
				onClick={() => setVisible((v) => !v)}
				aria-label={visible ? 'Hide password' : 'Show password'}
			>
				{visible ? '🙈' : '👁️'}
			</button>
		</div>
	)
}


