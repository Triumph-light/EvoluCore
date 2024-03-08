<template>
  <div :class="$style['ec-pagination']">
    <EcButton
      size="small"
      @click="changePager(myCurrentPage - 1)"
      v-if="myCurrentPage > 1"
      >{{ prevText }}</EcButton
    >
    <a v-else href="javascript:;" :class="$style['disabled']">上一页</a>
    <span v-if="pager.start > 1">...</span>
    <a
      @click="changePager(i)"
      href="javascript:;"
      v-for="i in pager.btnArr"
      :key="i"
      :class="i === myCurrentPage ? $style['active'] : ''"
      >{{ i }}</a
    >
    <span v-if="pager.end < pager.pageCount">...</span>
    <EcButton
      size="small"
      @click="changePager(myCurrentPage + 1)"
      v-if="myCurrentPage < pager.pageCount"
      >{{ nextText }}</EcButton
    >
    <a v-else href="javascript:;" :class="$style['disabled']">下一页</a>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

defineOptions({
  name: 'EcPagination'
});

const props = defineProps({
  total: {
    type: Number,
    default: 100
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: '<'
  },
  nextText: {
    type: String,
    default: '>'
  }
});

const emits = defineEmits(['update:currentPage']);
// 需要数据：
// 1. 约定按钮的个数 5 个，如果成为动态的需要设置响应式数据
const count = 5;
// 2. 当前显示的页码
const myCurrentPage = ref(1);
// 3. 总页数 = 总条数 / 每一页条数  向上取整
const myTotal = ref(100);
const myPageSize = ref(10);
// 其他数据（总页数，起始按钮，结束按钮，按钮数组）依赖上面数据得到
const pager = computed(() => {
  // 总页数
  const pageCount = Math.ceil(myTotal.value / myPageSize.value);
  // 按钮个和当前页码 ====> 起始按钮，结束按钮，按钮数组
  // 1. 理想情况下：
  const offset = Math.floor(count / 2);
  console.log(offset, myCurrentPage.value);
  let start = myCurrentPage.value - offset;
  let end = start + count - 1;
  console.log('before', start, end);
  // 2. 如果起始页码小于1需要处理
  if (start < 1) {
    start = 1;
    end = start + count - 1 > pageCount ? pageCount : start + count - 1;
  }
  // 3. 如果结束页码大于总页数需要处理
  if (end > pageCount) {
    end = pageCount;
    start = end - count + 1 < 1 ? 1 : end - count + 1;
  }
  const btnArr = [];
  console.log('after', start, end);
  for (let i = start; i <= end; i++) {
    btnArr.push(i);
  }
  // 提供计算属性数据
  return {
    pageCount,
    btnArr,
    start,
    end
  };
});

// 监听props的变化，更新组件内部数据
watch(
  props,
  () => {
    myTotal.value = props.total;
    myPageSize.value = props.pageSize;
    myCurrentPage.value = props.currentPage;
  },
  { immediate: true }
);

// 切换分页函数
const changePager = (page) => {
  // 页码相同不作为
  if (myCurrentPage.value !== page) {
    myCurrentPage.value = page;
    // 通知父组件
    emits('current-change', page);
  }
};
</script>

<style module lang="less">
@import './style/index.module.less';
</style>
