/*
[rewrite_local]
https://m.mallcoo.cn/api/discount/DiscountCore/Query url script-response-body https://gitee.com/xubo5200/bonus/raw/master/kada.js

https://service.hhdd.com/user/getUserDetail.json

 */

var body = $response.body;
var obj = JSON.parse(body);
obj={
	"m" : 1,
	"d" : {
	  "PlateNo" : null,
	  "ParkingTotalFee" : 0,
	  "IsUseRights" : false,
	  "CardTitle" : null,
	  "FreeAmount" : 0,
	  "Barcode" : null,
	  "RegisterGuide" : null,
	  "FeeId" : null,
	  "ParkingMinutes" : 0,
	  "UID" : 0,
	  "NeedPayAmount" : 0,
	  "ParkingFee" : 0,
	  "EntryTime" : "0001-01-01 00:00:00",
	  "Mobile" : null,
	  "Bonus" : 0,
	  "ParkName" : null,
	  "RefID" : null,
	  "OfflineDeduction" : null,
	  "WaitPayOrderId" : 0,
	  "CardNo" : null,
	  "IsAccessPC" : false,
	  "MallName" : null,
	  "IsShowParkZeroPay" : false,
	  "ParkTel" : null,
	  "DiscountLimit" : {
		"MutexList" : null,
		"UpperList" : null
	  },
	  "PaidAmount" : 0,
	  "DelayTime" : 0,
	  "RightsRuleModelList" : [
		{
		  "IsZeroLimit" : false,
		  "ZeroType" : 0,
		  "RightsList" : [
			{
				"Amount" : 1500,
				"OrderRecord" : "4",
				"RightsID" : "10",
				"IsIntellegent" : false,
				"Minutes" : 300,
				"AllowanceAmount" : 420,
				"RightsName" : "10积分抵扣1小时1",
				"RightsType" : 2,
				"RuleShowType" : 0
			  },
		  ],
		  "ListTips" : "无停车券可用",
		  "NeedMany" : 0,
		  "DiscountType" : 0,
		  "IntellegentParams" : "{\"canExceed\":true}",
		  "RuleName" : "商场停车券",
		  "ShowType" : 2,
		  "PanelTips" : "每日可使用1张停车券",
		  "IntellegentType" : 3,
		  "SelectedMaxCount" : 1,
		  "Status" : false,
		  "IsShow" : true,
		  "ZeroParams" : "",
		  "IsIntellegent" : false,
		  "RuleShowType" : 0,
		  "Checked" : false
		},
		{
		  "IsZeroLimit" : true,
		  "ZeroType" : 0,
		  "RightsList" : [
			{
			  "Amount" : 0,
			  "OrderRecord" : "4",
			  "RightsID" : "10",
			  "IsIntellegent" : false,
			  "Minutes" : 300,
			  "AllowanceAmount" : 0,
			  "RightsName" : "10积分抵扣1小时",
			  "RightsType" : 1,
			  "RuleShowType" : 0
			},
			{
			  "Amount" : 1500,
			  "OrderRecord" : "4",
			  "RightsID" : "10",
			  "IsIntellegent" : false,
			  "Minutes" : 300,
			  "AllowanceAmount" : 420,
			  "RightsName" : "10积分抵扣1小时1",
			  "RightsType" : 1,
			  "RuleShowType" : 0
			},
			{
			  "Amount" : 1000,
			  "OrderRecord" : "2",
			  "RightsID" : "11",
			  "IsIntellegent" : false,
			  "Minutes" : 60,
			  "AllowanceAmount" : 0,
			  "RightsName" : "10积分",
			  "RightsType" : 1,
			  "RuleShowType" : 0
			},
		  ],
		  "ListTips" : "请选择，10积分可用",
		  "NeedMany" : 0,
		  "DiscountType" : 0,
		  "IntellegentParams" : "",
		  "RuleName" : "商场积分",
		  "ShowType" : 1,
		  "PanelTips" : "每日可用积分抵扣1次，每次最多可使用50积分抵扣",
		  "IntellegentType" : 2,
		  "SelectedMaxCount" : 0,
		  "Status" : true,
		  "IsShow" : true,
		  "ZeroParams" : "",
		  "IsIntellegent" : true,
		  "RuleShowType" : 0,
		  "Checked" : false
		}
	  ]
	},
	"e" : null
  }
  
  
body = JSON.stringify(obj);
$done(body);