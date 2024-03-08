import EcConfirm from './confirm.vue';
import { createVNode, render } from 'vue';

interface IConfirmProps {
  title: string;
  text: string;
  cancelButtonText: string;
  confirmButtonText: string;
  submitCallback: () => void;
  cancelCallback: () => void;
}

// 创建一个盒子
const div: HTMLDivElement = document.createElement('div');
div.setAttribute('class', 'xtx-confirm-container');
document.body.appendChild(div);

// 函数渲染组件
export const Confirm = (props: IConfirmProps) => {
  const { title, text, cancelButtonText, confirmButtonText } = props;
  return new Promise<void>((resolve, reject) => {
    const submitCallback = !props.submitCallback
      ? () => {
          render(null, div);
          resolve();
        }
      : props.submitCallback;
    const cancelCallback = !props.cancelCallback
      ? () => {
          render(null, div);
          reject(new Error('点击取消'));
        }
      : props.cancelCallback;
    console.log(submitCallback);
    console.log(cancelCallback);
    const vnode = createVNode(EcConfirm, {
      title,
      text,
      cancelButtonText,
      confirmButtonText,
      submitCallback,
      cancelCallback
    });
    render(vnode, div);
  });
};
