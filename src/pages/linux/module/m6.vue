<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m6.vue
 * @Description    : 
-->

<template>
  <div class="q-py-md">
    <div> <a href="http://rpm.pbone.net" target="_blank" rel="noopener noreferrer">a. 去官网去下载（http://rpm.pbone.net）；</a> </div>
    <div>### MobaXterm 官网： <a href="https://mobaxterm.mobatek.net/" target="_blank" rel="noopener noreferrer">https://mobaxterm.mobatek.net/</a> </div>
    <div>
      yum 阿里云镜像 源
      <a
        href="https://developer.aliyun.com/mirror/"
        target="_blank"
        rel="noopener noreferrer"
        >https://developer.aliyun.com/mirror/</a
      >
    </div>
 
    <div> <a href="https://gitee.com/Discuz/DiscuzX" target="_blank" rel="noopener noreferrer"> LAMP --- DiscuzX 开源论坛系统</a> </div>

    <div>奇Q工具网 <a href="https://qqe2.com/" target="_blank" rel="noopener noreferrer">https://qqe2.com/</a> </div>
    <pre>
      nodejs  环境安装 
      cd /usr/local/src/

      官网 找到 linux 包 https://nodejs.org/download/release
       https://nodejs.org/download/release/v12.20.0/node-v12.20.0-linux-x64.tar.xz
       
Linux 上安装 Node.js
wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz    // 下载
tar xf node-v12.18.1-linux-x64.tar.xz                                   // 解压
cd node-v12.18.1-linux-x64                                              // 进入解压目录
解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以修改linux系统的环境变量（profile）来设置直接运行命令：

老规矩先备份，养成修改重要文件之前先备份的好习惯。

cp /etc/profile /etc/profile.bak
然后 vim /etc/profile，在最下面添加 export PATH=$PATH: 后面跟上 node 下 bin 目录的路径

export PATH=$PATH:/root/node-v12.18.1-linux-x64/bin
立即生效

source /etc/profile
[root@localhost ~]# node -v
v12.18.1
OK！安装成功！
   
使用 Linux 服务器集群管理面板 appnode 类似的 工具 可以快速 部署
yum -y install epel-release
yum -y install nginx
         service  nginx  restart
          systemctl restart nginx.service
   
    </pre>

    <pre>
杀死某个用户的 所有进程  kill -9 $(ps -ef | grep username)    或者   killall -u username  

</pre
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
