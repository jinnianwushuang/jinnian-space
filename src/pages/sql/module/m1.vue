<template>
    <div>
      <pre>
          添加系统变量
C:\Program Files\MySQL\MySQL Server 8.0\bin

net start mysql

mysql restart



　一、启动方式
　　1、使用 service 启动：service mysqld start
　　2、使用 mysqld 脚本启动：/etc/inint.d/mysqld start
　　3、使用 safe_mysqld 启动：safe_mysqld&
　　二、停止
　　1、使用 service 启动：service mysqld stop
　　2、使用 mysqld 脚本启动：/etc/inint.d/mysqld stop
　　3、mysqladmin shutdown
　　三、重启
　　1、使用 service 启动：service mysqld restart
　　2、使用 mysqld 脚本启动：/etc/inint.d/mysqld restart
      </pre>
      <hr>
      <pre>
mysql  my.ini

          [mysql]
default-character-set=utf8

[mysqld]
port = 3306
default_authentication_plugin=mysql_native_password
basedir="C:/Program Files/MySQL/MySQL Server 8.0/"
datadir="C:/Program Files/MySQL/MySQL Server 8.0/data/"
character-set-server = utf8
default-storage-engine = MyISAM
      </pre>
<hr>
      <pre>
          mysql  my.ini

          [client]
#password=your_password
port=3306
socket=/tmp/mysql.sock

[mysqld]
port=3306
socket=/tmp/mysql.sock
key_buffer_size=256M
max_allowed_packet=512M
table_open_cache=256
sort_buffer_size=1M
read_buffer_size=1M
read_rnd_buffer_size=4M
myisam_sort_buffer_size=64M
thread_cache_size=8

secure-file-priv=""
explicit_defaults_for_timestamp=1
datadir= "C:/laragon/data/mysql"


[mysqldump]
quick
max_allowed_packet=512M

      </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>