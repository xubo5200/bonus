/*
软件名称:蝉妈妈 商店搜索下载
更新时间：2021-05-06 @magger
脚本说明：蝉妈妈 第一次学习脚本！！！

打开app登录后获取信息

本脚本以学习为主！

boxjs地址 :  
https://raw.githubusercontent.com/xubo5200/bonus/master/magger.box.json
蝉妈妈
圈X配置如下，其他软件自行测试

[task_local]
#蝉妈妈
10 9 * * * https://raw.githubusercontent.com/xubo5200/bonus/master/cmm.js, tag=蝉妈妈, img-url=https://ae01.alicdn.com/kf/Uc2775b8f4abf41788ba89df0317e58050.jpg, enabled=true

[rewrite_local]
#蝉妈妈
https://api-service.chanmama.com/v1/mission/continuous/attendance/info url script-request-header https://raw.githubusercontent.com/xubo5200/bonus/master/cmm.js
https://bp-api.coohua.com/bubuduo-cmm/ad/lookVideo url script-request-body https://raw.githubusercontent.com/xubo5200/bonus/master/cmm.js
^https://bp-api.coohua.com/bubuduo-cmm/game/sign/reward/list url script-response-body https://raw.githubusercontent.com/xubo5200/bonus/master/cmm.js
[MITM]
hostname = api-service.chanmama.com


*/





const magger = '蝉妈妈'
const $ = Env(magger)
const notify = $.isNode() ? require('./sendNotify') : '';
let no, No, no0, no1, no2, no3, no4, no5, no6, no7, no8;
var roomcount, unlockno, id
let shouldplan0, shouldplant1, shouldplant2, shouldplan3, ahouldplant4
let status;
status = (status = ($.getval("cmmstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
var cmmheaderArr = []
var cmmadheaderArr = []
var cmmadbodyArr = []
let cmmheader = $.getdata('cmmheader')
let cmmadheader = $.getdata('cmmadheader')
let cmmadbody = $.getdata('cmmadbody')
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const invite = 1;//新用户自动邀请，0关闭，1默认开启
const logs = 0;//0为关闭日志，1为开启
var day = ''
var hour = ''
var minute = ''
if ($.isNode()) {
    hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
    minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
    data = (new Date()).getDay();
    hour = (new Date()).getHours();
    minute = (new Date()).getMinutes();
}
//CK运行
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie();
    $.done()
}

cmmheaderArr.push($.getdata('cmmheader'))
cmmadheaderArr.push($.getdata('cmmadheader'))
cmmadbodyArr.push($.getdata('cmmadbody'))
let cmmcount = ($.getval('cmmcount') || '1');
for (let i = 2; i <= cmmcount; i++) {
    cmmheaderArr.push($.getdata(`cmmheader${i}`))
    cmmadheaderArr.push($.getdata(`cmmadheader${i}`))
    cmmadbodyArr.push($.getdata(`ryhtadbody${i}`))
}
!(async () => {
    if (!cmmheaderArr[0]) {
        $.msg($.name, '【提示】请先获取蝉妈妈一cookie')
        return;
    }
    console.log(`------------- 共${cmmheaderArr.length}账号----------------\n`)
    for (let i = 0; i < cmmheaderArr.length; i++) {
        if (cmmheaderArr[i]) {
            message = ''
            cmmheader = cmmheaderArr[i];
            cmmadheader = cmmadheaderArr[i];
            cmmadbody = cmmadbodyArr[i];
            $.index = i + 1;
            console.log(`\n开始【蝉妈妈${$.index}】`)
            await startTask()
        }
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function GetCookie() {
    if ($request && $request.url.indexOf("attendance/info") >= 0) {
        const cmmheader = JSON.stringify($request.headers)
        if (cmmheader) $.setdata(cmmheader, `cmmheader${status}`)
        $.log(`[${magger}] 获取cmmheader请求: 成功,cmmheader: ${cmmheader}`)
        $.msg(`cmmheader${status}: 成功🎉`, ``)
    }
    
}
async function startTask() {

    return new Promise((resolve) => {
        
        let tasklist_url = {
            url: `https://api-service.chanmama.com/v1/mission/continuous/attendance/info`,
            headers: JSON.parse(cmmheader),

        }
        $.get(tasklist_url, async (error, response, data) => {
            try {
                const result = JSON.parse(data)
                console.log(data)
                if (result.code == 0) {
                    // let statues = data.match(/"state":\d/g)
                    // let statu0 = statues[0].replace(/"state":/, "")
                    // let statu1 = statues[1].replace(/"state":/, "")
                    // let statu2 = statues[2].replace(/"state":/, "")
                    // let statu3 = statues[3].replace(/"state":/, "")
                    // let statu4 = statues[4].replace(/"state":/, "")
                    // let statu5 = statues[5].replace(/"state":/, "")
                    // let statu6 = statues[6].replace(/"state":/, "")
                    // let statu7 = statues[7].replace(/"state":/, "")
                    // if (statu0 == 2 && statu1 == 2 && statu2 == 2 && statu3 == 2 && statu4 == 2 && statu5 == 2 && statu6 == 2 && statu7 == 2) {
                    //     $.log("每日福利已完成\n")
                    //     $.log("福利完成进度：" + result.result.redNum + "/" + result.result.redNumLimit + "\n")
                    // } else {
                    //     let taskid = data.match(/taskId":\d+/g)
                    //     //$.log(taskid)
                    //     for (let i = 0; i < taskid.length; i++) {
                    //         id = taskid[i].replace(/taskId":/, "")
                    //         await getReward()
                    //         await daily()
                    //     }
                    // }
                } else
                    $.log(result.message + "\n")
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
async function getReward() {
    return new Promise((resolve) => {
        let getReward_url = {
            url: `https://bp-api.coohua.com/bubuduo-cmm/task/daily/getReward?taskId=${id}`,
            headers: JSON.parse(cmmheader),

        }
        $.post(getReward_url, async (error, response, data) => {
            try {
                const result = JSON.parse(data)
                if (logs) $.log(data)
                if (result.code == 0)
                    $.log(id + "任务完成\n")
                else
                    $.log(result.message + "\n")
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
async function daily() {
    return new Promise((resolve) => {
        let daily_url = {
            url: `https://bp-api.coohua.com/bubuduo-cmm/task/finish/daily?taskId=${id}`,
            headers: JSON.parse(cmmheader),

        }
        $.post(daily_url, async (error, response, data) => {
            try {
                const result = JSON.parse(data)
                if (logs) $.log(data)
                if (result.code == 0)
                    $.log(id + "领取成功\n")
                else
                    $.log(result.message + "\n")
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
//showmsg
//boxjs设置tz=1，在12点<=20和23点>=40时间段通知，其余时间打印日志

async function showmsg() {
    if (tz == 1) {
        if ($.isNode()) {
            if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
                await notify.sendNotify($.name, message)
            } else {
                $.log(message)
            }
        } else {
            if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
                $.msg(magger, '', message)
            } else {
                $.log(message)
            }
        }
    } else {
        $.log(message)
    }
}
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
