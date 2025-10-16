const AUTH_KEY = 'medimart:user'

export function getStoredUser() {
	const raw = localStorage.getItem(AUTH_KEY)
	return raw ? JSON.parse(raw) : null
}

export function saveUser(user) {
	localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export function mockLogin(email, password) {
	// Built-in mock credentials
	if (email === 'test@test.com' && password === '123456') return true
	const user = getStoredUser()
	return !!user && user.email === email && user.password === password
}
