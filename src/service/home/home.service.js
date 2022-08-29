import { getInstance } from '../axios'

export const HomeService = {
  async fetchHomes () {
    const { data } = await getInstance().get('homes')
    return data
  },
}