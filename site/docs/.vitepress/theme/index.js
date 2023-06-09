/** @format */

import DefaultTheme from 'vitepress/theme'
import evolucore from 'evolucore'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(evolucore)
  }
}
