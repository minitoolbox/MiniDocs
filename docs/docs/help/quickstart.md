<style>
summary {
  color: #42b983;
};
</style>

# 使用帮助

## 快速开始

### 安装迷你开发者工具箱
下载地址：  
<https://tatsuki-mengchen.lanzoub.com/b02unctwj>  
提取码：mengchen

### 为软件添加必要的权限
安卓7.1以下版本无需添加任何权限即可使用一些软件的基本功能

::: warning
安卓7.1及以上版本必须添加储存权限，否则软件将无法正常运行！
:::

#### 关于悬浮窗权限
软件后续会开发一些悬浮窗功能，大部分手机系统可在 设置-软件管理 或 手机管家-权限管理 开启软件悬浮窗权限  
不同厂商手机悬浮窗权限开启方法参考如下：
<details>
<summary>HUAWEI华为</summary>

1. 打开设置
2. 点击应用
3. 点击权限管理
4. 点击权限，选择悬浮窗
5. 找到迷你开发者工具箱并开启悬浮窗权限

</details>
<details>
<summary>XiaoMi小米</summary>

1. 打开手机管家
2. 点击应用管理区域
3. 点击权限图标
4. 选择应用管理选项
5. 点击权限管理
6. 选择显示悬浮窗选项
7. 找到迷你开发者工具箱并开启悬浮窗权限

</details>
<details>
<summary>OPPO</summary>

1. 打开手机管家
2. 点击权限隐私
3. 选择下方的悬浮窗管理的选项
4. 找到迷你开发者工具箱并开启悬浮窗权限

</details>
<details>
<summary>VIVO</summary>

1. 打开i管家
2. 点击权限管理
3. 点击权限，选择悬浮窗
4. 找到迷你开发者工具箱并开启悬浮窗权限

</details>

## 常见问题

### 检测更新失败

**如果您遇到了类似的情况，可能的原因如下：**
1. 网络未正常连接
2. 服务器关闭

**解决方案如下：** 
1. 正确连接网络后重试
2. 使用浏览器打开更新地址：<https://tatsuki-mengchen.lanzoub.com/b02unctwj>  
提取码：mengchen
***

### 提示settings.lua报错

**如果您遇到了类似的情况，可能的原因如下：**
1. 软件未获得储存权限
2. 配置文件出错

**解决方案如下：** 
1. 在设置中为软件开启储存权限
2. 删除默认储存目录下/devToolbox/config.cfg配置文件
3. 手动修复/devToolbox/config.cfg配置文件（不推荐）
***

### 无法正常使用脚本编辑器、开发者学院等WebView

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

### 网页下载的内容在哪？

因为webview的一些特殊逻辑，所以下载的内容不会直接保存到download目录下，而是保存在应用目录下

**如何找到下载的文件？**  
1. 在系统设置中的下载管理中可以直接找到下载的文件
2. 直接打开`/sdcard/AndroLua/Download/`目录即可找到下载的文件
***