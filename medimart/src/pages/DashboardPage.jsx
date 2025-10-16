import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('medimart:user')
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
			<header className="relative z-10 bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20 p-4">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-lg">M</span>
						</div>
						<span className="text-2xl font-bold text-gray-800">MediMart</span>
					</div>
					<button
						onClick={handleLogout}
						className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold shadow-lg hover:shadow-xl text-sm"
					>
						تسجيل الخروج
					</button>
				</div>
			</header>

			{/* Main Content */}
			<main className="relative z-10 p-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-gray-800 mb-3">
							مرحباً بك في <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">MediMart</span>
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							منصة الصيدلة الرقمية المتطورة لإدارة الأدوية والمبيعات والعملاء
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">💊</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								إدارة الأدوية
							</h3>
							<p className="text-gray-600 text-sm">
								إدارة مخزون الأدوية والمستلزمات الطبية بسهولة وأمان تام
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">📊</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								المبيعات
							</h3>
							<p className="text-gray-600 text-sm">
								تتبع المبيعات والإيرادات اليومية مع تقارير مفصلة وشاملة
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">👥</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								العملاء
							</h3>
							<p className="text-gray-600 text-sm">
								إدارة قاعدة بيانات العملاء وتتبع تاريخهم الطبي والدوائي
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">📋</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								الوصفات الطبية
							</h3>
							<p className="text-gray-600 text-sm">
								إدارة الوصفات الطبية وتتبع الأدوية المطلوبة والمتوفرة
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">📈</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								التقارير
							</h3>
							<p className="text-gray-600 text-sm">
								تقارير شاملة عن الأداء والمبيعات والمخزون والإيرادات
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
								<span className="text-2xl">⚙️</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								الإعدادات
							</h3>
							<p className="text-gray-600 text-sm">
								إعدادات النظام وتخصيص الواجهة حسب احتياجاتك ومتطلباتك
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}