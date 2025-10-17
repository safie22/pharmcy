import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider.jsx'

export default function DashboardPage() {
  const { t } = useI18n()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('medimart:user')
    navigate('/login')
  }

  const userData = JSON.parse(localStorage.getItem('medimart:user') || '{}')
  const userRole = userData.role || 'Customer'

  const getRoleColor = (role) => {
    switch(role) {
      case 'Customer': return 'bg-green-500'
      case 'Doctor': return 'bg-blue-500'
      case 'Store Manager': return 'bg-purple-500'
      case 'Admin': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getRoleIcon = (role) => {
    switch(role) {
      case 'Customer': return '🛒'
      case 'Doctor': return '👨‍⚕️'
      case 'Store Manager': return '👔'
      case 'Admin': return '⚙️'
      default: return '👤'
    }
  }

  const getRoleName = (role) => {
    switch(role) {
      case 'Customer': return t('auth.roles.customer')
      case 'Doctor': return t('auth.roles.doctor')
      case 'Store Manager': return t('auth.roles.storeManager')
      case 'Admin': return t('auth.roles.admin')
      default: return 'مستخدم'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">MediMart</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className={`px-3 py-1.5 ${getRoleColor(userRole)} text-white rounded-lg text-xs font-semibold flex items-center space-x-1`}>
              <span>{getRoleIcon(userRole)}</span>
              <span>{getRoleName(userRole)}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold text-xs"
            >
              {t('dashboard.logout')}
            </button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {t('dashboard.welcome')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              {t('hero.subtitle')}
            </p>
            <div className={`inline-flex items-center space-x-2 px-4 py-2 ${getRoleColor(userRole)} text-white rounded-lg text-xs font-semibold`}>
              <span>{getRoleIcon(userRole)}</span>
              <span>{t('dashboard.loggedAs')} {getRoleName(userRole)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.inventory')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.sales')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.customers')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.prescriptions')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.reports')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dashboard.cards.settings')}</h3>
              <p className="text-gray-600 text-sm">{t('hero.subtitle')}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}