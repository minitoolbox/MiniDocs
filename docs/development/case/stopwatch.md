---
tag:
  - UI编辑器
  - 触发器
---

# UI - 秒表

## 效果演示

![效果演示](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821534)

## 大致内容

在此教程中，你将会学习到以下内容：

1.  灵活运用数值运算中的各种函数
2.  巧妙使用字符串拼接函数

秒表是日常生活中经常会使用到的一个计时工具，正常情况下，秒表一般只会计时到分钟单位，那么为何不使用UI编辑器在游戏中制作一个秒表呢？

这里先科普一下，1000毫秒 = 1秒 ，但是一般情况下毫秒位只会显示2位，所以在此教程中毫秒位将使用100这个数值为基准以方便制作

但是在迷你世界中，最小的计时单位为tick，1秒 = 20tick，即0.05秒，50毫秒，所以在此教程中，最小的计时数为0.05秒，即50毫秒（划重点）

接下来教程正式开始

## 进入教学

### 预先准备

首先需要准备如下UI

分别命名为时间、计时开关、重置

![UI准备](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821037)

创建4个变量，数值的默认值都为0，布尔值的默认值为假

![变量](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821072)

### 触发器

接下来分别制作开始计时、暂停计时、重置计时触发器

步骤较为简单，直接照抄即可

#### 开始计时

![开始计时](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821104)

#### 暂停计时

![暂停计时](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821150)

这里说一下等待0.01秒的作用，因为这2个触发器对应的是同一个按钮，由于触发器是由上往下依次运行的，所以如果不加等待时间，其中一个触发器就会失效

按钮56和按钮21分别为右箭头和暂停，如图

![按钮图标](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821185)

#### 重置计时

图中的房主为显示计时的玩家，可以自行设定

![重置计时](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821218)

#### 计时触发器

接下来就是核心触发器，计时触发器

先看总体，0.05秒即为1tick，前面有说

![计时触发器](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821254)

先看毫秒位的动作

这里说一下为什么是加5而不是加50，之前说过，1tick = 0.05秒，同时又为了让毫秒位只显示2位，所以将使用100为基准，而不是1000，所以这里是加5而不是加50

![毫秒位](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821279)

计算秒位和分位时都使用取整计算

例如当毫秒位为160时，即1.6秒，此时设置秒位为 ( 160除以100 ) 并向下取整

即160÷100=1……60并舍去余数

计算分位同理，只是改成了秒位除以60

![分位](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821309)

![时位](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821363)

最后是显示计时的动作

流程较长先看再讲

首先是秒位，其中的（ 毫秒位 Mod 100 ）是取余函数

例如当毫秒位为185时，185÷100=1……85 ，此时毫秒位就会显示85

秒位同理，只是将100改成60

![显示秒位1](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821409)

![显示秒位2](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821449)

分位就很简单粗暴了，不需要进行计算

![显示分位](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821510)

## 最终效果

完成以上操作之后，秒表就做好了

![最终效果](https://kfz-static.mini1.cn/college/dev_college_oa/1644480821534)