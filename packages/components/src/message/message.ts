import EcMessage from './message.vue';
import { createVNode, render } from 'vue';

interface IMessageProps {
  message: string;
  type: string;
  duration: number;
  showClose: boolean;
  offset: number;
  center: boolean;
}

const div: HTMLDivElement = document.createElement('div');
div.setAttribute('class', 'ec-message');
document.body.appendChild(div);

let timer: NodeJS.Timeout;
const messageProps: IMessageProps = {
  message: '',
  type: '',
  duration: 1000,
  showClose: false,
  offset: 20,
  center: false
};

export const Message = (props: IMessageProps) => {
  const innerProps = { ...messageProps, ...props };
  const vnode = createVNode(EcMessage, {
    ...innerProps
  });
  render(vnode, div);
  if (innerProps.duration > 0) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 定时删除
      render(null, div);
    }, innerProps.duration);
  }
};
