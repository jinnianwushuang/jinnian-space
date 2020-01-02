<template>
    <div>
<pre>
        Mac安装、配置Maven
2017年09月16日 21:15:52 东陆之滇 阅读数：22536
 版权声明：欢迎转载，但是请附上原文链接! https://blog.csdn.net/zixiao217/article/details/78006599
Mac下安装maven步骤如下：
下载maven， http://maven.apache.org/download.cgi 下载 


我们选择binary zip archive 的类型 。
解压maven 解压下载好的maven’，将目录丢到终端命令去获取文件路径。设置path： 
vi ~/.bash_profile 
添加maven的路径，将下载好的maven资源引入path 中：
export M2_HOME=/Users/byronyy/Documents/zixiao217/jobsoftwares/apache-maven-3.5.0
export PATH=$PATH:$M2_HOME/bin
1
2
使path设置生效 
设置path后，使用以下命令使之生效： 
source ~/.bash_profile
查看maven配置是否生效 
使用 man -v 命令查看mvn命令是否ok
 mvn -v
Apache Maven 3.5.0 (ff8f5e7444045639af65f6095c62210b5713f426; 2017-04-04T03:39:06+08:00)
Maven home: /Users/byronyy/Documents/zixiao217/jobsoftwares/apache-maven-3.5.0
Java version: 1.8.0_144, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "mac os x", version: "10.12.6", arch: "x86_64", family: "mac"
1
2
3
4
5
6
7
我们看到maven安装并设置ok了。接下来可以使用maven构建应用了。
</pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>