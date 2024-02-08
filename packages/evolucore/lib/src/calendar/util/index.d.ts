export interface CalendarItem {
    year: number;
    month: number;
    day: number;
    isCurrentMonth: boolean;
}
export declare const isAllTrue: (arr: boolean[]) => boolean;
export declare const weeksTittle: string[];
export declare const isLeap: (year: number) => boolean;
export declare const getMonthDays: (year: number, month: number) => number;
export declare const getLastOrNextMonthDays: (date: Date, type: 'next' | 'last') => {
    year: number;
    month: number;
    days: number;
};
export declare const generateCalendarData: (date: Date) => CalendarItem[];
