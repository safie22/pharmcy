import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import Button from '../components/ui/Button'
import Snackbar from '../components/ui/Snackbar'
import AuthShell from '../components/AuthShell'
import { useNavigate } from 'react-router-dom'
import { saveUser } from '../utils/auth'
import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { UserIcon, MailIcon, LockIcon } from '../components/ui/Icons'

type FormValues = { fullName: string; email: string; password: string; confirmPassword: string }

export default function RegisterPage() {
	const { t } = useI18n()
	const navigate = useNavigate()
	const [snackOpen, setSnackOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [passwordStrength, setPasswordStrength] = useState(0)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ mode: 'onBlur' })

	const onSubmit = async (data: FormValues) => {
		setIsLoading(true)
		
		// محاكاة تأخير الشبكة
		await new Promise(resolve => setTimeout(resolve, 1500))
		
		saveUser({ fullName: data.fullName, email: data.email, password: data.password })
		setSnackOpen(true)
		setTimeout(() => {
			navigate('/login')
			setIsLoading(false)
		}, 2000)
	}

	const password = watch('password')
	const confirmPassword = watch('confirmPassword')

	// حساب قوة كلمة المرور
	useEffect(() => {
		if (password) {
			let strength = 0
			if (password.length >= 6) strength += 25
			if (password.length >= 8) strength += 25
			if (/[A-Z]/.test(password)) strength += 25
			if (/[0-9]/.test(password)) strength += 25
			setPasswordStrength(strength)
		} else {
			setPasswordStrength(0)
		}
	}, [password])

	return (
		<AuthShell title={t('auth.register')} subtitle="انضم إلى MediMart اليوم">
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

			{/* نموذج التسجيل */}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 lg:space-y-10">
				{/* حقل الاسم الكامل */}
				<div className="space-y-2 sm:space-y-3 lg:space-y-4">
					<Input
						label={t('auth.fullName')}
						placeholder="أحمد محمد علي"
						startIcon={<UserIcon className="text-green-500 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />}
						{...register('fullName', { 
							required: t('validation.required'),
							minLength: { value: 2, message: 'الاسم يجب أن يكون على الأقل حرفين' }
						})}
						error={errors.fullName?.message}
						className="transition-all duration-300 focus:scale-[1.01] sm:focus:scale-[1.02]"
					/>
				</div>

				{/* حقل البريد الإلكتروني */}
				<div className="space-y-2 sm:space-y-3 lg:space-y-4">
					<Input
						label={t('auth.email')}
						type="email"
						placeholder="ahmed@example.com"
						startIcon={<MailIcon className="text-blue-500 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />}
						{...register('email', {
							required: t('validation.required'),
							pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: t('validation.email') },
						})}
						error={errors.email?.message}
						className="transition-all duration-300 focus:scale-[1.01] sm:focus:scale-[1.02]"
					/>
				</div>

				{/* حقل كلمة المرور مع مؤشر القوة */}
				<div className="space-y-3">
					<PasswordInput
						label={t('auth.password')}
						placeholder="••••••"
						{...register('password', { 
							required: t('validation.required'), 
							minLength: { value: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }
						})}
						error={errors.password?.message}
						className="transition-all duration-300 focus:scale-[1.02]"
					/>
					
					{/* مؤشر قوة كلمة المرور */}
					{password && (
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<div className="flex-1 bg-gray-200 rounded-full h-2">
									<div 
										className={`h-2 rounded-full transition-all duration-500 ${
											passwordStrength < 25 ? 'bg-red-500' :
											passwordStrength < 50 ? 'bg-yellow-500' :
											passwordStrength < 75 ? 'bg-blue-500' : 'bg-green-500'
										}`}
										style={{ width: `${passwordStrength}%` }}
									></div>
								</div>
								<span className="text-xs text-gray-600">
									{passwordStrength < 25 ? 'ضعيف' :
									 passwordStrength < 50 ? 'متوسط' :
									 passwordStrength < 75 ? 'جيد' : 'قوي'}
								</span>
							</div>
						</div>
					)}
				</div>

				{/* حقل تأكيد كلمة المرور */}
				<div className="space-y-2">
					<PasswordInput
						label={t('auth.confirmPassword')}
						placeholder="••••••"
						{...register('confirmPassword', {
							required: t('validation.required'),
							validate: (v) => v === password || (t('validation.passwordsMismatch') as string),
						})}
						error={errors.confirmPassword?.message}
						className="transition-all duration-300 focus:scale-[1.02]"
					/>
					
					{/* مؤشر تطابق كلمة المرور */}
					{confirmPassword && (
						<div className="flex items-center gap-2 text-sm">
							{password === confirmPassword ? (
								<>
									<span className="text-green-600">✅</span>
									<span className="text-green-600">كلمات المرور متطابقة</span>
								</>
							) : (
								<>
									<span className="text-red-600">❌</span>
									<span className="text-red-600">كلمات المرور غير متطابقة</span>
								</>
							)}
						</div>
					)}
				</div>

				{/* زر التسجيل */}
				<Button 
					type="submit" 
					disabled={isSubmitting || isLoading} 
					className="w-full relative overflow-hidden group"
				>
					{isLoading ? (
						<div className="flex items-center justify-center gap-2">
							<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							جاري إنشاء الحساب...
						</div>
					) : (
						<div className="flex items-center justify-center gap-2">
							<span>🚀</span>
							<span>{t('auth.register')}</span>
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</div>
					)}
				</Button>
			</form>

			{/* قسم تسجيل الدخول */}
			<div className="mt-8 text-center space-y-4">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-200"></div>
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-4 bg-white text-gray-500">أو</span>
					</div>
				</div>
				
				<p className="text-sm text-gray-600">
					{t('auth.haveAccount')}
				</p>
				<button
					onClick={() => navigate('/login')}
					className="group w-full py-3 px-4 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 hover:from-green-100 hover:to-emerald-100 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-green-200 hover:border-green-300"
				>
					<div className="flex items-center justify-center gap-2">
						<span>🔐</span>
						{t('auth.goToLogin')}
						<span className="group-hover:translate-x-1 transition-transform">→</span>
					</div>
				</button>
			</div>

			{/* إشعار النجاح */}
			<Snackbar
				message="🎉 تم إنشاء الحساب بنجاح! جاري التوجيه..."
				open={snackOpen}
				onClose={() => setSnackOpen(false)}
				variant="success"
			/>
		</AuthShell>
	)
}


