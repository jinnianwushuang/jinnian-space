<!--
 * @Date           : 2021-03-31 10:27:34
 * @FilePath       : /jinnian-space/src/pages/linux/module/m14.vue
 * @Description    : 
-->
<template>
    <div>
        <div class="text-h3">Linux Web运维（Nginx）</div>
<pre>
    1、添加源

默认情况Centos7中无Nginx的源，最近发现Nginx官网提供了Centos的源地址。因此可以如下执行命令添加源：

sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

2、安装Nginx

通过yum search nginx看看是否已经添加源成功。如果成功则执行下列命令安装Nginx。

sudo yum install -y nginx

3、启动Nginx并设置开机自动运行

sudo systemctl start nginx.service
sudo systemctl enable nginx.service
 

4.建立软连接 快捷启动方式  根据实际的路径 建立
 ln -s /usr/local/nginx/sbin/nginx   /usr/local/sbin/
 
nginx 配置文件 健康检查  语法检查
nginx -t

重启服务 
service nginx restart

</pre>

    </div>
</template>

<script>
    export default {

        
    }
</script>

<style lang="scss" scoped>

</style>