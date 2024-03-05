import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/message/list',
    method: 'get',
    params: query
  })
}
