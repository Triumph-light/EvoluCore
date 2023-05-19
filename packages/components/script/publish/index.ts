/** @format */

import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
// 自动发布
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/evolucore`);
};

export default series(async () => publishComponent());
