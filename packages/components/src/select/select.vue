<template>
  <div :class="$style['ec-select-container']" v-clickOutside>
    <input
      type="text"
      readonly
      :value="selectedVal"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="disabled ? $style['disabled'] : ''"
    />
    <span
      :class="[
        $style['select-right-arrow'],
        optionsShow ? $style['rotate'] : ''
      ]"
    >
      >
    </span>
    <Transition name="slide-fade">
      <div :class="$style['ec-select-options']" v-if="optionsShow">
        <li
          v-for="(item, index) in options"
          :key="index"
          :class="[
            $style['ec-select-option'],
            item.disabled ? $style['ec-select-option-disabled'] : '',
            activeIndex === index ? $style['ec-select-option-active'] : ''
          ]"
          @click="select(item, index)"
        >
          {{ item[filedLabel] }}
        </li>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
  name: 'EcSelect'
});

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  filedLabel: {
    type: String,
    default: 'label'
  },
  filedValue: {
    type: String,
    default: 'value'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['select', 'update:modelValue']);
const activeIndex = ref(-1);
const selectedVal = ref('');
props.options.forEach((item, index) => {
  if (props.modelValue && item[props.filedValue] === props.modelValue) {
    selectedVal.value = item[props.filedLabel];
    activeIndex.value = index;
  }
});

const optionsShow = ref(false);
const vClickOutside = {
  beforeMount(el) {
    const handler = (e) => {
      if (
        el.contains(e.target) &&
        e.target.className.indexOf('ec-select-option') === -1
      ) {
        optionsShow.value = true;
      } else {
        if (e.target.className.indexOf('ec-select-option-disabled') === -1) {
          optionsShow.value = false;
        }
      }
    };
    if (!props.disabled) {
      document.addEventListener('click', handler);
    }
  }
};

const select = (item, index) => {
  if (!item.disabled) {
    selectedVal.value = item[props.filedLabel];
    optionsShow.value = false;
    activeIndex.value = index;
    emits('update:modelValue', item[props.filedValue]);
    emits('select', item[props.filedValue]);
  }
};
</script>
<style module lang="less">
@import './style/index.module.less';
</style>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
