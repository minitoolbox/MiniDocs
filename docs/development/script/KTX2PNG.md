---
tag:
  - 脚本
  - 文件
---

# KTX转PNG

迷你世界中有大量材质是以`ktx`格式储存的，如果需要方便读取的话，就需要将`ktx`转换为`png`、`jpg`等图片格式

## 操作步骤

`PVRTexTool`是一款能够预览、编辑、转换格式等操作的软件，可在官网[PVRTexTool - Imagination Developers](https://developer.imaginationtech.com/pvrtextool/)下载

安装后打开软件GUI界面，默认路径如下`./Imagination/PowerVR/GraphicsSDK/PVRTexTool/GUI/Windows_x86_64/PVRTexToolGUI.exe`

软件界面如下：
![image.png](https://s2.loli.net/2023/06/02/5BaQG4whHNDYtdf.png)

将`KTX`文件拖入到软件即可查看
![image.png](https://s2.loli.net/2023/06/02/zVmM5bgdwx8S9Ty.png)

点击软件左上角的`File`菜单，选择`Save Image`即可将`ktx`文件转换为`png`、`jpg`等图片格式
![image.png](https://s2.loli.net/2023/06/02/1oCJSuxD4XzHdF7.png)

::: warning
迷你世界安装包内的大部分素材文件都被加密过，操作之前请先将文件解密  
解密教程详见[游戏素材文件解密](/development/script/ResDec.md)
:::

## 批量转换

先在需要转换的文件目录下新建一个`bat`批处理文件，并将以下代码复制到文件中  
**第二行的路径请自行修改！**
```sh
@echo off
path %path%;"D:\Imagination\PowerVR\GraphicsSDK\PVRTexTool\CLI\Windows_x86_64"
for /f "usebackq tokens=*" %%d in (`dir /s /b *.ktx`) do (
    PVRTexToolCLI.exe -f PVRTC1_4 -i "%%d" -d "%%~dpnd.png"
    del "%%~dpnd.pvr"
)
```
之后保存运行批处理文件并等待运行完毕即可