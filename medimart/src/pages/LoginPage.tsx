import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import AuthShell from '../components/AuthShell'
import Snackbar from '../components/ui/Snackbar'
import { useNavigate } from 'react-router-dom'
import { mockLogin } from '../utils/auth'
import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { MailIcon } from '../components/ui/Icons'

type FormValues = { email: string; password: string }

export default function LoginPage() {
	const { t } = useI18n()
	const navigate = useNavigate()
	const [error, setError] = useState<string | null>(null)
	const [snackOpen, setSnackOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm<FormValues>({ mode: 'onBlur' })

	const email = watch('email')
	const password = watch('password')

	const onSubmit = async (data: FormValues) => {
		setError(null)
		setIsLoading(true)
		
		// محاكاة تأخير الشبكة
		await new Promise(resolve => setTimeout(resolve, 1000))
		
		const ok = mockLogin(data.email, data.password)
		if (!ok) {
			setError(t('auth.loginFailed'))
			setIsLoading(false)
			return
		}
		
		setSnackOpen(true)
		setTimeout(() => {
			navigate('/dashboard')
			setIsLoading(false)
		}, 1500)
	}

	// تأثير الكتابة في الحقول
	useEffect(() => {
		if (email && password) {
			setError(null)
		}
	}, [email, password])

	return (
		<AuthShell title={t('auth.login')} subtitle="مرحباً بك في MediMart">
			{/* زر العودة */}
			<div className="mb-2 text-center">
				<button
					onClick={() => navigate('/')}
					className="group inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-all duration-200"
				>
					<span className="group-hover:-translate-x-1 transition-transform">←</span>
					<span>العودة</span>
				</button>
			</div>

			{/* رسالة الخطأ مع تأثير */}
			{error && (
				<div className="mb-3 animate-fade-in">
					<Alert variant="error">
						<div className="flex items-center gap-1">
							<span className="text-sm">⚠️</span>
							<span className="text-sm">{error}</span>
						</div>
					</Alert>
				</div>
			)}

			{/* نموذج تسجيل الدخول */}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
				{/* حقل البريد الإلكتروني */}
				<div>
					<Input
						label={t('auth.email')}
						type="email"
						placeholder="test@test.com"
						startIcon={<MailIcon className="text-blue-500 h-4 w-4" />}
						{...register('email', {
							required: t('validation.required'),
							pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: t('validation.email') },
						})}
						error={errors.email?.message}
					/>
				</div>

				{/* حقل كلمة المرور */}
				<div>
					<PasswordInput
						label={t('auth.password')}
						placeholder="••••••"
						{...register('password', { required: t('validation.required') })}
						error={errors.password?.message}
					/>
				</div>

				{/* زر تسجيل الدخول */}
				<Button 
					type="submit" 
					disabled={isSubmitting || isLoading} 
					className="w-full"
				>
					{isLoading ? (
						<div className="flex items-center justify-center gap-1">
							<div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							<span className="text-xs">جاري تسجيل الدخول...</span>
						</div>
					) : (
						<div className="flex items-center justify-center gap-1">
							<span>{t('auth.login')}</span>
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</div>
					)}
				</Button>
			</form>

			{/* قسم التسجيل */}
			<div className="mt-3 text-center space-y-2">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-200"></div>
					</div>
					<div className="relative flex justify-center text-xs">
						<span className="px-2 bg-white text-gray-500">أو</span>
					</div>
				</div>
				
				<p className="text-xs text-gray-600">
					{t('auth.noAccount')}
				</p>
				<button
					onClick={() => navigate('/register')}
					className="group w-full py-1.5 px-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 hover:from-blue-100 hover:to-indigo-100 rounded font-medium transition-all duration-200 hover:scale-[1.01] border border-blue-200 hover:border-blue-300"
				>
					<div className="flex items-center justify-center gap-1">
						<span className="text-xs">✨</span>
						<span className="text-xs">{t('auth.goToRegister')}</span>
						<span className="group-hover:translate-x-1 transition-transform">→</span>
					</div>
				</button>
			</div>

			{/* معلومات تسجيل الدخول التجريبي */}
			<div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
				<div className="text-center">
					<p className="text-xs text-blue-700 font-medium mb-1">🔑 بيانات تجريبية</p>
					<div className="text-xs text-blue-600 space-y-0.5">
						<p><strong>البريد:</strong> test@test.com</p>
						<p><strong>كلمة المرور:</strong> 123456</p>
					</div>
				</div>
			</div>

			{/* إشعار النجاح */}
			<Snackbar
				message="🎉 تم تسجيل الدخول بنجاح!"
				open={snackOpen}
				onClose={() => setSnackOpen(false)}
				variant="success"
			/>
		</AuthShell>
	)
}


