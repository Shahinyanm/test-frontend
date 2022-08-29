import axios from 'axios'
import { API_URL } from '@/common/config'

export class ValidationError extends Error {
  constructor (response) {
    super()
    this.errors = response.data.errors
  }

  hasError (key) {
    return !!this.errors[key]
  }

  getError (key) {
    return this.hasError(key) ? this.errors[key][0] : undefined
  }

  getErrors () {
    return Object.keys(this.errors).reduce(
      (agg, key) => ({ ...agg, [key]: this.errors[key] }),
      {}
    )
  }
}

/**
 * @returns {AxiosInstance}
 */
export const getInstance = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })

  axiosInstance.interceptors.response.use((r) => r, (err) => {

    if (err.response.status === 500) {
      throw new ValidationError(err.response)
    }
    throw err
  })

  return axiosInstance
}
