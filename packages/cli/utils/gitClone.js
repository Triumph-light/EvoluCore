/** @format */

import download from 'download-git-repo';
// 颜色插件
import chalk from 'chalk';
// loading插件
import ora from 'ora';

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resovle, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('下载模板成功!'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:evolucore\r\n');
      console.log('pnpm run evolucore:dev\r\n');
      resovle();
    });
  });
};
