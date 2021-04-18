<template>
    <div>
     <pre>
         mysql 安装了最新版本8.x版本后的报错： the server requested authentication method unknown to the client
2018年07月22日 13:11:38 youcijibi 阅读数 10613
一，在MySQL 8.0.11中，caching_sha2_password是默认的身份验证插件，而不是以往的mysql_native_password。有关此更改对服务器操作的影响以及服务器与客户端和连接器的兼容性的信息，请参阅caching_sha2_password作为首选的身份验证插件。(翻译自https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html）
今天在新服务上配置安装mysql8.0.11时，像往常一样设置mysql密码，设置成功后在shell下输入mysql -u root -p，再输入密码能正常进入，但在phpmyadmin或直接用http://php.net/manual/zh/mysqli.real-connect.php上的连接，均提示无法连接，具体报错信息为
mysqli_real_connect(): The server requested authentication method unknown to the client [sha256_password]  
 
搜了一圈，找到官方文档才发现从8.0.11版本起，不再像mysql5.7及以前版本那样，设置用户密码时默认的验证方式为caching_sha2_password，如果发现升级mysql8.0.11后原有的程序不能连接mysql，可迅速在mysql command line client客户端用下面的命令设置成mysql5.7及以前版本的密码验证方式，同时MYSQL8.0.11下修改密码的方式与原先也不大一样，原先的部分修改密码的命令在mysql8.0.11下不能使用。
> use mysql  
> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';  
> FLUSH PRIVILEGES;            
二，
 
mysql 安装了最新版本8.0.11后创建用户并授权后，授权的用户连接数据库提示
The server requested authentication method unknown to the client
查阅一些相关的资料后发现是由于新版本的mysql账号密码解锁机制不一致导致的
解决办法：
删除创建的用户和授权，
找到mysql配置文件并加入
default_authentication_plugin=mysql_native_password
变为原来的验证方式，然后从新创建用户并授权即可
或
mysql -uroot -p
 
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';
三
The caching_sha2_password and sha256_password authentication plugins provide more secure 
password encryption than the mysql_native_password plugin, and caching_sha2_password provides better performance than sha256_password. 
Due to these superior security and performance characteristics of caching_sha2_password, it is as of MySQL 8.0 the preferred authentication plugin,
 and is also the default authentication plugin rather than mysql_native_password.
翻译：caching_sha2_password和sha256_password认证插件比mysql_native_password插件提供的密码加密更加安全，并且caching_sha2_password加密比sha256_password的加密性能更好。
由于caching_sha2_password这样优秀的安全和性能特性，让他作为MySQL8.0的首选认证插件，这也是默认的认证插件插件而不是mysql_native_password。
具体你可以访问这个caching_sha2_password Compatibility Issues and Solutions来了解，已经使用了新的加密方式，访问不了的解决方法，简单总结一下就是
1、将加密方式改为旧的，在配置文件my.conf中添加如下：
[mysqld]
default_authentication_plugin=mysql_native_password
2、使用支持新的加密方式的客户端（Client），比如等于或高于8.0.4版本的libmysqlclient
3、使用支持新的加密方式的连接驱动（Connector）：
MySQL Connector/C++ 1.1.11 or higher or 8.0.7 or higher.
 
MySQL Connector/J 8.0.9 or higher.
 
MySQL Connector/NET 8.0.10 or higher (through the classic MySQL protocol).
 
MySQL Connector/Node.js 8.0.9 or higher.
 
PHP: the X DevAPI PHP extension (mysql_xdevapi) supports caching_sha2_password.
4、使用了新的加密方式，改为旧的加密方式，而root用户也要进行相应的更改才可以，因为root用户还是新的加方式，所以使用alter语句改为重置密码来覆盖新的加密方式的密码：
ALTER USER 'root'@'localhost'
  IDENTIFIED WITH mysql_native_password
  BY 'password';
password是你将要设置的root用户的密码。
参考文章：Changes Affecting Upgrades to MySQL 8.0
     </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>