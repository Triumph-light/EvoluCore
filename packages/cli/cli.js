/** @format */

import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { readFile } from 'fs/promises';
// 配置用户输入的选择项
import prompts from 'prompts';
// 颜色
import chalk from 'chalk';
import gitClone from './utils/gitClone.js';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

// 配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];

// 帮助命令
const helpSections = [
  {
    header: 'create-evolucore',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];

const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 1 },
      { title: 'evolucore', value: 2 }
    ]
  }
];
const options = commandLineArgs(optionDefinitions);

// 下载模板的地址
const remoteList = {
  1: 'https://gitee.com/geeksdidi/kittyui.git',
  2: 'https://github.com/Triumph-light/EvoluCore.git#main'
};

const getUserInfo = async () => {
  let res = {};
  try {
    res = await prompts(promptsOptions, {
      onCancel: () => {
        throw new Error(chalk.red('X') + 'Operation cancelled');
      }
    });
  } catch (cancelled) {
    console.log(cancelled.message);
    process.exit(1);
  }
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name, {
    clone: true
  });
};

const runOptions = () => {
  if (options.version) {
    console.log(`v${pkg.version}`);
    return;
  }
  if (options.help) {
    console.log(commandLineUsage(helpSections));
    return;
  }
  getUserInfo();
};

runOptions();
