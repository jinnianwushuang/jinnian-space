<!--
 * @Date           : 2021-01-30 02:07:31
 * @FilePath       : /jinnian-space/src/pages/linux/module/m8 copy.vue
 * @Description    : 
-->
<template>
    <div>
<table width="1289" border="0" cellpadding="0" cellspacing="0" style="width:966.75pt;border-collapse:collapse;table-layout:fixed;">
   <colgroup><col width="93" style="mso-width-source:userset;mso-width-alt:2976;">
   <col width="1196" style="mso-width-source:userset;mso-width-alt:38272;">
   </colgroup><tbody><tr height="19" style="height:14.25pt;">
    <td height="19" width="93" style="height:14.25pt;width:69.75pt;"></td>
    <td width="1196" style="width:897.00pt;"></td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl71" height="18" style="height:13.50pt;" x:str="">目录</td>
    <td class="xl72" x:str="">应放置文件内容</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">bin</td>
    <td class="xl74" x:str="">二进制文件的目录（就是可执行程序的目录）</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">boot</td>
    <td class="xl74" x:str="">系统启动时需要读取的目录</td>
   </tr>
   <tr height="72" style="height:54.00pt;">
    <td class="xl73" height="72" style="height:54.00pt;" x:str="">dev</td>
    <td class="xl75" x:str="">存放设备文件的目录（device）<br>Linux中，设备分为两种：块设备（block）、字符设备（character）。<br>硬盘、软驱、光驱都属于“块设备”，<br>鼠标、键盘都属于“字符设备”。</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">etc</td>
    <td class="xl74" x:str="">系统的配置文件（系统的信息存放在这里，比如我们的帐号以及密码）</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">home</td>
    <td class="xl74" x:str="">普通用户的主目录，类似于Windows的C:\Documents and Settings下的目录</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">root</td>
    <td class="xl74" x:str="">超级用户的主目录，也就是root的主目录，类似于C:\Documents and Settings\Administrator</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">initrd</td>
    <td class="xl74" x:str="">初始化的目录，比如我们希望系统开机的时候配置一下IP</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">lib</td>
    <td class="xl74" x:str="">库函数的目录（Library），类似“外挂”目录</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">lost+found</td>
    <td class="xl76" x:str="">系统出错时，会存放一些丢失的文件在这个目录里</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">media</td>
    <td class="xl74" x:str="">存放一些可删除的设备文件</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">mnt</td>
    <td class="xl74" x:str="">存放一些临时需要挂载（mount）的设备</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">opt</td>
    <td class="xl74" x:str="">类似于windows的Programfiles目录，一般是用来安装程序的。optional（可选）</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">proc</td>
    <td class="xl74" x:str="">特殊目录。这里的所有文件都不是在硬盘里的，而是在内存里的。也就是这个目录的文件都是内存的真实映射。</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">sbin</td>
    <td class="xl74" x:str="">类似于bin目录。区别在于sbin目录的东西都是给superuser的，即superuser'sbin</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">selinux</td>
    <td class="xl74" x:str="">SecureLinux关于安全策略的配置</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">srv</td>
    <td class="xl76" x:str="">服务需要取的数据目录</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">sys</td>
    <td class="xl76" x:str="">跟p<font class="font0">roc类似，也是记录和内核相关的信息。同样不占硬盘空间</font></td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">tmp</td>
    <td class="xl74" x:str="">临时目录temporary</td>
   </tr>
   <tr height="18" style="height:13.50pt;">
    <td class="xl73" height="18" style="height:13.50pt;" x:str="">usr</td>
    <td class="xl74" x:str="">类似于前面的opt目录，但是存放在这个地方的软件都是很重要的。相当于windows里C:\WINDOWS和C:\Program Files的综合体。Usr=Unix Software Resource.</td>
   </tr>
   <tr height="19" style="height:14.25pt;">
    <td class="xl77" height="19" style="height:14.25pt;" x:str="">var</td>
    <td class="xl78" x:str="">常态性变动的文件，比如缓存、m<font class="font0">ysql文件、mail的数据</font></td>
   </tr>
   <!--[if supportMisalignedColumns]-->
    <tr width="0" style="display:none;">
     <td width="93" style="width:70;"></td>
     <td width="1196" style="width:897;"></td>
    </tr>
   <!--[endif]-->
  </tbody></table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>