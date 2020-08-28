<template>
    <div>
        <div>  使用 Linux 服务器集群管理面板   appnode 类似的 工具 可以快速 部署 </div>
       <div>yum -y install epel-release </div>
 
        <div>yum -y install nginx </div>
        <pre>
             service  nginx  restart
              systemctl restart nginx.service

        </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>