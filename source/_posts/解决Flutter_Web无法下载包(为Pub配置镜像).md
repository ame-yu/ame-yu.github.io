---
title: 解决Flutter_Web无法下载包(为Pub配置镜像)
date: 2019-05-11 20:11:16
tags:
---
### 引入
2019 5月份
flutter 更新了flutter1.5.4
这次更新带来了preview的web
然后卡在了[Install the flutter_web build tools](https://github.com/flutter/flutter_web#install-the-flutter_web-build-tools)
<!-- more -->
CMD提示
```shell
+ webdev 2.0.4
+ webkit_inspection_protocol 0.4.0
+ yaml 2.1.15
Downloading webdev 2.0.4...
Downloading webkit_inspection_protocol 0.4.0...
Downloading shelf_static 0.2.8...
Downloading pubspec_parse 0.1.4...
Downloading crypto 2.0.6...
```
但是没速度
### 解决方案
#### 配置Pub 镜像
不得不使用Pub(Dart的包管理工具)
这里使用清华镜像

##### 具体配置指令 
因为在Windows环境直接执行下面指令，重启CMD
```shell
setx /M PUB_HOSTED_URL https://mirrors.tuna.tsinghua.edu.cn/dart-pub/
```
##### 演示结果
```shell
Downloading package_config 1.0.5...
Downloading intl 0.15.8...
Downloading mime 0.9.6+2...
Downloading source_maps 0.10.8...
Downloading quiver 2.0.3...
Downloading matcher 0.12.5...
Precompiling executables...
Precompiled webdev:bin\webdev.
Activated webdev 2.0.4.
```
### 参考链接
[清华镜像](https://mirror.tuna.tsinghua.edu.cn/help/dart-pub/)
[Dart Configuring - pubspec.yaml](https://dart.dev/tools/pub/environment-variables)