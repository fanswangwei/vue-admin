import { getData, postData } from "./util";

// 测试
export function testHealth(json) {
  return  getData("/api/health", json)
}
// 添加用户信息
export function addUserInfo(json) {
  return  postData("/api/addUserInfo", json)
}
// 获取用户信息
export function getUserInfo(json) {
  return  getData("/api/searchUserInfo", json)
}
// 编辑用户信息
export function updateUserInfo(json) {
  return  postData("/api/updateUserInfo", json)
}
// 删除用户信息
export function deleteUserInfo(json) {
  return  postData("/api/deleteUserInfo", json)
}