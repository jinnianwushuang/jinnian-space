<!--
 * @Date           : 2021-03-30 09:29:10
 * @FilePath       : /jinnian-space/src/pages/linux/module/m13.vue
 * @Description    : 
-->
<template>
    <div>
        <div class="text-h4 text-weight-bolder">CentOS7 系统目录详解和常用命令[文件和目录]</div>
<article class="baidu_pl">
        <div id="article_content" class="article_content clearfix">
      
                <div id="content_views" class="markdown_views">
                  
                    <p><strong>CentOS7系统目录</strong></p> 
<p><img src="img/linux/xmind-img/m13/20180802170418839.png" alt=""> </p>
<h2 id="linux有四种基本文件系统类型"><a name="t0"></a><a name="t0"></a>LINUX有四种基本文件系统类型</h2> 
<hr> 
<p><strong>普通文件：</strong></p> 
<p>如文本文件、C语言元代码、SHELL脚本、二进制的可执行文件等，可用cat、less、more、vi、emacs来察看内容，用mv来改名。</p> 
<p><strong>目录文件：</strong></p> 
<p>包括文件名、子目录名及其指针。它是LINUX储存文件名的唯一地方，可用ls列出目录文件。</p> 
<p><strong>连接文件：</strong></p> 
<p>是指向同一索引节点的那些目录条目。用ls来查看是，连接文件的标志用l开头，而文件面后以”-&gt;”指向所连接的文件。</p> 
<p><strong>特殊文件：</strong></p> 
<p>LINUX的一些设备如磁盘、终端、打印机等都在文件系统中表示出来，则一类文件就是特殊文件，常放在/dev目录内。例如，软驱A称为/dev/fd0。LINUX无C：的概念，而是用/dev/had来自第一硬盘。</p> 
<h2 id="centos7-系统目录结构"><a name="t1"></a><a name="t1"></a>centos7 系统目录结构</h2> 
<p><strong>/</strong></p> 
<p>这就是根目录。对你的电脑来说，有且只有一个根目录。所有的东西，我是说所有的东西都是从这里开始。举个例子：当你在终端里输入“/home”，你其实是在告诉电脑，先从/(根目录)开始，再进入到home目录。</p> 
<hr> 
<p><strong>/root</strong></p> 
<p>这是系统管理员(root user)的目录。对于系统来说，系统管理员就好比是上帝，它能对系统做任何事情，甚至包括删除你的文件。因此，请小心使用root帐号。</p> 
<hr> 
<p><strong>/bin</strong></p> 
<p>这里存放了标准的(或者说是缺省的)linux的工具，比如像“ls”、“vi”还有“more”等等。通常来说，这个目录已经包含在你的“path”系 统变量里面了。什么意思呢?就是：当你在终端里输入ls，系统就会去/bin目录下面查找是不是有ls这个程序。</p> 
<hr> 
<p><strong>/etc</strong></p> 
<p>这里主要存放了系统配置方面的文件。举个例子：你安装了samba这个套件，当你想要修改samba配置文件的时候，你会发现它们(配置文件)就在/etc/samba目录下。</p> 
<hr> 
<p><strong>/dev</strong></p> 
<p>这里主要存放与设备(包括外设)有关的文件(unix和linux系统均把设备当成文件)。想连线打印机吗?系统就是从这个目录开始工作的。另外还有一些包括磁盘驱动、USB驱动等都放在这个目录。</p> 
<hr> 
<p><strong>/home</strong></p> 
<p>这里主要存放你的个人数据。具体每个用户的设置文件，用户的桌面文件夹，还有用户的数据都放在这里。每个用户都有自己的用户目录，位置为：/home/用户名。当然，root用户除外。</p> 
<hr> 
<p><strong>/tmp</strong></p> 
<p>这是临时目录。对于某些程序来说，有些文件被用了一次两次之后，就不会再被用到，像这样的文件就放在这里。有些linux系统会定期自动对这个目录进行清理，因此，千万不要把重要的数据放在这里。</p> 
<hr> 
<p><strong>/usr</strong></p> 
<p>在这个目录下，你可以找到那些不适合放在/bin或/etc目录下的额外的工具。比如像游戏阿，一些打印工具拉等等。/usr目录包含了许多子目录： /usr/bin目录用于存放程序;/usr/share用于存放一些共享的数据，比如音乐文件或者图标等等;/usr/lib目录用于存放那些不能直接 运行的，但却是许多程序运行所必需的一些函数库文件。你的软件包管理器(应该是“新立得”吧)会自动帮你管理好/usr目录的。</p> 
<hr> 
<p><strong>/opt</strong></p> 
<p>这里主要存放那些可选的程序。你想尝试最新的firefox测试版吗?那就装到/opt目录下吧，这样，当你尝试完，想删掉firefox的时候，你就可 以直接删除它，而不影响系统其他任何设置。安装到/opt目录下的程序，它所有的数据、库文件等等都是放在同个目录下面。</p> 
<p>举个例子：刚才装的测试版firefox，就可以装到/opt/firefox_beta目录下，/opt/firefox_beta目录下面就包含了运 行firefox所需要的所有文件、库、数据等等。要删除firefox的时候，你只需删除/opt/firefox_beta目录即可，非常简单。</p> 
<hr> 
<p><strong>/usr/local</strong></p> 
<p>这里主要存放那些手动安装的软件，即不是通过“新立得”或apt-get安装的软件。它和/usr目录具有相类似的目录结构。让软件包管理器来管理/usr目录，而把自定义的脚本(scripts)放到/usr/local目录下面，我想这应该是个不错的主意。</p> 
<p><strong>/media</strong></p> 
<p>Some distros use this folder to mount things like usb disks, cd or dvd drives and other filesystems.</p> 
<p><strong>/media</strong></p> 
<p>有些linux的发行版使用这个目录来挂载那些usb接口的移动硬盘(包括U盘)、CD/DVD驱动器等等。</p> 
<p>补充： <br> /bin</p> 
<p>系统所需要的那些命令位于此目录，比如 ls、cp、mkdir等命令；功能和/usr/bin类似，这个目录中的文件都是可执行的、普通用户都可以使用的命令。作为基础系统所需要的最基础的命令就是放在这里（/usr/bin和/usr/sbin 类似与“/”根目录下对应的目录（/bin和/sbin），但不用于基本的启动（譬如，在紧急维护中）。大多数命令在这个目录下。 ）。</p> 
<p>/boot Linux的内核及引导系统程序所需要的文件目录，比如 vmlinuz initrd.img 文件都位于这个目录中。在一般情况下，GRUB或LILO系统引导管理器也位于这个目录。</p> 
<hr> 
<p><strong>/lost+found</strong></p> 
<p>在ext2或ext3文件系统中，当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中fsck工具会检查这里，并修复已经损 坏的文件系统。 有时系统发生问题，有很多的文件被移到这个目录中，可能会用手工的方式来修复，或移到文件到原来的位置上。</p> 
<p><strong>/mnt</strong> </p> 
<p>这个目录一般是用于存放挂载储存设备的挂载目录的，比如有cdrom 等目录。可以参看/etc/fstab的定义。有时我们可以把让系统开机自动挂载文件系统，把挂载点放在这里也是可以的。主要看/etc/fstab中怎 么定义了；比如光驱可以挂载到/mnt/cdrom 。</p> 
<p>/opt</p> 
<p>表示的是可选择的意思，有些软件包也会被安装在这里，也就是自定义软件包，比如在Fedora Core 5.0中，OpenOffice就是安装在这里。有些我们自己编译的软件包，就可以安装在这个目录中；通过源码包安装的软件，可以通过 ./configure –prefix=/opt/目录 。</p> 
<p>/proc</p> 
<p>操作系统运行时，进程信息及内核信息（比如cpu、硬盘分区、内存信息等）存放在这里。/proc目录伪装的文件系统proc的挂载目录，proc并不是真正的文件系统，它的定义可以参见 /etc/fstab 。</p> 
<p><strong>/sbin</strong></p> 
<p>大多是涉及系统管理的命令的存放，是超级权限用户root的可执行命令存放地，普通用户无权限执行这个目录下的命令，这个目录和/usr/sbin; /usr/X11R6/sbin或/usr/local/sbin目录是相似的；我们记住就行了，凡是目录sbin中包含的都是root权限才能执行的。</p> 
<p><strong>/usr</strong></p> 
<p>这个是系统存放程序的目录，比如命令、帮助文件等。这个目录下有很多的文件和目录。当我们安装一个Linux发行版官方提供的软件包时，大多安装在这里。 如果有涉及服务器配置文件的，会把配置文件安装在/etc目录中。/usr目录下包括涉及字体目录/usr/share/fonts ，帮助目录 /usr/share/man或/usr/share/doc，普通用户可执行文件目录/usr/bin 或/usr/local/bin 或/usr/X11R6/bin ，超级权限用户root的可执行命令存放目录，比如 /usr/sbin 或/usr/X11R6/sbin 或/usr/local/sbin 等；还有程序的头文件存放目录/usr/include。</p> 
<p><strong>/var</strong></p> 
<p>这个目录的内容是经常变动的，看名字就知道，我们可以理解为vary的缩写，/var下有/var/log 这是用来存放系统日志的目录。/var/www目录是定义Apache服务器站点存放目录；/var/lib 用来存放一些库文件，比如MySQL的，以及MySQL数据库的的存放地；</p> 
<p><strong>/usr/loca</strong></p> 
<p>这个目录一般是用来存放用户自编译安装软件的存放目录；一般是通过源码包安装的软件，如果没有特别指定安装目录的话，一般是安装在这个目录中。这个目录下面有子目录。自己看看吧。</p> 
<p><strong>/usr/share</strong></p> 
<p>系统共用的东西存放地，比如 /usr/share/fonts 是字体目录，/usr/share/doc和/usr/share/man帮助文件。</p> 
<p><strong>/var/log</strong> </p> 
<p>系统日志存放，分析日志要看这个目录的东西；</p> 
<p><strong>/var/spool</strong> </p> 
<p>打印机、邮件、代理服务器等假脱机目录；</p> 
<hr> 
<h2 id="centos7常用命令文件和目录"><a name="t2"></a><a name="t2"></a>Centos7常用命令[文件和目录]</h2> 
<p>Centos7常用命令[文件和目录]</p> 
<hr> 
<h1 id="进入home目录"><a name="t3"></a><a name="t3"></a>进入home目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd /home</span></code></pre> 
<h1 id="返回上一级目录"><a name="t4"></a><a name="t4"></a>返回上一级目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd ..</span></code></pre> 
<h1 id="返回上两级目录"><a name="t5"></a><a name="t5"></a>返回上两级目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd ../..</span></code></pre> 
<h1 id="进入个人的主目录"><a name="t6"></a><a name="t6"></a>进入个人的主目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd</span></code></pre> 
<h1 id="进入个人的主目录-1"><a name="t7"></a><a name="t7"></a>进入个人的主目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd ~user1</span></code></pre> 
<h1 id="返回上次所在的目录"><a name="t8"></a><a name="t8"></a>返回上次所在的目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cd -</span></code></pre> 
<h1 id="显示工作路径"><a name="t9"></a><a name="t9"></a>显示工作路径</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># pwd</span></code></pre> 
<h1 id="查看目录中的文件"><a name="t10"></a><a name="t10"></a>查看目录中的文件</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ls</span></code></pre> 
<h1 id="查看目录中的文件-1"><a name="t11"></a><a name="t11"></a>查看目录中的文件</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ls -F</span></code></pre> 
<h1 id="显示文件和目录的详细资料"><a name="t12"></a><a name="t12"></a>显示文件和目录的详细资料</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ls -l</span></code></pre> 
<h1 id="显示隐藏文件"><a name="t13"></a><a name="t13"></a>显示隐藏文件</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ls -a</span></code></pre> 
<h1 id="显示包含数字的文件名和目录名"><a name="t14"></a><a name="t14"></a>显示包含数字的文件名和目录名</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ls [0-9]</span></code></pre> 
<h1 id="显示文件和目录由根目录开始的树形结构1"><a name="t15"></a><a name="t15"></a>显示文件和目录由根目录开始的树形结构(1)</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># tree</span></code></pre> 
<h1 id="显示文件和目录由根目录开始的树形结构2"><a name="t16"></a><a name="t16"></a>显示文件和目录由根目录开始的树形结构(2)</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># lstree</span></code></pre> 
<h1 id="创建一个叫做dir1的目录"><a name="t17"></a><a name="t17"></a>创建一个叫做dir1的目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># mkdir dir1</span></code></pre> 
<h1 id="同时创建两个目录"><a name="t18"></a><a name="t18"></a>同时创建两个目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># mkdir dir1 dir2</span></code></pre> 
<h1 id="创建一个目录树"><a name="t19"></a><a name="t19"></a>创建一个目录树</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># mkdir -p /tmp/dir1/dir2</span></code></pre> 
<h1 id="删除一个叫做file1的文件"><a name="t20"></a><a name="t20"></a>删除一个叫做file1的文件</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># rm -f file1</span></code></pre> 
<h1 id="删除一个叫做dir1的目录"><a name="t21"></a><a name="t21"></a>删除一个叫做dir1的目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># rmdir dir1</span></code></pre> 
<h1 id="删除一个叫做-dir1-的目录并同时删除其内容"><a name="t22"></a><a name="t22"></a>删除一个叫做 ‘dir1’ 的目录并同时删除其内容</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># rm -rf dir1</span></code></pre> 
<h1 id="同时删除两个目录及它们的内容"><a name="t23"></a><a name="t23"></a>同时删除两个目录及它们的内容</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># rm -rf dir1 dir2</span></code></pre> 
<h1 id="重命名移动-一个目录"><a name="t24"></a><a name="t24"></a>重命名/移动 一个目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># mv dir1 new_dir</span></code></pre> 
<h1 id="复制一个文件"><a name="t25"></a><a name="t25"></a>复制一个文件</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cp file1 file2</span></code></pre> 
<h1 id="复制一个目录下的所有文件到当前工作目录"><a name="t26"></a><a name="t26"></a>复制一个目录下的所有文件到当前工作目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cp dir/* .</span></code></pre> 
<h1 id="复制一个目录到当前工作目录"><a name="t27"></a><a name="t27"></a>复制一个目录到当前工作目录</h1> 
<p><code>[root@localhost ~]# cp -a /tmp/dir1</code> .</p> 
<h1 id="复制一个目录"><a name="t28"></a><a name="t28"></a>复制一个目录</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># cp -a dir1 dir2</span></code></pre> 
<h1 id="创建一个指向文件或目录的软链接"><a name="t29"></a><a name="t29"></a>创建一个指向文件或目录的软链接</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ln -s file1 lnk1</span></code></pre> 
<h1 id="创建一个指向文件或目录的物理链接"><a name="t30"></a><a name="t30"></a>创建一个指向文件或目录的物理链接</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># ln file1 lnk1</span></code></pre> 
<h1 id="修改一个文件或目录的时间戳-yymmddhhmm"><a name="t31"></a><a name="t31"></a>修改一个文件或目录的时间戳 - (YYMMDDhhmm)</h1> 
<pre class="prettyprint" name="code"><code class="hljs ruby has-numbering" onclick="mdcp.signin(event)" style="position: unset;">[root<span class="hljs-variable">@localhost</span> ~]<span class="hljs-comment"># touch -t 0712250000 file1</span></code></pre>
                </div><div><div></div></div>
   
        </div>
    </article>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.markdown_views code, .markdown_views kbd, .markdown_views pre, .markdown_views samp {
    font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #000;
}
.markdown_views *, legend {
    box-sizing: border-box;
}


.markdown_views h1, .markdown_views h2, .markdown_views h3, .markdown_views h4, .markdown_views h5, .markdown_views h6 {
    color: #4f4f4f;
    margin: 8px 0 16px;
    font-weight: 700;
}
.markdown_views h1 {
    font-size: 28px;
    line-height: 36px;
}
.markdown_views .prettyprint, .markdown_views pre.prettyprint {
    margin: 0 0 24px;
    padding: 8px 16px 6px 56px;
    background-color: #f6f8fa;
    border: none;
}

</style>