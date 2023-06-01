
# 常见问题

## 检测更新失败

**如果您遇到了类似的情况，可能的原因如下：**
1. 网络未正常连接
2. 服务器关闭

**解决方案如下：** 
1. 正确连接网络后重试
2. 使用浏览器打开更新地址：<https://tatsuki-mengchen.lanzoub.com/b02unctwj>  
提取码：mengchen
***

## 提示settings.lua报错

**如果您遇到了类似的情况，可能的原因如下：**
1. 软件未获得储存权限
2. 配置文件出错

**解决方案如下：** 
1. 在设置中为软件开启储存权限
2. 删除默认储存目录下/devToolbox/config.cfg配置文件
3. 手动修复/devToolbox/config.cfg配置文件（不推荐）
***

## 无法正常使用脚本编辑器、开发者学院等WebView

**如果您遇到了类似的情况，可能的原因如下：**
1. Android System WebView被手机厂商阉割
2. Android System WebView版本太低，无法正常加载网页

**解决方案如下：**  
1. 下载最新版的Android System WebView（强烈推荐）  
下载链接：<https://tatsuki-mengchen.lanzoub.com/iiP16045xs7i>  
提取码：123456  
（或者在群文件下载）  
2. 直接使用浏览器打开WebvView链接（不推荐）
***

## 网页下载的内容在哪？

因为webview的一些特殊逻辑，所以下载的内容不会直接保存到download目录下，而是保存在应用目录下

**如何找到下载的文件？**  
1. 在系统设置中的下载管理中可以直接找到下载的文件
2. 直接打开`/sdcard/AndroLua/Download/`目录即可找到下载的文件
***

## 为什么工具箱停止维护了？

迷你开发者工具箱使用AndroLua框架开发，并使用AndLua编译，但由于无法实现一些功能，APP兼容性问题以及报毒等问题，所以本人决定转向Web开发，为各位创作者带来更佳的开发体验。

***