import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider.jsx'

export default function RegisterPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer'
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
      setError(t('validation.passwordsMismatch'))
      return
    }

    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل')
      return
    }

    localStorage.setItem('medimart:user', JSON.stringify(formData))
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-3">
      <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-sm">
        <div className="text-center mb-5">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-lg text-white">👤</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{t('auth.register')}</h1>
          <p className="text-gray-600 text-sm">{t('hero.titleBold')}</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.role')}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
            >
              <option value="Customer">{t('auth.roles.customer')}</option>
              <option value="Doctor">{t('auth.roles.doctor')}</option>
              <option value="Store Manager">{t('auth.roles.storeManager')}</option>
              <option value="Admin">{t('auth.roles.admin')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.fullName')}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              placeholder="أحمد محمد علي"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              placeholder="ahmed@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.password')}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              placeholder="••••••"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.confirmPassword')}
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              placeholder="••••••"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-xs bg-red-50 p-2 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition font-semibold text-sm"
          >
            {t('auth.register')}
          </button>
        </form>

        <div className="mt-5 text-center">
          <p className="text-gray-600 text-xs">
            {t('auth.haveAccount')}{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-green-500 hover:text-green-600 font-semibold"
            >
              {t('auth.goToLogin')}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}