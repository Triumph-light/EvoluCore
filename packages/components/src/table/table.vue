<template>
  <div :class="[$style[`mzl-table-${size}`], $style[`${customClass}`]]">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th
            v-for="(x, n) in options.fileds"
            :key="n"
            :style="[headStyle, { 'text-align': x.align }]"
          >
            <slot
              :name="'head-' + x.field"
              :scope="x"
              v-if="$slot['head-' + x.field]"
            ></slot>
            <div v-else>{{ x.title }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, i) in options.datas" :key="i">
          <td
            v-for="(m, j) in options.fileds"
            :key="j"
            :style="[
              rowStyle,
              {
                width: options.fileds[j].width ? options.fileds[j].width : '',
                'text-align': options.fileds[j].align
              }
            ]"
          >
            <slot
              :name="options.fileds[j].field"
              :scope="{ rowIndex: i, cellIndex: j, row: v }"
              v-if="$slot[options.fileds[j].field]"
            ></slot>
            <div v-else>{{ options.datas[i][options.fileds[j].field] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, useSlots } from 'vue';
defineOptions({
  name: 'EcTable'
});
const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {
        fileds: [],
        datas: []
      };
    }
  },
  size: {
    type: String,
    default: 'default'
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  headStyle: {
    type: Object,
    default: () => {
      return {};
    }
  },
  rowStyle: {
    type: Object,
    default: () => {
      return {};
    }
  },
  customClass: String
});
const $slot = useSlots();
</script>

<style lang="less" module>
@import './style/index.module.less';
</style>
