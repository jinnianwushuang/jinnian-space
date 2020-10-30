<template>
    <div>
        <div>
             <p>

打开终端：ctrl+alt+t<br>
清屏：ctrl+l<br>
在终端在退出锁定：ctrl+c<br>
<br>
<br>
目录：又称为文件夹，是包含所有的文件<br>
目录创建规则：<br>
1、大小是256<br>
2、不能包含特殊字符<br>
3、见名知义 <br>
路径：是反应目录和文件的位置<br>
[绝对位置]文件位置：windows：盘符：\文件夹\文件.avi<br>
	 linux: /home/主文件夹/0520/day01/a<br>
	<br>
[相对位置]当前目录所在位置为 0520 ./day01/a <br>
		day03 ../day01/a<br>
<br>
	.\c...\01jibi\biji.txt<br>
	..\c...\01biji\biji.txt<br>
<br>
<br>
文件：在计算机中一切皆文件 <br>
在windows中区分文件可以通过扩展名来区分 .exe .txt .ppt<br>
在Linux中文件没有扩展名 可以通过颜色区分 也可以通过命令来区分 file 文件名<br>
<br>
在Linux中文件分为：<br>
普通文件<br>
目录文件<br>
设备文件   字符设备文件 块设备文件<br>
管道文件<br>
链接文件<br>
<br>
文件权限：<br>
读【r】read<br>
写【w】write<br>
执行【x】execute<br>
<br>
d rwx rwx rwx 分为三组<br>
d 目录 成为文件类型<br>
第一组：文件的所属用户<br>
第二组：文件的所属组<br>
第三组：其他用户<br>
<br>
Linux命令：<br>
格式 ：命令 选项  参数 <br>
<br>
帮助：<br>
命令 --help<br>
man 命令<br>
<br>
快捷键：<br>
tab 智能补全   如果没有重复的选项 自动补全 如果有重复项 按两下tab 显示列表<br>
↑ ↓ 历史记录 查看之前敲过的命令 关闭后还会提示 但是同时打开两个终端 相互不会提示<br>
<br>
常用命令：<br>
ls 【查看文件】<br>
格式：<br>
ls -a 查看所有文件包含隐藏文件<br>
ls -l 以列表形式查看文件，不包含隐藏文件<br>
ls -lh 以列表形式查看文件，不包含隐藏文件 ，按照1024倍数显示{KB MB GB}<br>
ls -all以列表形式查看文件，包含隐藏文件 快捷方式【ll】<br>
<br>
通配符：<br>
【*】 匹配任意多个字符【0-256】  a*  一个以上字符 256一下 <br>
【?】 匹配任意一个字符  a？ 两个字符<br>
【[a-z]】 区间法 匹配a到z的所有字符 只能确定一个字符<br>
【[abcde]】 穷举法 权值法 匹配abcde的所有字符 只能确定一个字符<br>
<br>
<br>
切换工作目录：<br>
cd 【切换工作目录】cd 目录<br>
格式：<br>
cd 切换到用户主目录<br>
cd ~ 切换到当前用户的主目录<br>
cd .. 切换到上级目录 <br>
cd .  切换到当前目录<br>
cd -  切换到上一次目录<br>
<br>
<br>
创建目录：<br>
mkdir 目录名 -p 递归创建<br>
rmdir 目录名  目录一定是空的<br>
rm 文件  -i询问 -r 递归传出<br>
<br>
<br>
链接：<br>
格式：<br>
ln 源文件 链接文件 硬链接<br>
ln -s 源文件 链接文件 软连接<br>
硬链接文件占磁盘空间 但是删除源文件不会影响硬链接文件<br>
软链接文件不占磁盘空间 但是删除源文件会影响软链接文件<br>
<br>
硬链接和拷贝（复制）区别 无论你修改了哪一个链接之后的文件 两个文件都会改变 保持一致  但是拷贝不会<br>
1、改变软链接文件就是相当于间接的改变了源文件<br>
2、查看文件时默认链接数为1 如果有链接一次递增<br>
3、如果创建的软链接文件和源文件在不同的目录下，需要使用绝对路径<br>
<br>
<br>
文本搜索：<br>
grep  '搜索内容' 文件名<br>
-n 显示行号<br>
-v 反选<br>
-i 忽略大小写<br>
<br>
通配符：<br>
【^a】以a为起始的字符搜索文件<br>
【a$】以a为结尾的字符搜索文件<br>
【.】 配匹任意一个非换行的字符<br>
【*】匹配任意字符（大于0的整数）<br>
<br>
文件搜索：<br>
find 目录 参数 文件名（可以使用通配符）<br>
-name 文件名<br>
-size 大小<br>
-perm rwx<br>
<br>
<br>
归档：<br>
tar -cvf 归档文件名.tar 文件1 文件2  目录1 目录2<br>
解归档：<br>
tar -xvf 归档文件名.tar  -C 路径<br>
 <br>
压缩：<br>
gzip 归档文件名.tar  生成了一个文件 归档文件名.tar.gz 文件大小小于归档文件大小 归档文件名.tar不存在了<br>
解压缩：<br>
gzip -d 归档文件名.tar.gz 生成了一个文件 归档文件名.tar<br>
<br>
<br>
一步归档压缩：<br>
tar -czvf 文件名.tar.gz 文件1 文件2 目录1 目录2<br>
<br>
一步解归档压缩：<br>
tar -xzvf 文件名.tar.gz -C 路径<br>
<br>
bzip2压缩：<br>
tar -cjvf 文件名.tar.bz2 文件1 文件2 目录1 目录2<br>
bzip2解压缩：<br>
tar -xjvf 文件名.tar.bz2 -C 路径<br>
<br>
zip压缩：<br>
zip 文件名 文件1 文件2 目录1 目录2  生成一个文件为：文件名.zip<br>
unzip解压缩：<br>
unzip 文件名.zip -C 路径<br>
<br>

</p>
        </div>
      <div> 
          <img src="linux/01_Linux介绍和基本操作.pngv" alt="" srcset="">
           </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>