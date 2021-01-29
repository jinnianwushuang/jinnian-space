<template>
    <div>
<pre>

---查看端口占用
netstat -ap | grep 8000

---重启nginx
sudo /usr/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
sudo nginx -s reload
Sudo service nginx restart
ps -ef | grep nginx
</pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>