/** @format */

import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { readFile } from 'fs/promises';
// 配置用户输入的选择项
import prompts from 'prompts';
import gitClone from './utils/gitClone';

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
    name: 'project-name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 0 },
      { title: 'easyest', value: 1 }
    ]
  }
];
const options = commandLineArgs(optionDefinitions);

// 下载模板的地址
const remoteList = {
  1: 'https://gitee.com/geeksdidi/kittyui.git',
  2: 'https://github.com/qddidi/easyest.git'
};

const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name);
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
