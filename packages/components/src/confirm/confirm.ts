import EcConfirm from './confirm.vue';
import { createVNode, render } from 'vue';

// 创建一个盒子
const div: HTMLDivElement = document.createElement('div');
div.setAttribute('class', 'xtx-confirm-container');
document.body.appendChild(div);

// 函数渲染组件
export default (title: string, text: string) => {
  return new Promise<void>((resolve, reject) => {
    const submitCallback = () => {
      render(null, div);
      resolve();
    };
    const cancelCallback = () => {
      render(null, div);
      reject(new Error('点击取消'));
    };

    const vnode = createVNode(EcConfirm, {
      title,
      text,
      submitCallback,
      cancelCallback
    });
    render(vnode, div);
  });
};
