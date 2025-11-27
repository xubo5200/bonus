const money = 2000
const $ = new Env("中免抢劵"+money)
const token = $.getdata('cdf_token')
// 抢的劵金额

let datas = [
    {
        "money": 250,
        "couTypeTitle": "政府消费券250元", "couThresholdAmountText": "满5000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15223, "code": 219028
    },
    {
        "money": 400,
        "couTypeTitle": "政府消费券400元", "couThresholdAmountText": "满8000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15224, "code": 219026
    },
    {
        "money": 750,
        "couTypeTitle": "政府消费券750元", "couThresholdAmountText": "满15000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15226, "code": 219022
    },
    {
        "money": 2000,
        "couTypeTitle": "政府消费券2000元", "couThresholdAmountText": "满20000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15225, "code": 219024
    },
    {
        "money": 3000, "couTypeTitle": "政府消费券3000元", "couThresholdAmountText": "满30000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15227, "code": 219020
    },
    {
        "money": 5000,
        "couTypeTitle": "政府消费券5000元", "couThresholdAmountText": "满50000元可用", "startTime": "2025-03-13 10:00:00", "activityCode": 15222, "code": 219030
    }]
function coverParams(e) {
    var t = {
        activityCode: e.activityCode,
        code: e.code,
        id: e.id,
        idType: e.idType,
        lat: e.lat,
        lng: e.lng,
        startTime: e.startTime,
        storeOuCode: e.storeOuCode
    },
        n = (new Date).getTime(),
        o = "";
    for (var i in e) (e[i] || 0 === e[i]) && (o += "".concat(i, "=").concat(e[i], "|"));
    o += "timestamp=".concat(n)
    t.sign = md5(base64(o)).toLowerCase()
    t.timestamp = n
    return t
}

function md5(r) {
    return function (r) {
        return function (r) {
            for (var n = "0123456789ABCDEF", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);
            return t
        }(function (r, c) {
            r[c >> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c;
            for (var f = 1732584193, i = -271733879, a = -1732584194, h = 271733878, v = 0; v < r.length; v += 16) {
                var A = f,
                    l = i,
                    g = a,
                    d = h;
                f = n(f, i, a, h, r[v + 0], 7, -680876936), h = n(h, f, i, a, r[v + 1], 12, -389564586), a = n(a, h, f, i, r[v + 2], 17, 606105819), i = n(i, a, h, f, r[v + 3], 22, -1044525330), f = n(f, i, a, h, r[v + 4], 7, -176418897), h = n(h, f, i, a, r[v + 5], 12, 1200080426), a = n(a, h, f, i, r[v + 6], 17, -1473231341), i = n(i, a, h, f, r[v + 7], 22, -45705983), f = n(f, i, a, h, r[v + 8], 7, 1770035416), h = n(h, f, i, a, r[v + 9], 12, -1958414417), a = n(a, h, f, i, r[v + 10], 17, -42063), i = n(i, a, h, f, r[v + 11], 22, -1990404162), f = n(f, i, a, h, r[v + 12], 7, 1804603682), h = n(h, f, i, a, r[v + 13], 12, -40341101), a = n(a, h, f, i, r[v + 14], 17, -1502002290), i = n(i, a, h, f, r[v + 15], 22, 1236535329), f = t(f, i, a, h, r[v + 1], 5, -165796510), h = t(h, f, i, a, r[v + 6], 9, -1069501632), a = t(a, h, f, i, r[v + 11], 14, 643717713), i = t(i, a, h, f, r[v + 0], 20, -373897302), f = t(f, i, a, h, r[v + 5], 5, -701558691), h = t(h, f, i, a, r[v + 10], 9, 38016083), a = t(a, h, f, i, r[v + 15], 14, -660478335), i = t(i, a, h, f, r[v + 4], 20, -405537848), f = t(f, i, a, h, r[v + 9], 5, 568446438), h = t(h, f, i, a, r[v + 14], 9, -1019803690), a = t(a, h, f, i, r[v + 3], 14, -187363961), i = t(i, a, h, f, r[v + 8], 20, 1163531501), f = t(f, i, a, h, r[v + 13], 5, -1444681467), h = t(h, f, i, a, r[v + 2], 9, -51403784), a = t(a, h, f, i, r[v + 7], 14, 1735328473), i = t(i, a, h, f, r[v + 12], 20, -1926607734), f = u(f, i, a, h, r[v + 5], 4, -378558), h = u(h, f, i, a, r[v + 8], 11, -2022574463), a = u(a, h, f, i, r[v + 11], 16, 1839030562), i = u(i, a, h, f, r[v + 14], 23, -35309556), f = u(f, i, a, h, r[v + 1], 4, -1530992060), h = u(h, f, i, a, r[v + 4], 11, 1272893353), a = u(a, h, f, i, r[v + 7], 16, -155497632), i = u(i, a, h, f, r[v + 10], 23, -1094730640), f = u(f, i, a, h, r[v + 13], 4, 681279174), h = u(h, f, i, a, r[v + 0], 11, -358537222), a = u(a, h, f, i, r[v + 3], 16, -722521979), i = u(i, a, h, f, r[v + 6], 23, 76029189), f = u(f, i, a, h, r[v + 9], 4, -640364487), h = u(h, f, i, a, r[v + 12], 11, -421815835), a = u(a, h, f, i, r[v + 15], 16, 530742520), i = u(i, a, h, f, r[v + 2], 23, -995338651), f = e(f, i, a, h, r[v + 0], 6, -198630844), h = e(h, f, i, a, r[v + 7], 10, 1126891415), a = e(a, h, f, i, r[v + 14], 15, -1416354905), i = e(i, a, h, f, r[v + 5], 21, -57434055), f = e(f, i, a, h, r[v + 12], 6, 1700485571), h = e(h, f, i, a, r[v + 3], 10, -1894986606), a = e(a, h, f, i, r[v + 10], 15, -1051523), i = e(i, a, h, f, r[v + 1], 21, -2054922799), f = e(f, i, a, h, r[v + 8], 6, 1873313359), h = e(h, f, i, a, r[v + 15], 10, -30611744), a = e(a, h, f, i, r[v + 6], 15, -1560198380), i = e(i, a, h, f, r[v + 13], 21, 1309151649), f = e(f, i, a, h, r[v + 4], 6, -145523070), h = e(h, f, i, a, r[v + 11], 10, -1120210379), a = e(a, h, f, i, r[v + 2], 15, 718787259), i = e(i, a, h, f, r[v + 9], 21, -343485551), f = o(f, A), i = o(i, l), a = o(a, g), h = o(h, d)
            }
            return Array(f, i, a, h)
        }(function (r) {
            for (var n = Array(), t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
            return n
        }(r), 8 * r.length))
    }(r)
}
function base64(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let bytes = [];
  
  // 将字符串转为 UTF-8 字节数组
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
    } else if (charCode < 0x10000) {
      bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    }
  }

  // 将字节数组转为 Base64
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    let a = bytes[i++];
    let b = bytes[i++];
    let c = bytes[i++];
    let index1 = a >> 2;
    let index2 = ((a & 0x03) << 4) | (b >> 4);
    let index3 = ((b & 0x0f) << 2) | (c >> 6);
    let index4 = c & 0x3f;
    if (isNaN(b)) {
      index3 = index4 = 64;
    } else if (isNaN(c)) {
      index4 = 64;
    }
    result += chars.charAt(index1) + chars.charAt(index2) + chars.charAt(index3) + chars.charAt(index4);
  }
  return result;

}
function r(r, n, t, u, e, c) {
    return o((f = o(o(n, r), o(u, c))) << (i = e) | f >>> 32 - i, t);
    var f, i
}

function n(n, t, u, e, o, c, f) {
    return r(t & u | ~t & e, n, t, o, c, f)
}

function t(n, t, u, e, o, c, f) {
    return r(t & e | u & ~e, n, t, o, c, f)
}

function u(n, t, u, e, o, c, f) {
    return r(t ^ u ^ e, n, t, o, c, f)
}

function e(n, t, u, e, o, c, f) {
    return r(u ^ (t | ~e), n, t, o, c, f)
}

function o(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
}
const headers = {
    "x-access-token": token,
    "pageUrl": "packages/list-view/lbs-coupon/lbs-coupon",
    "content-type": "application/json",
    "cdf-v": "5.1.8",
    "Accept-Encoding": "gzip,compress,br,deflate",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003030) NetType/WIFI Language/zh_CN",
    "Referer": "https://servicewechat.com/wxdf26125d1f97992c/128/page-frame.html"
};
// 主函数
(async () => {
    let find = datas.find(v=>v.money === money)
    

    let form = {
        activityCode: "15222",
        code: "219030",
        id: "143",
        idNumber: "",
        idType: "",
        lat: "",
        lng: "",
        signKey: "scKFpxeh=a8C,kGfzc9It3.F=JV1_%~zT",
        startTime: $.time('yyyy-MM-dd 10:00:00'),
        storeOuCode: "1001600"
    }
    if(find){
        form.activityCode = find.activityCode
        form.code = find.code   
    }
    let p = coverParams(form)
    // console.log(p);

    await new Promise(resolve => {
        const options = {
            url: 'https://cdfmbrapi.cdfg.com.cn/api/coupon/lbs/get',
            body: JSON.stringify(p),
            headers: headers
        }

        $.post((options), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                    $.done()
                } else {
                    // const couponVos = JSON.parse(data).data.couponVos
                    // let json = []
                    // couponVos.map(v => {
                    //     if (v.listVo) {
                    //         v.listVo.map(v1 => {
                    //             const { couTypeTitle, couThresholdAmountText, startTime, activityCode, code, storeOuCode } = v1
                    //             json.push({ couTypeTitle, couThresholdAmountText, startTime, activityCode, code, storeOuCode })
                    //         })
                    //     }
                    // })
                    // $.log(JSON.stringify(json))
                    $.log(data)
                }
                resolve();
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })


    $.done()
})();



function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; "POST" === e && (s = this.post); const i = new Promise(((e, i) => { s.call(this, t, ((t, s, o) => { t ? i(t) : e(s) })) })); return t.timeout ? ((t, e = 1e3) => Promise.race([t, new Promise(((t, s) => { setTimeout((() => { s(new Error("请求超时")) }), e) }))]))(i, t.timeout) : i } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise((e => { this.get({ url: t }, ((t, s, i) => e(i))) })) } runScript(t, e) { return new Promise((s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o; const [r, a] = i.split("@"), n = { url: `http://${a}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: o }, headers: { "X-Key": r, Accept: "*/*" }, policy: "DIRECT", timeout: o }; this.post(n, ((t, e, i) => s(i))) })).catch((t => this.logErr(t))) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), o = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let o = t; for (const t of i) if (o = Object(o)[t], void 0 === o) return s; return o } lodash_set(t, e, s) { return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}), t)[e[e.length - 1]] = s), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : ""; if (o) try { const t = JSON.parse(o); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), a = i ? "null" === r ? null : r || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const r = {}; this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, ((t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) })); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: i, headers: o, body: r, bodyBytes: a } = t; e(null, { status: s, statusCode: i, headers: o, body: r, bodyBytes: a }, r, a) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", ((t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } })).then((t => { const { statusCode: i, statusCode: o, headers: r, rawBody: a } = t, n = s.decode(a, this.encoding); e(null, { status: i, statusCode: o, headers: r, rawBody: a, body: n }, n) }), (t => { const { message: i, response: o } = t; e(i, o, o && s.decode(o.rawBody, this.encoding)) })); break } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, ((t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) })); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: i, headers: o, body: r, bodyBytes: a } = t; e(null, { status: s, statusCode: i, headers: o, body: r, bodyBytes: a }, r, a) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let i = require("iconv-lite"); this.initGotEnv(t); const { url: o, ...r } = t; this.got[s](o, r).then((t => { const { statusCode: s, statusCode: o, headers: r, rawBody: a } = t, n = i.decode(a, this.encoding); e(null, { status: s, statusCode: o, headers: r, rawBody: a, body: n }, n) }), (t => { const { message: s, response: o } = t; e(s, o, o && i.decode(o.rawBody, this.encoding)) })); break } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let i = t[s]; null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", i = "", o = {}) { const r = t => { const { $open: e, $copy: s, $media: i, $mediaMime: o } = t; switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { const r = {}; let a = t.openUrl || t.url || t["open-url"] || e; a && Object.assign(r, { action: "open-url", url: a }); let n = t["update-pasteboard"] || t.updatePasteboard || s; if (n && Object.assign(r, { action: "clipboard", text: n }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [t] = i.split(";"), [, o] = i.split(","); e = o, s = t.replace("data:", "") } else { e = i, s = (t => { const e = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (var s in e) if (0 === t.indexOf(s)) return e[s]; return null })(i) } Object.assign(r, { "media-url": t, "media-base64": e, "media-base64-mime": o ?? s }) } return Object.assign(r, { "auto-dismiss": t["auto-dismiss"], sound: t.sound }), r } case "Loon": { const s = {}; let o = t.openUrl || t.url || t["open-url"] || e; o && Object.assign(s, { openUrl: o }); let r = t.mediaUrl || t["media-url"]; return i?.startsWith("http") && (r = i), r && Object.assign(s, { mediaUrl: r }), console.log(JSON.stringify(s)), s } case "Quantumult X": { const o = {}; let r = t["open-url"] || t.url || t.openUrl || e; r && Object.assign(o, { "open-url": r }); let a = t["media-url"] || t.mediaUrl; i?.startsWith("http") && (a = i), a && Object.assign(o, { "media-url": a }); let n = t["update-pasteboard"] || t.updatePasteboard || s; return n && Object.assign(o, { "update-pasteboard": n }), console.log(JSON.stringify(o)), o } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, i, r(o)); break; case "Quantumult X": $notify(e, s, i, r(o)); break; case "Node.js": break }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map((t => t ?? String(t))).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, e, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack); break } } wait(t) { return new Promise((e => setTimeout(e, t))) } done(t = {}) { const e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
