import request from '@/utils/request'

// 查询行李寄存记录
export async function getStorageRecord(query) {
  return request({
    url: '/station_luggage_storage/storage',
    method: 'get',
    params: query
  })
}

// 新增行李寄存记录
export async function createLuggageStorageRecord(data) {
  return request({
    url: '/station_luggage_storage/storage/create',
    method: 'post',
    data
  })
}
