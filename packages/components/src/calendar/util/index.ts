const calendarGrid = 42;

export interface CalendarItem {
  year: number;
  month: number;
  day: number;
  isCurrentMonth: boolean;
  selected?: boolean;
}

export const isAllTrue = (arr: boolean[]): boolean => {
  return arr.every((value): boolean => Boolean(value));
};

export const weeksTittle = ['一', '二', '三', '四', '五', '六', '日'];

// 判断是否为闰年
export const isLeap = (year: number): boolean => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};

// 获取当前月份又多少天
export const getMonthDays = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

// 获取上个月或者下个月有多少天
export const getLastOrNextMonthDays = (date: Date, type: 'next' | 'last') => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  if (type === 'last') {
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

// 生成日历数据
export const generateCalendarData = (date: Date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDays = getMonthDays(currentYear, currentMonth);

  const calendarTableData: CalendarItem[] = new Array(calendarGrid);
  // 获取当前月份的第一天是星期几
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // 给calendarTableData填充当前月的数据
  for (let d = 1; d <= currentDays; d++) {
    calendarTableData[firstDayOfWeek + d - 2] = {
      year: currentYear,
      month: currentMonth,
      day: d,
      isCurrentMonth: true,
      selected: false
    };
  }

  // 填充上月和下月的数据
  const {
    year: lastYear,
    month: lastMonth,
    days: lastDays
  } = getLastOrNextMonthDays(date, 'last');
  const { year: nextYear, month: nextMonth } = getLastOrNextMonthDays(
    date,
    'next'
  );
  const trailDays = calendarGrid - firstDayOfWeek - lastDays;
  let trailDay = 0;
  for (let i = 0; i < calendarGrid; i++) {
    if (i < firstDayOfWeek - 1) {
      calendarTableData[i] = {
        year: lastYear,
        month: lastMonth,
        day: lastDays - firstDayOfWeek + i,
        isCurrentMonth: false,
        selected: false
      };
    } else if (i >= currentDays) {
      if (trailDay <= trailDays) {
        trailDay++;
      }
      calendarTableData[i] = {
        year: nextYear,
        month: nextMonth,
        day: trailDay,
        isCurrentMonth: false,
        selected: false
      };
    }
  }
  console.log(calendarTableData);
  return calendarTableData;
};
