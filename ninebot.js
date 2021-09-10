/* 
圈X配置

^https://steeldust.ninebot.com/vehicle/vehicle/vehicle-info url script-response-body https://gitee.com/xubo5200/bonus/raw/master/ninebot.js
https://api.xunyou.mobi/apis/v1/android/session/.*./refresh?.* url script-request-header https://gitee.com/xubo5200/bonus/raw/master/xunyou.js

*/
let body = $response.body;
try {
  body = JSON.parse(body)
  body['data']['smart_service_surplus_days'] = 1
  body = JSON.stringify(body)
} catch (e) {
  console.log(e)
} finally {
  $done({ body })
}
