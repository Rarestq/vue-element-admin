import request from '@/utils/request'

// 查询行李类型列表
export async function getLuggageTypeList(query) {
  return request({
    url: '/luggage_storage/luggage_type',
    method: 'get',
    params: query
  })
}
