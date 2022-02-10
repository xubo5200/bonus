/*
[rewrite_local]
^https:\/\/service\.hhdd\.com\/user\/getUserDetail.json url script-response-body https://gitee.com/xubo5200/bonus/raw/master/kada.js

https://service.hhdd.com/user/getUserDetail.json

 */

var body = $response.body;
var obj = JSON.parse(body);
obj={
	"msg": "成功",
	"data": {
		"userInfo": {
			"userId": 40868283,
			"loginName": "o9bzTww0BfbrPGfM3tQGnMCOQvTc",
			"gender": "M",
			"birthday": "2018-08-01",
			"status": 1,
			"baseTag": 4102,
			"level": 10,
			"inactiveDays": 0,
			"createDate": 1641824186000,
			"toast": true,
			"subscribePlan": false,
			"collectId": 700001,
			"schoolPeriod": 0,
			"ageType": 4,
			"ageTypeFromBirthday": 4,
			"isUserSet": 1,
			"age": 3
		},
		"readInfo": {
			"readNumber": 5,
			"readTimes": 4885,
			"honorNumber": 0,
			"ranking": 0,
			"allRanking": 0,
			"storyTime": 3695314,
			"storyCount": 20,
			"totalCount": 13
		},
		"coinInfo": {
			"coin": 30,
			"consumeCoin": 0,
			"voucherCoin": 30
		},
		"vipInfo": {
			"vipStatus": 0,
			"beginTime": 0,
			"endTime": 0,
			"remindRenewal": 0,
			"status": 0,
			"remainingDays": 0,
			"payFlag": 0,
			"channel": 0,
			"withholdingTime": 0,
			"signStatus": 0,
			"level": 0,
			"vipType": 0,
			"priority": 0
		},
		"elfInfo": {
			"level": 1
		},
		"medalList": null,
		"medalNum": 15,
		"gameLevel": 1,
		"currentTime": 1644474737646,
		"newUserDate": 7,
		"vipInfoV2": {
			"vipStatus": 1,
			"beginTime": 1644474737646,
			"endTime": 7955821937000,
			"remindRenewal": 0,
			"status": 1,
			"remainingDays": 0,
			"payFlag": 2,
			"channel": 2,
			"withholdingTime": 1644474737646,
			"signStatus": 2,
			"level": 5,
			"vipType": 2,
			"priority": 0
		},
		"vipList": []
	},
	"code": 200
}
body = JSON.stringify(obj);
$done(body);