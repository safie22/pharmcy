export type User = {
	fullName: string
	email: string
	password: string
}

const AUTH_KEY = 'medimart:user'

export function getStoredUser(): User | null {
	const raw = localStorage.getItem(AUTH_KEY)
	return raw ? (JSON.parse(raw) as User) : null
}

export function saveUser(user: User) {
	localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export function mockLogin(email: string, password: string): boolean {
	// Built-in mock credentials
	if (email === 'test@test.com' && password === '123456') return true
	const user = getStoredUser()
	return !!user && user.email === email && user.password === password
}


