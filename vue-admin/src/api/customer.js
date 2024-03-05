import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/customer/list',
    method: 'get',
    params: query
  })
}

