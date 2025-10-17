import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider.jsx'

export default function LoginPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Customer')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (email === 'test@test.com' && password === '123456') {
      localStorage.setItem('medimart:user', JSON.stringify({ email, password, role }))
      navigate('/dashboard')
    } else {
      setError(t('auth.loginFailed'))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-3">
      <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-sm">
        <div className="text-center mb-5">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-lg text-white">💊</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{t('auth.login')}</h1>
          <p className="text-gray-600 text-sm">{t('hero.titleBold')}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.role')}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            >
              <option value="Customer">{t('auth.roles.customer')}</option>
              <option value="Doctor">{t('auth.roles.doctor')}</option>
              <option value="Store Manager">{t('auth.roles.storeManager')}</option>
              <option value="Admin">{t('auth.roles.admin')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              placeholder="test@test.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {t('auth.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              placeholder="123456"
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
            className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition font-semibold text-sm"
          >
            {t('auth.login')}
          </button>
        </form>

        <div className="mt-5 text-center">
          <p className="text-gray-600 text-xs">
            {t('auth.noAccount')}{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              {t('auth.goToRegister')}
            </button>
          </p>
        </div>

        <div className="mt-4 p-2 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-700 font-semibold text-xs mb-1">🔑 {t('lang.english')}:</p>
          <div className="text-blue-600 text-xs space-y-0.5">
            <p><span className="font-medium">Email:</span> test@test.com</p>
            <p><span className="font-medium">Password:</span> 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}