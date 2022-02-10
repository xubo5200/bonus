/*
[rewrite_local]
^https:\/\/service\.hhdd\.com\/story2\/getCollectItems.json url script-response-body https://gitee.com/xubo5200/bonus/raw/master/kada.js

https://service.hhdd.com/story2/getCollectItems.json?collectId=81501

 */

var body = $response.body;
var obj = JSON.parse(body);
if (obj.code == 200) {
    var arr = obj.data.items;
    arr.forEach((item) => {
        if(item.extFlag != 258){
            item.extFlag =258;
            console.log("修改成功")
        }
    });
}
body = JSON.stringify(obj);
$done(body);