/*
[rewrite_local]
https://m.mallcoo.cn/api/user/user/GetUserAndMallCard url script-response-body https://gitee.com/xubo5200/bonus/raw/master/kada.js

https://service.hhdd.com/user/getUserDetail.json

 */

var body = $response.body;
var obj = JSON.parse(body);
obj={
	"m" : 1,
	"d" : {
	  "IsNotFillFieldForReCreateMallCard" : false,
	  "UpdateBonus" : 0,
	  "IsOpenCard" : true,
	  "IsThirdCRM" : true,
	  "IsCardAutoUpgrade" : false,
	  "QrCode" : "FOME000001851052",
	  "CardTitle" : "银卡",
	  "IsUnbindMallCard" : false,
	  "CardUseDesc" : null,
	  "BarCode" : "FOME000001851052",
	  "CardTitleUP" : null,
	  "IsChangeMallCard" : true,
	  "TotalConsume" : 0,
	  "NickName" : "wonderful",
	  "Mobile" : "189***5500",
	  "SyncErrCode" : 0,
	  "Bonus" : 150,
	  "Avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTDVoL8XhVlabMPBhOj5B6XbxySUon2gGTuP2oxNYGhZ9vAXqHdpHA5qwuJMUVJXoT3R3Cx7ibVOg/132",
	  "IsBindCard" : true,
	  "CardNo" : "FOME000001851052",
	  "CardPhoto" : "sp_mall/64/pe/w7/77-5769-47df-83f7-2b6923d8a12b.png",
	  "IsNeedChooseCard" : false,
	  "SyncState" : 2,
	  "CardDegreedeBonus" : 0,
	  "IsHasPwd" : false,
	  "TotalBonus" : 150,
	  "SyncMsg" : null
	},
	"e" : null
  }
  
body = JSON.stringify(obj);
$done(body);