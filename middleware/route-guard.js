export default function ({ store, redirect, route, error }) {
  const path = route.path
  const isAuthenticated = store.getters['auth/getIsAuthenticated']

  if (path.startsWith('/dashboard') && !isAuthenticated) {
    error('not authenticated')
  }
}
