import request from '@/utils/request'

// 查询行李取件记录列表
export async function queryPickupLuggageRecordList(query) {
  return request({
    url: '/pickup_luggage/pickup',
    method: 'get',
    params: query
  })
}

// 正常取件
export async function pickupLuggage(luggageId) {
  return request({
    url: `/pickup_luggage/pickup/common_pickup/${luggageId}`,
    method: 'post'
  })
}

// 标记为遗失
export async function markLuggageAsLost(luggageId) {
  return request({
    url: `/pickup_luggage/pickup/mark_as_lost/${luggageId}`,
    method: 'post'
  })
}

// 逾期取件
export async function pickupOverdueLuggage(luggageId) {
  return request({
    url: `/pickup_luggage/pickup/overdue_pickup/${luggageId}`,
    method: 'post'
  })
}
