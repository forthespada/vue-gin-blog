import axios from '@/config/httpConfig'

export default {
  login(data) {
    return axios.post('/user/login', data)
  },

  fetchPermission() {
    return axios.get('/user/info')
  }
}
