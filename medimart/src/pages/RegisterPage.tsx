import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import Button from '../components/ui/Button'
import Snackbar from '../components/ui/Snackbar'
import Card from '../components/ui/Card'
import { Link, useNavigate } from 'react-router-dom'
import { saveUser } from '../utils/auth'
import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { UserIcon, MailIcon } from '../components/ui/Icons'

type FormValues = { fullName: string; email: string; password: string; confirmPassword: string }

export default function RegisterPage() {
	const { t } = useI18n()
	const navigate = useNavigate()
	const [snackOpen, setSnackOpen] = useState(false)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ mode: 'onBlur' })

	const onSubmit = (data: FormValues) => {
		saveUser({ fullName: data.fullName, email: data.email, password: data.password })
		setSnackOpen(true)
		setTimeout(() => navigate('/login'), 1000)
	}

	const password = watch('password')

	return (
		<div className="w-full max-w-md mx-auto p-6">
			<div className="mb-6 text-center">
				<h1 className="text-2xl font-bold text-gray-900">{t('auth.register')}</h1>
				<p className="mt-1 text-sm text-gray-500">MediMart</p>
			</div>
			<Card className="p-6 shadow-2xl">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<Input
					label={t('auth.fullName')}
					placeholder="John Doe"
					startIcon={<UserIcon />}
					{...register('fullName', { required: t('validation.required') })}
					error={errors.fullName?.message}
				/>

				<Input
					label={t('auth.email')}
					type="email"
					placeholder="you@example.com"
					startIcon={<MailIcon />}
					{...register('email', {
						required: t('validation.required'),
						pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: t('validation.email') },
					})}
					error={errors.email?.message}
				/>

				<PasswordInput
					label={t('auth.password')}
					placeholder="••••••"
					{...register('password', { required: t('validation.required'), minLength: 6 })}
					error={errors.password?.message}
				/>

				<PasswordInput
					label={t('auth.confirmPassword')}
					placeholder="••••••"
					{...register('confirmPassword', {
						required: t('validation.required'),
						validate: (v) => v === password || (t('validation.passwordsMismatch') as string),
					})}
					error={errors.confirmPassword?.message}
				/>

				<Button type="submit" disabled={isSubmitting} className="w-full">
					{t('auth.register')}
				</Button>
				</form>
			</Card>
			<p className="mt-4 text-center text-sm text-gray-600">
				{t('auth.haveAccount')}
				<span className="mx-1">·</span>
				<Link className="text-blue-600 hover:underline" to="/login">
					{t('auth.goToLogin')}
				</Link>
			</p>
			<Snackbar
				message={t('auth.registerSuccess')}
				open={snackOpen}
				onClose={() => setSnackOpen(false)}
				variant="success"
			/>
		</div>
	)
}


