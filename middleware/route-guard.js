export default function ({ store, redirect, route, error }) {
  const path = route.path
  const isAuthenticated = store.getters['auth/getIsAuthenticated']

  if (path.startsWith('/dashboard') && !isAuthenticated) {
    error('error')
  } else if (['/login', '/signup'].includes(path) && isAuthenticated) {
    redirect('/dashboard/profile')
  }
}
