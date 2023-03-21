// @ts-ignore
import request from '../util/request'
import type { IHomeView } from '@/types/homeView'
const BASE_URL = '/dst-apis/bees-config/auth'

export const getList = (params: IHomeView) => {
  return request({
    url: `${BASE_URL}/event/page`,
    method: 'post',
    data: params
  })
}
