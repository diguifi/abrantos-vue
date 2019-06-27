export function setAuthenticated(state, value) {
  state.token = value;
}

export function removeAuthenticated(state) {
  state.token = '';
}
