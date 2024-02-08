/** @format */

import { spawn } from 'child_process';

export default async (command: string, path: string) => {
  const [cmd, ...args] = command.split(' ');

  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父进程
      shell: true
    });
    //执行完毕关闭并resolve
    app.on('close', resolve);
  });
};
