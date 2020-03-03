import Cookies from 'js-cookie'
import Auth from '../lib/auth'
const csrftoken = Cookies.get('csrftoken')

export const headers = {
  common: {
    'X-CSRF-TOKEN': csrftoken
  },
  headers: { Authorization: `Bearer ${Auth.getToken()}` }
}