import request from '@/utils/request'

// 查询营业额列表
export async function getTurnoverRecordList(query) {
  return request({
    url: '/turnover_record/turnover',
    method: 'get',
    params: query
  })
}

// 查询营业额列表,并按照管理员id进行分组
export async function getTurnoverRecordPair() {
  return request({
    url: '/turnover_record/turnover/query',
    method: 'get'
  })
}
