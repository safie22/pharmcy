import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [error, setError] = useState('')

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleRegister = (e) => {
		e.preventDefault()
		
		if (formData.password !== formData.confirmPassword) {
			setError('كلمات المرور غير متطابقة')
			return
		}

		if (formData.password.length < 6) {
			setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل')
			return
		}

		// حفظ البيانات
		localStorage.setItem('medimart:user', JSON.stringify(formData))
		
		// توجيه لصفحة تسجيل الدخول
		navigate('/login')
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
			{/* Decorative Background Shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
				<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-30"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full opacity-20"></div>
			</div>

			{/* Header */}
			<header className="relative z-10 p-4">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">M</span>
						</div>
						<span className="text-xl font-bold text-gray-800">MediMart</span>
					</div>
					<div className="flex space-x-3">
						<button 
							onClick={() => navigate('/register')}
							className="px-4 py-1.5 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-semibold text-sm"
						>
							إنشاء حساب
						</button>
						<button 
							onClick={() => navigate('/login')}
							className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all font-semibold text-sm shadow-lg"
						>
							تسجيل الدخول
						</button>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
				<div className="w-full max-w-sm">
					{/* Register Card */}
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
						<div className="text-center mb-6">
							<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
								<span className="text-xl">👤</span>
							</div>
							<h1 className="text-2xl font-bold text-gray-800 mb-1">إنشاء حساب</h1>
							<p className="text-gray-600 text-sm">انضم إلى MediMart اليوم</p>
						</div>

						<form onSubmit={handleRegister} className="space-y-4">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									الاسم الكامل
								</label>
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleChange}
									className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm"
									placeholder="أحمد محمد علي"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									البريد الإلكتروني
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm"
									placeholder="ahmed@example.com"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									كلمة المرور
								</label>
								<input
									type="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
									className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm"
									placeholder="••••••"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									تأكيد كلمة المرور
								</label>
								<input
									type="password"
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
									className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm"
									placeholder="••••••"
									required
								/>
							</div>

							{error && (
								<div className="text-red-600 text-sm bg-red-50 p-2 rounded-lg border border-red-200">
									{error}
								</div>
							)}

							<button
								type="submit"
								className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.01] text-sm"
							>
								إنشاء حساب
							</button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-gray-600 text-sm">
								لديك حساب بالفعل؟{' '}
								<button
									onClick={() => navigate('/login')}
									className="text-blue-500 hover:text-blue-600 font-semibold hover:underline transition"
								>
									تسجيل الدخول
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}