import { getData, postData } from "./util";

// 测试
export function testHealth(json) {
  return  getData("/api/health", json)
}
// 添加用户信息
export function addUserInfo(json) {
  return  postData("/api/addUserInfo", json)
}