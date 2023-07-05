module.exports = {
  webpackBarName: 'vue-admin-better',
  webpackBanner:
    ' build: vue-admin-better \n vue-admin-beautiful.com \n https://gitee.com/chu1204505056/vue-admin-better \n time: ',
  donationConsole() {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用vue-admin-better，github开源地址：https://github.com/chuzhixin/vue-admin-better`
      )
    )
    console.log(
      chalk.green(
        `> 欢迎使用vue-admin-better，码云开源地址：https://gitee.com/chu1204505056/vue-admin-better`
      )
    )

    console.log(
      chalk.green(`> pro版演示地址：http://vue-admin-beautiful.com/admin-pro`)
    )

    console.log(
      chalk.green(`> plus版演示地址：http://vue-admin-beautiful.com/admin-plus`)
    )

    console.log(chalk.green(`> 如果您不希望显示以上信息，可在config中配置关闭`))
    console.log('\n')
  },
}
