import { getData, postData } from "./util";

// 登录
export function testHealth(json) {
  return  getData("/api/health", json)
}