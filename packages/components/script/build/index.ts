/** @format */

import delPath from '../utils/delpath';
import run from '../utils/run';
import { pkgPath, componentPath } from '../utils/paths';
import { series, parallel } from 'gulp';
import { src, dest } from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

// 删除evolucore
export const removeDist = () => {
  return delPath(`${pkgPath}/evolucore`);
};
// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/evolucore/lib/src`))
    .pipe(dest(`${pkgPath}/evolucore/es/src`));
};
// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
