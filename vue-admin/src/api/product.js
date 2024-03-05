import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/product/list',
    method: 'get',
    params: query
  })
}

