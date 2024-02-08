<template>
  <div ::class="$style['calendar']">
    <!-- 表头操作  -->
    <div :class="$style['calendar-operate']">
      <!-- 左侧日切切换按钮组  -->
      <div :class="$style['button-group']">
        <button :class="$style['button']" @click="changeMonth('prev')">
          <i :class="$style['icon']">&lt;</i>
        </button>
        <button :class="$style['button']" @click="changeMonth('next')">
          <i :class="$style['icon']">&gt;</i>
        </button>
      </div>
      <!-- 中间显示当前年月 -->
      <div :class="$style['calendar-operate_title']">{{ dateText }}</div>
      <!-- 切换今天按钮  -->
      <button
        :class="$style['button']"
        :disabled="isToday"
        @click="currentDate"
      >
        今天
      </button>
    </div>
    <!-- for循环渲染星期数， 周末弱化显示 -->
    <div :class="$style['calendar-header']">
      <span
        v-for="(item, index) in weeksTittle"
        :key="index"
        :class="[
          $style['calendar-header__item'],
          index === 0 || index === 6 ? $style['weak'] : ''
        ]"
        >{{ item }}</span
      >
    </div>
    <!-- 日期表显示 -->
    <div :class="$style['calendar-content']" :data-month="date.getMonth() + 1">
      <div
        v-for="(item, index) in calendarTableData"
        :key="index"
        :class="[
          !item.isCurrentMonth ? $style['light'] : '',
          isActive(item) ? $style['active'] : '',
          $style['calendar-content__item'],
          item.selected ? $style['selected'] : ''
        ]"
        @click="selectDate(item, index)"
      >
        {{ item.day }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue';
import {
  CalendarItem,
  generateCalendarData,
  isAllTrue,
  weeksTittle
} from './util/index';

defineOptions({
  name: 'EcCalendar'
});

let date = ref(new Date());
let calendarTableData = ref<CalendarItem[]>([]);

const dateText = computed(() => {
  return `${date.value.getFullYear()}/${date.value.getMonth() + 1}`;
});

const changeMonth = (type: 'prev' | 'next') => {
  let month = 0;
  let year = 1970;

  if (type === 'next') {
    month = date.value.getMonth() === 11 ? 0 : date.value.getMonth() + 1;
    year =
      month === 11 ? date.value.getFullYear() + 1 : date.value.getFullYear();
  } else {
    month = date.value.getMonth() === 0 ? 11 : date.value.getMonth() - 1;
    year =
      month === 0 ? date.value.getFullYear() - 1 : date.value.getFullYear();
  }

  date.value.setDate(1);
  date.value.setMonth(month);
  date.value.setFullYear(year);

  date.value = new Date(date.value);
};

watch(
  date,
  (newDate) => {
    calendarTableData.value = generateCalendarData(newDate);
  },
  {
    immediate: true
  }
);

const isActive = (item: CalendarItem) => {
  const date = new Date();
  return isAllTrue([
    item.day === date.getDate(),
    item.isCurrentMonth,
    item.month === new Date().getMonth(),
    item.year === new Date().getFullYear()
  ]);
};

const isToday = computed(() => {
  const currentDate = new Date();
  return isAllTrue([
    currentDate.getDate() === date.value.getDate(),
    currentDate.getMonth() === date.value.getMonth(),
    currentDate.getFullYear() === date.value.getFullYear()
  ]);
});

const currentDate = () => {
  date.value = new Date();
};

const selectDate = (item: CalendarItem, index: number) => {
  if (!item.selected) {
    calendarTableData.value[index].selected = true;
    return;
  }
  calendarTableData.value[index].selected = false;
};
</script>

<style lang="less" module>
@import './style/index.module.less';
</style>
