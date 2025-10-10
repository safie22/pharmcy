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
import { MailIcon, LockIcon } from '../components/ui/Icons'

type FormValues = { email: string; password: string }

export default function LoginPage() {
	const { t } = useI18n()
	const navigate = useNavigate()
	const [error, setError] = useState<string | null>(null)
	const [snackOpen, setSnackOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
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
			<div className="mb-4 sm:mb-6 text-center">
				<button
					onClick={() => navigate('/')}
					className="group inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
				>
					<span className="group-hover:-translate-x-1 transition-transform">←</span>
					<span className="hidden xs:inline">العودة للصفحة الرئيسية</span>
					<span className="xs:hidden">العودة</span>
				</button>
			</div>

			{/* رسالة الخطأ مع تأثير */}
			{error && (
				<div className="mb-6 animate-fade-in">
					<Alert variant="error" className="animate-shake">
						<div className="flex items-center gap-2">
							<span className="text-lg">⚠️</span>
							{error}
						</div>
					</Alert>
				</div>
			)}

			{/* نموذج تسجيل الدخول */}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 lg:space-y-10">
				{/* حقل البريد الإلكتروني */}
				<div className="space-y-2 sm:space-y-3 lg:space-y-4">
					<Input
						label={t('auth.email')}
						type="email"
						placeholder="test@test.com"
						startIcon={<MailIcon className="text-blue-500 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />}
						{...register('email', {
							required: t('validation.required'),
							pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: t('validation.email') },
						})}
						error={errors.email?.message}
						className="transition-all duration-300 focus:scale-[1.01] sm:focus:scale-[1.02]"
					/>
				</div>

				{/* حقل كلمة المرور */}
				<div className="space-y-2 sm:space-y-3 lg:space-y-4">
					<PasswordInput
						label={t('auth.password')}
						placeholder="••••••"
						{...register('password', { required: t('validation.required') })}
						error={errors.password?.message}
						className="transition-all duration-300 focus:scale-[1.01] sm:focus:scale-[1.02]"
					/>
				</div>

				{/* زر تسجيل الدخول */}
				<Button 
					type="submit" 
					disabled={isSubmitting || isLoading} 
					className="w-full relative overflow-hidden group"
				>
					{isLoading ? (
						<div className="flex items-center justify-center gap-3">
							<div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							<span className="text-sm sm:text-base lg:text-lg">جاري تسجيل الدخول...</span>
						</div>
					) : (
						<div className="flex items-center justify-center gap-3">
							<span>{t('auth.login')}</span>
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</div>
					)}
				</Button>
			</form>

			{/* قسم التسجيل */}
			<div className="mt-6 sm:mt-8 text-center space-y-3 sm:space-y-4">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-200"></div>
					</div>
					<div className="relative flex justify-center text-xs sm:text-sm">
						<span className="px-3 sm:px-4 bg-white text-gray-500">أو</span>
					</div>
				</div>
				
				<p className="text-xs sm:text-sm text-gray-600">
					{t('auth.noAccount')}
				</p>
				<button
					onClick={() => navigate('/register')}
					className="group w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 hover:from-blue-100 hover:to-indigo-100 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-lg border border-blue-200 hover:border-blue-300"
				>
					<div className="flex items-center justify-center gap-1.5 sm:gap-2">
						<span className="text-sm sm:text-base">✨</span>
						<span className="text-xs sm:text-sm">{t('auth.goToRegister')}</span>
						<span className="group-hover:translate-x-1 transition-transform">→</span>
					</div>
				</button>
			</div>

			{/* معلومات تسجيل الدخول التجريبي */}
			<div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl border border-blue-200">
				<div className="text-center">
					<p className="text-xs sm:text-sm text-blue-700 font-medium mb-1 sm:mb-2">🔑 بيانات تجريبية</p>
					<div className="text-xs text-blue-600 space-y-0.5 sm:space-y-1">
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


