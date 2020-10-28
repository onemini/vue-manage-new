import vue from 'vue'

const mutaions = {
  SET_APP_NAME ( state, param ) {
    state.appName = param
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}
export default mutaions