"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const calendarGrid = 42;
const isAllTrue = (arr) => {
  return arr.every((value) => Boolean(value));
};
const weeksTittle = ["一", "二", "三", "四", "五", "六", "日"];
const getMonthDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};
const getLastOrNextMonthDays = (date, type) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  if (type === "last") {
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastYear = lastMonth === 11 ? currentYear - 1 : currentYear;
    return {
      year: lastYear,
      month: lastMonth,
      days: getMonthDays(lastYear, lastMonth)
    };
  }
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;
  return {
    year: nextYear,
    month: nextMonth,
    days: getMonthDays(nextYear, nextMonth)
  };
};
const generateCalendarData = (date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDays = getMonthDays(currentYear, currentMonth);
  const calendarTableData = new Array(calendarGrid);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  for (let d = 1; d <= currentDays; d++) {
    calendarTableData[firstDayOfWeek + d - 2] = {
      year: currentYear,
      month: currentMonth,
      day: d,
      isCurrentMonth: true
    };
  }
  const {
    year: lastYear,
    month: lastMonth,
    days: lastDays
  } = getLastOrNextMonthDays(date, "last");
  const { year: nextYear, month: nextMonth } = getLastOrNextMonthDays(
    date,
    "next"
  );
  const trailDays = calendarGrid - firstDayOfWeek - lastDays;
  let trailDay = 0;
  for (let i = 0; i < calendarGrid; i++) {
    if (i < firstDayOfWeek - 1) {
      calendarTableData[i] = {
        year: lastYear,
        month: lastMonth,
        day: lastDays - firstDayOfWeek + i,
        isCurrentMonth: false
      };
    } else if (i >= currentDays) {
      if (trailDay <= trailDays) {
        trailDay++;
      }
      calendarTableData[i] = {
        year: nextYear,
        month: nextMonth,
        day: trailDay,
        isCurrentMonth: false
      };
    }
  }
  return calendarTableData;
};
exports.generateCalendarData = generateCalendarData;
exports.getLastOrNextMonthDays = getLastOrNextMonthDays;
exports.getMonthDays = getMonthDays;
exports.isAllTrue = isAllTrue;
exports.weeksTittle = weeksTittle;
