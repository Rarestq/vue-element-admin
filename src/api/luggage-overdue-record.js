import request from '@/utils/request'

// 查询行李逾期未取清理记录列表
export async function queryOverdueRecordList(query) {
  return request({
    url: '/luggage_overdue_record/overdue',
    method: 'get',
    params: query
  })
}
