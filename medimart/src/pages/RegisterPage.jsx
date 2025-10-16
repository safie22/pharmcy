import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import Button from '../components/ui/Button'
import Snackbar from '../components/ui/Snackbar'
import AuthShell from '../components/AuthShell'
import { useNavigate } from 'react-router-dom'
import { saveUser } from '../utils/auth.js'
import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { UserIcon, MailIcon } from '../components/ui/Icons'

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
	} = useForm({ mode: 'onBlur' })

	const onSubmit = async (data) => {
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
			<div className="mb-2 text-center">
				<button
					onClick={() => navigate('/')}
					className="group inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-all duration-200"
				>
					<span className="group-hover:-translate-x-1 transition-transform">←</span>
					<span>العودة</span>
				</button>
			</div>

			{/* نموذج التسجيل */}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
				{/* حقل الاسم الكامل */}
				<div>
					<Input
						label={t('auth.fullName')}
						placeholder="أحمد محمد علي"
						startIcon={<UserIcon className="text-green-500 h-4 w-4" />}
						{...register('fullName', { 
							required: t('validation.required'),
							minLength: { value: 2, message: 'الاسم يجب أن يكون على الأقل حرفين' }
						})}
						error={errors.fullName?.message}
					/>
				</div>

				{/* حقل البريد الإلكتروني */}
				<div>
					<Input
						label={t('auth.email')}
						type="email"
						placeholder="ahmed@example.com"
						startIcon={<MailIcon className="text-blue-500 h-4 w-4" />}
						{...register('email', {
							required: t('validation.required'),
							pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: t('validation.email') },
						})}
						error={errors.email?.message}
					/>
				</div>

				{/* حقل كلمة المرور مع مؤشر القوة */}
				<div className="space-y-1">
					<PasswordInput
						label={t('auth.password')}
						placeholder="••••••"
						{...register('password', { 
							required: t('validation.required'), 
							minLength: { value: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }
						})}
						error={errors.password?.message}
					/>
					
					{/* مؤشر قوة كلمة المرور */}
					{password && (
						<div className="flex items-center gap-1">
							<div className="flex-1 bg-gray-200 rounded-full h-1">
								<div 
									className={`h-1 rounded-full transition-all duration-500 ${
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
					)}
				</div>

				{/* حقل تأكيد كلمة المرور */}
				<div className="space-y-1">
					<PasswordInput
						label={t('auth.confirmPassword')}
						placeholder="••••••"
						{...register('confirmPassword', {
							required: t('validation.required'),
							validate: (v) => v === password || t('validation.passwordsMismatch'),
						})}
						error={errors.confirmPassword?.message}
					/>
					
					{/* مؤشر تطابق كلمة المرور */}
					{confirmPassword && (
						<div className="flex items-center gap-1 text-xs">
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
					className="w-full"
				>
					{isLoading ? (
						<div className="flex items-center justify-center gap-1">
							<div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							<span className="text-xs">جاري إنشاء الحساب...</span>
						</div>
					) : (
						<div className="flex items-center justify-center gap-1">
							<span>🚀</span>
							<span>{t('auth.register')}</span>
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</div>
					)}
				</Button>
			</form>

			{/* قسم تسجيل الدخول */}
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
					{t('auth.haveAccount')}
				</p>
				<button
					onClick={() => navigate('/login')}
					className="group w-full py-1.5 px-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 hover:from-green-100 hover:to-emerald-100 rounded font-medium transition-all duration-200 hover:scale-[1.01] border border-green-200 hover:border-green-300"
				>
					<div className="flex items-center justify-center gap-1">
						<span>🔐</span>
						<span className="text-xs">{t('auth.goToLogin')}</span>
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
