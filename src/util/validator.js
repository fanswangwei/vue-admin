const regEmail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  regPhone = /^0?1[0-9]{1,10}$/;

export function checkNumber(rule, value, callback) {
  if (value != "") {
    if ((/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value) == false) {
      callback(new Error("请输入大于0的数字"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

export function checkWebsite(rule, value, callback) {
  if (!value) {
    return callback(new Error("请输入网站地址"));
  } else if (!/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(value)) {
    callback(new Error("请输入合法的网站地址"));
  } else {
    callback();
  }
}

export function checkEmail(rule, value, callback) {
  if (value === "") {
    callback();
  } else if (!regEmail.test(value)) {
    callback(new Error("请输入一个合法的邮箱"));
  } else {
    callback();
  }
}

export function checkPhone(rule, value, callback) {
  if (value === "") {
    callback();
  } else if (!regPhone.test(value)) {
    callback(new Error("请输入一个有效的手机号码"));
  } else {
    callback();
  }
}

export function checkName(rule, value, callback) {
  if (!value) {
    callback(new Error("请输入姓名"));
  } else if (!/^[\u4e00-\u9fa5\w]{1,30}$/.test(value)) {
    callback(new Error("最多30个字符，支持中英文和下划线"));
  } else {
    callback();
  }
}