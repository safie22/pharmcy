import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import Card from '../components/ui/Card'
import AuthShell from '../components/AuthShell'
import Snackbar from '../components/ui/Snackbar'
import { Link, useNavigate } from 'react-router-dom'
import { mockLogin } from '../utils/auth'
import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { MailIcon, LockIcon } from '../components/ui/Icons'

type FormValues = { email: string; password: string }

export default function LoginPage() {
	const { t } = useI18n()
	const navigate = useNavigate()
	const [error, setError] = useState<string | null>(null)
	const [snackOpen, setSnackOpen] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ mode: 'onBlur' })

	const onSubmit = (data: FormValues) => {
		setError(null)
		const ok = mockLogin(data.email, data.password)
		if (!ok) {
			setError(t('auth.loginFailed'))
			return
		}
		setSnackOpen(true)
		setTimeout(() => navigate('/dashboard'), 800)
	}

	return (
		<AuthShell title={t('auth.login')} subtitle="MediMart">
			{error && (
				<div className="mb-4">
					<Alert variant="error">{error}</Alert>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<Input
					label={t('auth.email')}
					type="email"
					placeholder="test@test.com"
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
					{...register('password', { required: t('validation.required') })}
					error={errors.password?.message}
				/>

				<Button type="submit" disabled={isSubmitting} className="w-full">
					{t('auth.login')}
				</Button>
			</form>
			<p className="mt-4 text-center text-sm text-gray-600">
				{t('auth.noAccount')}
				<span className="mx-1">·</span>
				<Link className="text-blue-600 hover:underline" to="/register">
					{t('auth.goToRegister')}
				</Link>
			</p>
			<Snackbar
				message="Success"
				open={snackOpen}
				onClose={() => setSnackOpen(false)}
				variant="success"
			/>
		</AuthShell>
	)
}


