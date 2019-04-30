import request from '@/utils/request'

// 查询行李遗失登记记录列表
export async function queryLostRegisterRecordList(query) {
  return request({
    url: '/luggage_lost_register/register',
    method: 'get',
    params: query
  })
}
