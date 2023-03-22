/**
 * @Author: Sam
 * @Date: 2021-11-04 17:50:17
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-11-04 17:50:17
 */

export const useTime = () => {
  /* eslint-disable */
  // 分，时，天，转秒
  const DATE_CONFIG = {
    m: 60,
    h: 3600,
    d: 86400,
    daysOfYeay: 365
  }

  // 毫秒转秒
  const millisecond2Second = (millisecond) => {
    return Math.round(millisecond / 1000)
  }

  // 计算时间戳之间的秒差
  const relativeSeconds = (startStamp, endStamp) => {
    if (endStamp) {
      return millisecond2Second(endStamp - startStamp)
    } else {
      const endStamp = new Date().valueOf()
      return millisecond2Second(endStamp - startStamp)
    }
  }

  // 秒转时分秒
  const seconds2Date = (seconds) => {
    const dateObj = {
      h: 0,
      m: 0,
      s: 0
    }
    if (seconds < DATE_CONFIG.m) {
      dateObj.s = seconds
      return dateObj
    } else if (seconds < DATE_CONFIG.h) {
      dateObj.m = Math.round(seconds / DATE_CONFIG.m)
      return dateObj
    } else if (seconds < DATE_CONFIG.d) {
      dateObj.h = Math.round(seconds / DATE_CONFIG.h)
      return dateObj
    }
    return dateObj
  }

  // 获取两个日期之间的相隔天数
  const relativeDays = (startStamp, endStamp) => {
    return new Date(endStamp).diff(new Date(startStamp), 'day')
  }

  // 获取两个日期之间的相隔多少年
  const relativeYears = (startStamp, endStamp) => {
    return new Date(endStamp).year() - new Date(startStamp).year()
  }

  /**
   * 人性化显示时间
   *
   * @param {number | string} date 时间（时间戳或者字符）默认是时间戳
   * @param {object} [options] 配置项(可选)
   * @param {boolean} options.isString 指定date类型：默认是false. false:数字时间戳 true: YYYY-MM-DD HH:mm:ss (ISO 8601 string)
   * @param {number} options.adjustVal 校正值。单位秒。即两时间相差{adjustVal}显示为刚刚。默认：0
   */
  const getHumanDate = (time) => {
    var dateTimeStamp = new Date(time).getTime()
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var month = day * 30;
    var year = month * 12;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    var result = ""
    if (diffValue < 0) {
      return;
    }

    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    var yearC = diffValue / year
    if (yearC >= 1) {
      return "" + parseInt(yearC) + "年前";
    }
    if (monthC >= 1) {
      result = "" + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
      result = "" + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
      result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
      result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
      result = "" + parseInt(minC) + "分钟前";
    } else {
      result = "刚刚";
    }

    return result;
  }

  return {
    getHumanDate
  }
}