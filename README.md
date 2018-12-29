# Demo-WeChatMiniProgram-Cloud

#### 项目介绍
简易店铺介绍小程序，微信小程序“云开发”，无需搭建服务器,即可使用云端能力，使用美团mpvue构建。

- [x] 基础功能：使用**微信小程序框架mpvue、UI框架vant-weapp**构建
- [x] 基础功能：常见导航切换，页面跳转，电话拨打，图片放大功能
- [x] 基础功能：云开发数据库查询数据及分页，vuex数据共享

![Alt text](https://raw.githubusercontent.com/hilanmiao/Demo-WeChatMiniProgram-Cloud/master/Screen/screen1.png)
![Alt text](https://raw.githubusercontent.com/hilanmiao/Demo-WeChatMiniProgram-Cloud/master/Screen/screen2.jpg)

#### 软件架构
    "mpvue": "^1.0.11",
    "vuex": "^3.0.1",
    "vant-weapp": ""

#### 安装教程

``` bash
cd bianer
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
由于安装了vant-weapp，请记得打开微信开发者工具中的 ES6 转 ES5 功能，并配置 eslintignore，忽略 vant 目录检查

#### 使用说明

扫描小程序二维码即可体验。

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request