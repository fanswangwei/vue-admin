function getWeeksWithYearAndMonth(date) {
  // 获取传入日期的年和月
  let years = new Date(date).getFullYear();
  let nowMonth = new Date(date).getMonth() + 1;
  // 现将星期数组重制一次
  let weeks = [];
  // new Date() 获取的月份从0开始，比正常月份小1
  let newMonth = parseInt(nowMonth) - 1;
  // 获取每个月的第一天
  let monthFirstDay = new Date(years, newMonth, 1);
  // console.log(formateDate(monthFirstDay, 'yyyy-MM-dd'));
  // 第一天是星期几(周一～周日[1,2,3,4,5,6,0])
  let firstDay = new Date(monthFirstDay).getDay();
  // 获取本月总共多少天
  let monthLastDay = new Date(years, nowMonth, 0); // 表示该月的前一天
  let days = monthLastDay.getDate(); //获取每个月有多少天
  // 获取第一个星期一
  let firstMonday = "";
  // 从第一个星期一开始到月底有多少天
  let fullWeekDays = "";
  // 如果第一天是周一
  if (firstDay - 1 === 0) {
    // 每个月1日刚好是周一
    firstMonday = firstDay;
    fullWeekDays = days;
  } else if (firstDay === 0) {
    // 每个月1日是周日，获取的firstDay为0，2日为周一，
    // 第一个周一为2日，firstDay + 2 || 周日----2日
    firstMonday = firstDay + 2; // 计算当月第一个星期一是几日
    fullWeekDays = days - (firstDay + 1); // 计算当月减去第一个不完整的星期天，剩余的天数
  } else {
    // 若每月1日为周二到周六，计算['2 == 7','3 == 6','4 == 5','5 == 4','6 == 3']
    // 周二----7日 || 周三----6日 || 四----5日 || 五----4日 || 六----3日
    firstMonday = 7 - (firstDay - 2); //计算当月第一个星期一是几日
    fullWeekDays = days - (7 - firstDay + 1); //计算当月减去第一个不完整的星期天，剩余的天数
  }
  let weeksCount = Math.floor(fullWeekDays / 7); //计算当月有几个完整的星期天
  let weekth = "";
  for (let i = 0; i < weeksCount; i++) {
    weekth = i + 1;
    let week = {};
    let thisMondayDate = firstMonday + 7 * i;
    let thisSundayDate = firstMonday + 7 * i + 7 - 1;
    // 处理日期显示格式
    nowMonth = parseFloat(nowMonth) < 10 ? '0' + parseFloat(nowMonth) : parseFloat(nowMonth);
    thisMondayDate = parseFloat(thisMondayDate) < 10 ? '0' + parseFloat(thisMondayDate) : parseFloat(thisMondayDate);
    thisSundayDate = parseFloat(thisSundayDate) < 10 ? '0' + parseFloat(thisSundayDate) : parseFloat(thisSundayDate);
    week.label = '第' + (getWeekNumber(years + '-' + nowMonth + "-" + thisMondayDate)) + '周(' + nowMonth + "." + thisMondayDate + '-' + nowMonth + "." + thisSundayDate + ')';
    week.value =  years + '/' + nowMonth + "/" + thisMondayDate + '-' + years + '/' + nowMonth + "/" + thisSundayDate;
    weeks.push(week);
  }
  // 如果月初一周不完整
  if (firstDay !== 1) {
    //如果一个月的第一周不完整，则获取上一个月
    // 获取每个月的第一天
    // console.log(firstDay);
    let prevMonthDays = new Date(years, newMonth, 0).getDate();
    // console.log(prevMonthDays);
    let week = {};
    let pervMonth = "";
    if (parseInt(nowMonth) === 1) {
      //如果当前月份为1月，则上一个月为上一年的12月
      pervMonth = 12;
    } else {
      pervMonth = nowMonth - 1;
    }
    let prevWeekSunday = '';
    let prevWeekMonday = '';
    if (firstDay === 0) {
      prevWeekMonday = prevMonthDays - (7 - firstDay) + 2;
      prevWeekSunday = 1;
    } else {
      prevWeekMonday = prevMonthDays - firstDay + 2;
      prevWeekSunday = 7 - (firstDay - 1);
    }
    // console.log(prevWeekMonday);
    // 处理日期显示格式
    pervMonth = parseFloat(pervMonth) < 10 ? '0' + parseFloat(pervMonth) : parseFloat(pervMonth);
    nowMonth = parseFloat(nowMonth) < 10 ? '0' + parseFloat(nowMonth) : parseFloat(nowMonth);
    prevWeekMonday = parseFloat(prevWeekMonday) < 10 ? '0' + parseFloat(prevWeekMonday) : parseFloat(prevWeekMonday);
    prevWeekSunday = parseFloat(prevWeekSunday) < 10 ? '0' + parseFloat(prevWeekSunday) : parseFloat(prevWeekSunday);
    // console.log('第'+'xx'+'周('+ pervMonth +"."+ prevWeekMonday +'-'+ nowMonth +"."+ prevWeekSunday +')')
    week.label = '第' + (getWeekNumber(years + '-' + pervMonth + "-" + prevWeekMonday)) + '周(' + pervMonth + "." + prevWeekMonday + '-' + nowMonth + "." + prevWeekSunday + ')';
    if(parseFloat(nowMonth) === 1){
      week.value = (years - 1) + '/' + pervMonth + "/" + prevWeekMonday + '-' + years + '/' + nowMonth + "/" + prevWeekSunday;
    }else if(parseFloat(nowMonth) === 12){
      week.value =  years + '/' + pervMonth + "/" + prevWeekMonday + '-' + (years + 1) + '/' + nowMonth + "/" + prevWeekSunday;
    }else{
      week.value = years + '/' + pervMonth + "/" + prevWeekMonday + '-' + years + '/' + nowMonth + "/" + prevWeekSunday;
    }
    weeks.unshift(week);
  }
  // 如果月底一周不完整
  // 计算当月最后一个不完整的星期天有几天
  let overDays = fullWeekDays % 7;
  if (overDays > 0) {
    //如果一个月的最后一个不完整的星期天天数大于零，则顺延到下一个月
    let week = {};
    let nextMonth = "";
    if (parseInt(nowMonth) === 12) {
      //如果当前月份为12月，则下一个月为1月
      nextMonth = "01"; //下一年的1月
    } else {
      nextMonth = parseInt(nowMonth) + 1; //下一个月
    }

    let thisMondayDate = firstMonday + 7 * weeksCount;
    let lastWeekCount = 7 - overDays;
    // 处理日期显示格式
    nowMonth = parseFloat(nowMonth) < 10 ? '0' + parseFloat(nowMonth) : parseFloat(nowMonth);
    thisMondayDate = parseFloat(thisMondayDate) < 10 ? '0' + parseFloat(thisMondayDate) : parseFloat(thisMondayDate);
    nextMonth = parseFloat(nextMonth) < 10 ? '0' + parseFloat(nextMonth) : parseFloat(nextMonth);
    lastWeekCount = parseFloat(lastWeekCount) < 10 ? '0' + parseFloat(lastWeekCount) : parseFloat(lastWeekCount);
    week.label = '第' + (getWeekNumber(years + '-' + nowMonth + "-" + thisMondayDate)) + '周(' + nowMonth + "." + thisMondayDate + '-' + nextMonth + "." + lastWeekCount + ')';
    if(parseFloat(nowMonth) === 12){
      week.value =  years + '/' + nowMonth + "/" + thisMondayDate + '/' + (years + 1) + '/' + nextMonth + "/" + lastWeekCount;
    }else if(parseFloat(nowMonth) === 1){
      week.value = (years - 1) + '/' + nowMonth + "/" + thisMondayDate + '/' + years + '/' + nextMonth + "/" + lastWeekCount;
    }else {
      week.value =  years + '/' + nowMonth + "/" + thisMondayDate + '/' + years + '/' + nextMonth + "/" + lastWeekCount;
    }
    weeks.push(week);
  }
  console.log(weeks);
  return weeks;
};
/**
 * 获取某年的某天是第几周
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 * @returns {Number}
 */

function isLeapYear(year) {
  return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
function getMonthDays(year, month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
function getWeekNumber(date) {
  var now = new Date(date),
    year = now.getFullYear(),
    month = now.getMonth(),
    days = now.getDate();
  //那一天是那一年中的第多少天
  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i);
  }

  //那一年第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

  var week = null;
  if (yearFirstDay == 1) {
    week = Math.ceil(days / yearFirstDay);
  } else {
    days -= (7 - yearFirstDay + 1);
    week = Math.ceil(days / 7) + 1;
  }
  // console.log(week);
  return week;
}

export {
  getWeeksWithYearAndMonth
};