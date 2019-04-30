import request from '@/utils/request'

// 查询行李遗失赔偿登记记录列表
export async function getTurnoverRecordList(query) {
  return request({
    url: '/turnover_record/turnover',
    method: 'get',
    params: query
  })
}

// 对遗失的行李进行赔偿（根据行李类型创建遗失赔偿记录）
export async function createCompensateRecordByLuggageType(lostRegistrationRecordId, data) {
  return request({
    url: `/turnover_record/turnover/compensate_luggage/${lostRegistrationRecordId}`,
    method: 'post',
    data
  })
}
