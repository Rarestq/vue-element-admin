import request from '@/utils/request'

// 查询管理员信息列表
export async function queryAdminInfoList() {
  return request({
    url: '/luggage_storage/admin',
    method: 'get'
  })
}

// 新增/编辑管理员信息
export async function saveAdminInfo(data) {
  return request({
    url: '/luggage_storage/admin/save',
    method: 'post',
    data
  })
}

// 删除管理员信息
export async function deleteAdmin(id) {
  return request({
    url: `/luggage_storage/admin/delete/${id}`,
    method: 'post'
  })
}
