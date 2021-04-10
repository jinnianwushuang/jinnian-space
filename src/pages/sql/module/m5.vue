<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/module/m5.vue
 * @Description    : 
-->
<template>
    <div>
      <div>LINUX 安装 5.7 mysql </div>
      <pre>
1. 通过secureCRT工具连接Linux系统

2. 上传 mysql 的安装包

    alt + p -------> put d:/setup/mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar

3. 解压 mysql 的安装包

	mkdir mysql
    
	tar -xvf mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar -C mysql/


4. 安装客户端
    
	cd mysql/
    
	rpm -ivh mysql-community-client-5.7.27-1.el7.x86_64.rpm --force --nodeps


5. 安装服务端
    
	rpm -ivh mysql-community-server-5.7.27-1.el7.x86_64.rpm --force --nodeps


6. 修改mysql默认字符集
    
	vi /etc/my.cnf
    
	添加如下内容：
    
	[mysqld]
	character-set-server=utf8
	collation-server=utf8_general_ci
 
	-- 在文件最下方添加
    
	[client]
	default-character-set=utf8

7. 启动mysql服务
    
	service mysqld start

8. 登录mysql
    
	mysql -u root -p  敲回车，输入密码
    
	初始密码查看：cat /var/log/mysqld.log
    
	在root@localhost:   后面的就是初始密码

9. 修改mysql登录密码
    
	set global validate_password_policy=0;
    
	set global validate_password_length=1;
    
	set password=password('密码');


10. 授予远程连接权限
    
	//授权
	grant all privileges on *.* to 'root' @'%' identified by '密码';
    
	//刷新
	flush privileges;


11. 关闭Linux系统防火墙
	systemctl stop firewalld

12. 重启mysql服务
	service mysqld restart

13. 使用SQLYog工具连接mysql          
      </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>