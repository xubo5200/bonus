/*


boxjs地址 :  
https://raw.githubusercontent.com/xubo5200/bonus/master/magger.box.json
圈X配置如下，其他软件自行测试

[task_local]
#快乐餐厅(自己改五分钟一次)
0 0 0 0 0 https://gitee.com/xubo5200/bonus/raw/master/hahaha.js, tag=我的幸福生活, img-url=https://ae01.alicdn.com/kf/Uc2775b8f4abf41788ba89df0317e58050.jpg, enabled=true

[rewrite_local]
#快乐餐厅
https://bp-api.shinet.cn/shua-xfsh2/look/ad/video url script-request-header https://gitee.com/xubo5200/bonus/raw/master/hahaha.js
https://bp-api.shinet.cn/shua-xfsh2/add/gold url script-request-header https://gitee.com/xubo5200/bonus/raw/master/hahaha.js
hostname = bp-api.shinet.cn


*/


const magger = '重放N次'
const $ = Env(magger)
let i = 0;
var num = 10;//重放次数控制
let logs = 1;
let isGetCookie = typeof $request !== 'undefined'
// var url1 = "https://bp-api.shinet.cn/shua-xfsh2/look/ad/video?accessKey=94ae7461dec8e07da827b792cc1c55b7_483895188&anomy=0&appId=517&appVersion=1.0.1&brand=Apple&bs=CDMA&channel=AppStore&deviceId=0000-0000-0000-0000&env=production&gps=default&idfa=0000-0000-0000-0000&isPass=1&os=iOS&osVersion=iOS15.100000&pkgId=358&position=%E5%9C%B0%E5%9D%97%E5%85%A8%E4%BD%93%E5%8A%A0%E9%80%9F&product=wodexingfushenghuo2&romVersion=iOS15.100000&sign=KyyC1NWUMW7MuSWl0V0hA3h9Pe0QbkirFYGCejwwoiDA44x0kj11EX/HMhNiyP1UpPVZKNz4I9ZXyNJs8Sa2BQ%3D%3D&userId=483895188&version=1.0.1"
// var url2 = "https://bp-api.shinet.cn/shua-xfsh2/add/gold?position=26"
// var videoHeader = {"bs":"CDMA","userId":"483895188","pkgId":"358","Host":"bp-api.shinet.cn","osVersion":"iOS15.100000","deviceId":"0000-0000-0000-0000","Accept-Encoding":"gzip, deflate, br","gps":"default","brand":"Apple","channel":"AppStore","Connection":"keep-alive","accessKey":"94ae7461dec8e07da827b792cc1c55b7_483895188","appVersion":"1.0.1","anomy":"0","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","version":"1.0.1","User-Agent":"wdxfsh-mobile/1.0.1 (iPhone; iOS 15.1.1; Scale/3.00)","os":"iOS","isPass":"1","romVersion":"iOS15.100000","sign":"COgoueXJB1xlJq3XHdVN2CyHr3DJeOebKkk2NDC2Qi+lsI7UX0iTj3BMtFcR9ug20TiFinulbMuf21/4SLE2zw==","Accept":"*/*","env":"production","appId":"517","product":"wodexingfushenghuo2","idfa":"0000-0000-0000-0000"}
// var goldHeader = {"bs":"CDMA","osVersion":"iOS15.100000","pkgId":"358","Host":"bp-api.shinet.cn","Accept-Encoding":"gzip, deflate, br","deviceId":"0000-0000-0000-0000","brand":"Apple","channel":"AppStore","Connection":"keep-alive","Cache-Control":"no-cache","accessKey":"94ae7461dec8e07da827b792cc1c55b7_483895188","appVersion":"1.0.1","Accept-Language":"zh-cn","User-Agent":"wdxfsh-mobile/1.0 CFNetwork/1325.0.1 Darwin/21.1.0","os":"iOS","romVersion":"iOS15.100000","sign":"PzEZA7lfGWejodih2QKGrUKWJsPvnELTNF7wqAFcEcShaeKbxMSLsrPXo86c0j4f5VzpSrdsUR/8w/zAA75BDQ==","mac":"","oaid":"","Accept":"*/*","androidId":"","blackBox":"","gps":"default"}

var url1 = $.getdata('url1')
var url2 = $.getdata('url2')
var videoHeader = $.getdata('videoHeader')
var goldHeader = $.getdata('goldHeader')


if (isGetCookie) {
    GetCookie();
    $.done()
}
!(async () => {
    do {
        await collectmagger()
        await collectmagger1()
        console.log("本次延时" + (Math.round(Math.random() * (40000 - 30000) + 30000)) / 1000 + "s\n")
        await $.wait(Math.round(Math.random() * (40000 - 30000) + 30000))        //延时30-40s  对应30000-40000，修改数字就可以，本次不建议修改
        i++
    } while (i < num)

})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



function GetCookie() {
    if ($request && $request.url.indexOf("/look/ad/video") >= 0) {
        const videoHeader = JSON.stringify($request.headers)
        $.setdata($request.url,`url1`)
        if (videoHeader) $.setdata(videoHeader, `videoHeader`)
        $.log(`[${magger}] videoHeader: 成功,videoHeader: ${videoHeader}`)
        $.msg(`videoHeader: 成功🎉`, ``)
        // const videoBody = $request.body
        // if (videoBody)
        //     $.setdata(videoBody, `videoBody`)
        // $.log(`[${magger}] 获取videoBody请求: 成功,videoBody: ${videoBody}`)
        // $.msg(`videoBody: 成功🎉`, ``)
    }
    if ($request.url.indexOf("/add/gold") > -1) {
        $.setdata($request.url,`url2`)
        const goldHeader = JSON.stringify($request.headers)
        if (goldHeader)
            $.setdata(goldHeader, `goldHeader`)
        $.log(`[${magger}] 获取goldHeader请求: 成功,goldHeader: ${goldHeader}`)
        $.msg(`goldHeader: 成功🎉`, ``)
        // const goldBody = $request.body
        // if (goldBody)
        //     $.setdata(goldBody, `goldBody`)
        // $.log(`[${magger}] 获取goldBody请求: 成功,goldBody: ${goldBody}`)
        // $.msg(`goldBody: 成功🎉`, ``)
    }
    if ($request.url.indexOf("game/sign/reward/list") > -1) {

    }
}


//随机字符串
function randomString(randomLen, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 随机产生
    if (randomLen) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}


async function collectmagger() {
    return new Promise((resolve) => {
        let collect1_url = {
            url: url1,
            headers: JSON.parse(videoHeader),

        }
        // $.log(JSON.stringify(collect1_url))
        $.get(collect1_url, async (error, response, data) => {
            try {
                $.log(data)
                // const result = JSON.parse(data)
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}

async function collectmagger1() {
    return new Promise((resolve) => {
        let collect_url = {
            url: url2,
            headers: JSON.parse(goldHeader)

        }
        $.get(collect_url, async (error, response, data) => {
            try {
                if (logs) $.log(data)
                // const result = JSON.parse(data)
                // if (result.code == 0)
                    // $.log("\nmagger红包领取成功:+" + result.result.gold + "\n")
                else
                    $.log(result.message + "\n")
                resolve()
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }


