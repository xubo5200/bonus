/* 
圈X配置

^https://api.xunyou.mobi/apis/v1/android/session/.*./refresh?.* url script-response-body https://gitee.com/xubo5200/bonus/raw/master/xunyou.js
https://api.xunyou.mobi/apis/v1/android/session/.*./refresh?.* url script-request-header https://gitee.com/xubo5200/bonus/raw/master/xunyou.js
YYYY-MM-DD HH:mm:ss
#迅游加速器
10 9 * * * https://gitee.com/xubo5200/bonus/raw/master/xunyou.js, tag=迅游加速器, img-url=https://ae01.alicdn.com/kf/Uc2775b8f4abf41788ba89df0317e58050.jpg, enabled=true

*/
const magger = '迅游加速器'
const $ = Env(magger)
function base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    
    return base64
  }
  
  (function() {
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    base64DecodeChars = new Array(( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 62, ( - 1), ( - 1), ( - 1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1));
    this.base64encode = function(e) {
        var r, a, c, h, o, t;
        for (c = e.length, a = 0, r = ''; a < c;) {
            if (h = 255 & e.charCodeAt(a++), a == c) {
                r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
                break
            }
            if (o = e.charCodeAt(a++), a == c) {
                r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
                break
            }
            t = e.charCodeAt(a++),
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
        }
        return r
    }
    this.base64decode = function(e) {
        var r, a, c, h, o, t, d;
        for (t = e.length, o = 0, d = ''; o < t;) {
            do r = base64DecodeChars[255 & e.charCodeAt(o++)];
            while (o < t && r == -1);
            if (r == -1) break;
            do a = base64DecodeChars[255 & e.charCodeAt(o++)];
            while (o < t && a == -1);
            if (a == -1) break;
            d += String.fromCharCode(r << 2 | (48 & a) >> 4);
            do {
                if (c = 255 & e.charCodeAt(o++), 61 == c) return d;
                c = base64DecodeChars[c]
            } while ( o < t && c == - 1 );
            if (c == -1) break;
            d += String.fromCharCode((15 & a) << 4 | (60 & c) >> 2);
            do {
                if (h = 255 & e.charCodeAt(o++), 61 == h) return d;
                h = base64DecodeChars[h]
            } while ( o < t && h == - 1 );
            if (h == -1) break;
            d += String.fromCharCode((3 & c) << 6 | h)
        }
        return d
    }
    this.hexToBase64 = function(str) {
        return base64encode(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }
    this.Base64Tohex = function(str) {
        for (var i = 0,
        bin = base64decode(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
            var tmp = bin.charCodeAt(i).toString(16);
            if (tmp.length === 1) tmp = "0" + tmp;
            hex[hex.length] = tmp;
        }
        return hex.join("");
    }
  }) ();
  //hexToBase64 Base64Tohex base64decode base64encode
  
  function bytesToString(bytes){
      return hexToString(bytesToHex(bytes));
  }
  
  
  function bytesToBase64(bytes){
      return base64ArrayBuffer(bytes);
  }
  
  // Convert a byte array to a hex string
  function bytesToHex(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join("");
  }
  
  
  function stringToBase64(str){
      return base64encode(str); 
  }
  
  function stringToBytes(str){
    return hexToBytes(stringToHex(str));
  }
  
  // Convert a ASCII string to a hex string
  function stringToHex(str) {
      return str.split("").map(function(c) {
          return ("0" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join("");
  }
  
  function hexToBytes(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
      bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
  }
  
  // Convert a hex string to a ASCII string
  function hexToString(hexStr) {
      var hex = hexStr.toString();//force conversion
      var str = '';
      for (var i = 0; i < hex.length; i += 2)
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      return str;
  }
  
  function hexToBase64(hexStr){
    return stringToBase64(hexToString(hexStr));
  }
  
  function base64ToString(base64str){
    return base64decode(base64str);
  }
  
  function base64ToHex(base64str){
    return Base64Tohex(base64str);
  }
  
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


const notify = $.isNode() ? require('./sendNotify') : '';
let xyjsqheader = $.getdata('xyjsqheader')
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const logs = 0;//0为关闭日志，1为开启
//CK运行
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie();
    $.done()
}
!(async () => {
    if (!xyjsqheader) {
        $.msg($.name, '【提示】请先获取迅游加速器一cookie')
        return;
    }
    message = ''
    console.log(`\n开始【迅游加速器】`)
    await startTask()

})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function GetCookie() {


    if ($request && $request.url.indexOf("apis/v1/android/session") > -1 && $request.url.indexOf("/refresh") > -1) {

        var data = JSON.parse($response.body)
        $.log("data---------->:\n" + data)
        if (data.resultCode === 0 && data.sessionInfo) {
            $.setdata(data.sessionInfo.userId, `xyjsquserId`)
            $.log(`data.sessionInfo.userId:${data.sessionInfo.userId}`)

            $.setdata(data.sessionInfo.accessToken, `xyjsqaccessToken`)
            $.log(`data.sessionInfo.accessToken:${data.sessionInfo.accessToken}`)

            $.setdata(data.sessionInfo.refreshToken, `xyjsqrefreshToken`)
            $.log(`data.sessionInfo.refreshToken:${data.sessionInfo.refreshToken}`)

            $.setdata(data.sessionInfo.sessionId, `xyjsqsessionId`)
            $.log(`data.sessionInfo.sessionId:${data.sessionInfo.sessionId}`)

            if (data.tokenInfo) {
                $.setdata(data.tokenInfo.accelToken, `xyjsqaccelToken`)
                $.log(`data.tokenInfo.accelToken:${data.tokenInfo.accelToken}`)
            }
        } else {
        }

        // $.log($response.body)
        // $.log(`\n ${data}`)
        $.msg(`xyjsqheader: 成功🎉`, ``)
    }

}
// var sessionId = 'e1ea1914-a283-4120-b461-0566e914a976'
// var accessToken = '37db0fcf-6f0b-48c8-a370-6d9fc9cee285'
// var userId = 'bc32c018-0109-41d4-9860-431962668e22'
// var refreashToken = 'a8dc9053-1ca0-451c-bc98-140dbc7ad8f9'
// startTask();
// $.setdata('be53dde8-3c58-477e-9d61-2b0522e05453','xyjsqaccessToken')
// $.setdata('bc32c018-0109-41d4-9860-431962668e22','xyjsquserId')
// startTask();


function startTask() {

    return new Promise(async resolve => {
        let time = new Date().getTime();
        let created = getCreated(time)
        let secend = Math.floor(time / 1000)
        let nonce = getNonce(secend)
        let passwordDigest = getPasswordDigest(nonce + created)

        const sessionId = $.getdata('xyjsqsessionId');
        const accessToken = $.getdata('xyjsqaccessToken');
        const userId = $.getdata('xyjsquserId');
        const refreashToken = $.getdata('xyjsqrefreshToken');
        let tasklist_url = {
            url: `https://api.xunyou.mobi/api/v2/android/users/${userId}/tasks?client_version=5.2.10.4`,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
                'Authorization': `WSSE profile="UsernameToken"`,
                'X-WSSE': `UsernameToken Username="Game", PasswordDigest="${passwordDigest}", Nonce="${nonce}", Created="${created}"`,
                'userId': `${userId}`,
                'accessToken': `${accessToken}`,
                'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 9.1.0; HUAWEI Build/R16AA.BVCNKSU1ARC7)',
                'Host': 'api.xunyou.mobi',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip'
            }

        }
        $.get(tasklist_url, async (error, response, data) => {
            try {
                // $.log("data:"+data)
                const result = JSON.parse(data)

                for (const element of result.taskList) {

                    $.log(element.taskName + "\n")


                    if (element.completedTimes <= element.allTimes) {
                        for (var i = element.completedTimes; i <= element.allTimes; i++) {
                            if (element.checkPoints) {
                                if (element.checkPoints['6']) {
                                    await doTask(element.taskId, '6')
                                    $.log("看视频　＋2天VIP,休息" + element.checkPoints['6']/1000 + "秒")  // 每项对应数值；
                                    await $.wait(element.checkPoints['6'])
                                    break;
                                } else if (element.checkPoints['3']) {
                                    await doTask(element.taskId, '3')
                                    $.log("看视频　＋1天VIP,休息" + element.checkPoints['3']/1000 + "秒")  // 每项对应数值；
                                    await $.wait(element.checkPoints['6'])
                                }
                                // keys.map(key => {
                                // })
                            }
                        }
                    }


                };
    } catch (e) {
        $.logErr(e, response);
    } finally {
        resolve();
    }
})
    })
}
async function doTask(taskId, taskCheckValue) {
    return new Promise(async (resolve) => {
        let time = new Date().getTime();
        let created = getCreated(time)
        let secend = Math.floor(time / 1000)
        let nonce = getNonce(secend)
        let passwordDigest = getPasswordDigest(nonce + created)

        const sessionId = $.getdata('xyjsqsessionId');
        const accessToken = $.getdata('xyjsqaccessToken');
        const userId = $.getdata('xyjsquserId');
        const refreashToken = $.getdata('xyjsqrefreshToken');
        let tasklist_url = {
            url: `https://api.xunyou.mobi/api/v2/android/users/${userId}/tasks/${taskId}`,
            headers: {
                // 'Cache-Control': 'no-cache',
                // 'Content-Type': 'application/json',
                'Authorization': `WSSE profile="UsernameToken"`,
                'X-WSSE': `UsernameToken Username="Game", PasswordDigest="${passwordDigest}", Nonce="${nonce}", Created="${created}"`,
                // 'userId': `${userId}`,
                'accessToken': `${accessToken}`,
                // 'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 9.1.0; HUAWEI Build/R16AA.BVCNKSU1ARC7)',
                // 'Host': 'api.xunyou.mobi',
                // 'Connection': 'Keep-Alive',
                // 'Accept-Encoding': 'gzip'
            },
            body: {'taskCheckValue':`${taskCheckValue}`},

        }
        $.post(tasklist_url,  (error, response, data) => {
            try {
                $.log("data:"+data)
                $.log("error:"+error)
                const result = JSON.parse(data)
                if (result.resultCode === 0) {
                    if (result.taskProgress) {
                        doCoupon(result.taskProgress[0].paraList.key_couponId)
                    }
                } else {
                    $.log("错误信息：" + result.errorInfo)
                }
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
function doCoupon(key_couponId) {
    return new Promise((resolve) => {
        let time = new Date().getTime();
        let created = getCreated(time)
        let secend = Math.floor(time / 1000)
        let nonce = getNonce(secend)
        let passwordDigest = getPasswordDigest(nonce + created)

        const accessToken = $.getdata('xyjsqaccessToken');
        const userId = $.getdata('xyjsquserId');
        let tasklist_url = {
            url: `https://api.xunyou.mobi/apis/v1/android/users/${userId}/coupons/${key_couponId}?version=5.2.10.4`,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
                'Authorization': `WSSE profile="UsernameToken"`,
                'X-WSSE': `UsernameToken Username="Game", PasswordDigest="${passwordDigest}", Nonce="${nonce}", Created="${created}"`,
                'userId': `${userId}`,
                'accessToken': `${accessToken}`,
                'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 9.1.0; HUAWEI Build/R16AA.BVCNKSU1ARC7)',
                'Host': 'api.xunyou.mobi',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip'
            },
            body: {
                'userId': `${userId}`,
                'token': `${accessToken}`
            }

        }
        $.post(tasklist_url, (error, response, data) => {
            try {
                // $.log("data:"+data)
                const result = JSON.parse(data)
                if (result.resultCode === 0) {
                    $.log("兑换成功！！！！！")
                } else {
                    $.log("错误信息：" + result.errorInfo)
                }
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
function getCreated(time) {
    var date = new Date(time).Format("yyyy-MM-ddThh:mm:ssZ")
    // $.log(Math.floor(time/ 1000))
    // $.log(date)
    return date;
}
function getNonce(time) {
    var sha = sha1(`SuBao${time}`)
    return sha
}
//1624330718
function getPasswordDigest(pwd) {
    var sha = sha1(pwd + "!Peqchdka()z?")
    var b = hexToString(sha);
    return stringToBase64(b);
}


function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
    return r;
}

// 字符串加密成 hex 字符串
function sha1(s) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
        function () { return m[1] & m[2] | ~m[1] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; },
        function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; }
    ], rol = function (n, c) { return n << c | n >>> (32 - c); },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
    };
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}

async function checkin(day_index) {
    return new Promise((resolve) => {
        let tasklist_url = {
            url: `https://api-service.chanmama.com/v1/mission/continuous/attendance/checkin`,
            headers: JSON.parse(xyjsqheader),
            body: `{"day":${day_index}}`

        }
        $.post(tasklist_url, async (error, response, data) => {
            try {
                $.log("签到结果：" + data)
                const result = JSON.parse(data)
                if (result.errCode == 0) {
                } else
                    $.log(result.errMsg + "\n")
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}
async function report() {
    return new Promise((resolve) => {
        let tasklist_url = {
            url: `https://api-service.chanmama.com/v1/mission/report`,
            headers: JSON.parse(xyjsqheader),
            body: `{"sign": "a6629b36f2c94c2ba7af32d3967b59e6",
                    "extend": "",
                    "mission_type": "rank",
                    "timestamp": 1624244161}`

        }
        $.post(tasklist_url, async (error, response, data) => {
            try {
                $.log("分享结果：" + data)
                const result = JSON.parse(data)
                if (result.errCode == 0) {
                } else
                    $.log(result.errMsg + "\n")
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}

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



function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
