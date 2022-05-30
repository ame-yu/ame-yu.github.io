---
title: 那些鲜为人知的微软Windows工具
time: 2022-05-30
category: 资源
tag:
  - 资源
---

### 微软提供的工具
除了开源的[PowerToys](https://github.com/microsoft/PowerToys)微软实际上还提供了不少Windows的工具软件。

挑个人精选的介绍下

### ZoomIt
- 屏幕放大 Zoom
- 屏幕放大区域随光标移动 LiveZoom
- 屏幕涂鸦/文字 Draw/Type
- 会议暂停倒计时屏保 Break
![ZoomIt preview](/images/zoom-it.png)
非常推荐！

### TCPView
![TCPview preview](/images/tcp-view.png)

显示当前所有TCP连接，

<details>
        <summary>命令行tcpvcon64.exe版本输出示例</summary>

```bash
Administrator@Main MINGW64 ~/Desktop
$ tcpvcon -acn -nobanner msedge.exe
TCP,msedge.exe,9052,CLOSE_WAIT,127.0.0.1,127.0.0.1
TCP,msedge.exe,9052,ESTABLISHED,127.0.0.1,127.0.0.1
TCP,msedge.exe,9052,ESTABLISHED,192.168.2.9,185.199.111.133
TCP,msedge.exe,9052,ESTABLISHED,192.168.2.9,35.190.80.1
TCP,msedge.exe,9052,ESTABLISHED,192.168.2.9,104.26.13.87
UDP,msedge.exe,7492,*,0.0.0.0,*
UDP,msedge.exe,7492,*,0.0.0.0,*
UDP,msedge.exe,7492,*,0.0.0.0,*
UDP,msedge.exe,7492,*,0.0.0.0,*
UDPV6,msedge.exe,7492,*,[0:0:0:0:0:0:0:0],*
UDPV6,msedge.exe,7492,*,[0:0:0:0:0:0:0:0],*
UDPV6,msedge.exe,7492,*,[0:0:0:0:0:0:0:0],*
UDPV6,msedge.exe,7492,*,[0:0:0:0:0:0:0:0],*
```
</details>

<https://docs.microsoft.com/zh-cn/sysinternals/downloads/tcpview>


### AutoRuns
- 自启任务
- 自启服务
- 加载的驱动
- 计划任务

![Auto-Runs preview](/images/auto-runs.png)

用于优化开机速度非常方便。

<https://docs.microsoft.com/zh-cn/sysinternals/downloads/autoruns>

> ps. 创造几个工具的老哥[Mark Russinovich](https://en.wikipedia.org/wiki/Mark_Russinovich)已是Microsoft Azure的CTO了。

## 参考
- <https://docs.microsoft.com/sysinternals/>
- <https://superuser.com/questions/384758/how-to-kill-a-particular-tcp-connection-in-windows>
- <https://en.wikipedia.org/wiki/Mark_Russinovich>