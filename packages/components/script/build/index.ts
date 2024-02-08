/** @format */
import path from 'path';
import delPath from '../utils/delpath';
import run from '../utils/run';
import { pkgPath, componentPath } from '../utils/paths';
import { series, parallel } from 'gulp';
import { src, dest } from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import fs from 'fs';

// 删除evolucore
export const removeDist = () => {
  return delPath(`${pkgPath}/evolucore`);
};
// 打包样式
// export const buildStyle = () => {
//   return src(`${componentPath}/src/**/style/**.less`)
//     .pipe(less())
//     .pipe(autoprefixer())
//     .pipe(dest(`${pkgPath}/evolucore/lib/src`))
//     .pipe(dest(`${pkgPath}/evolucore/es/src`));
// };
// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export const buildPackageJson = async () => {
  // 发布的package.json的文件模板路径
  const packageJsonPath = path.resolve(__dirname, './package.json');
  const targetFilePath = `${pkgPath}/evolucore/package.json`;
  try {
    const packageJsonData = await fs.readFileSync(packageJsonPath, 'utf-8');
    await fs.writeFileSync(targetFilePath, packageJsonData);
  } catch (e) {
    console.error('文件复制过程中出现错误:', e);
  }
};

export default series(
  async () => removeDist(),
  parallel(
    // async () => buildStyle(),
    async () => buildComponent(),
    async () => buildPackageJson()
  )
);
