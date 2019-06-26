export function isAuthenticated(state) {
  return !!state.token;
}

export function getToken(state) {
  return state.token;
}
