/** 
 * Created by Wangwei on 2020/2/7. 
 * 创建文件夹帮助类 
 */  

var fs = require("fs");  
var path = require("path");  

// 递归创建目录 异步方法  
function mkdirs(dirname, callback) {  
    fs.exists(dirname, function (exists) {  
        if (exists) {  
            callback();  
        } else {  
            //console.log(path.dirname(dirname));  
            mkdirs(path.dirname(dirname), function () {  
                fs.mkdir(dirname, callback);  
            });  
        }  
    });  
}  

// 递归创建目录 同步方法  
function mkdirsSync(dirname) {  
    //console.log(dirname);  
    if (fs.existsSync(dirname)) {  
        return true;  
    } else {  
        if (mkdirsSync(path.dirname(dirname))) {  
            fs.mkdirSync(dirname);  
            return true;  
        }  
    }  
}  

// 格式化日期创建文件夹
function formatDir() {
    var NowDate = new Date()
    var Y = NowDate.getFullYear(), // 年
        M = NowDate.getMonth() + 1 < 10 ? '0' + (NowDate.getMonth() + 1) : (NowDate.getMonth() + 1), // 月份
        D = NowDate.getDate() < 10 ? '0' + NowDate.getDate() : NowDate.getDate(), // 日
        H = NowDate.getHours() < 10 ? '0' + NowDate.getHours() : NowDate.getHours(), // 小时
		m = NowDate.getMinutes() < 10 ? '0' + NowDate.getMinutes() : NowDate.getMinutes(); // 分
		// console.log(Y + '' + M + '' + D + '_' + H+ '' + m);
	return Y + '' + M + '' + D + '_' + H+ '' + m
}
function logs(ctx, message = ""){
    console.log(`${ctx.req.url} ${ctx.req.method}: ${message}`);
}

module.exports.mkdirs = mkdirs;  
module.exports.mkdirsSync= mkdirsSync;  
module.exports.formatDir= formatDir;  
module.exports.logs= logs;  