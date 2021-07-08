<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/linux/heima/module/m2.vue
 * @Description    : 
-->
<template>
  <div>
    <div class="row   q-my-md">
      <q-select
        v-model="book"
        @input="change_book()"
        :options="book_arr"
     ><template slot="before">
       <div>
          
       </div>
     </template> </q-select>
    </div>
    <div class="q-pdfviewer-container   q-pa-md">
      <q-pdfviewer
        v-model="show"
        :src="src"
        type="html5"
        content-class=" fit   q-pdfviewer-container"
        inner-content-class=" fit   q-pdfviewer-container"
      />
    </div>
  </div>
</template>
<script>
const book_arr = [
  "/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/03Linux文件管理(上).pdf",
  "/第1阶段-运维基本功（升级7.6版本）/03Linux文件管理(下).pdf",
  "/第1阶段-运维基本功（升级7.6版本）/04用户管理.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/05权限管理.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/06自有服务及软件包.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/08YUM与开源项目实战.pdf",
  "/第2阶段-运维系统服务/01_SHELL编程前奏_小工具.pdf",
  "/第2阶段-运维系统服务/01_磁盘管理.pdf",
  "/第2阶段-运维系统服务/02_磁盘阵列之RAID.pdf",
  "/第2阶段-运维系统服务/07SSH服务(打卡).pdf",
  "/第2阶段-运维系统服务/Mycat_V1.6.0.pdf",
  "/第2阶段-运维系统服务/Percona-XtraBackup-2.4.7-2.pdf",
  "/第2阶段-运维系统服务/Percona-XtraDB-Cluster-5.7.18-29.20.pdf",
  "/第2阶段-运维系统服务/navicat.pdf",
  "/第2阶段-运维系统服务/网络基础1.pdf",
  "/第2阶段-运维系统服务/网络基础2.pdf",
  "/第2阶段-运维系统服务/网络基础3.pdf",
  "/第2阶段-运维系统服务/计算机网络设备.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/10_企业架构NOSQL数据库之MongoDB.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/11_企业架构web服务器文件及时同步.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/12_企业架构之Tomcat部署使用.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/4_企业架构双点服务器HA.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/5_企业架构LNMP高可用负载均衡服务器.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/7_企业架构MySQL读写分离.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/8_企业架构缓存中间件分布式memcached.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/9_企业架构队列缓存中间件分布式Redis.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/MongoDB权威指南中文版.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/Mycat_V1.6.0.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/ThinkPHP5.0完全开发手册-20180101212957.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/企业架构LB-服务器的负载均衡之Haproxy实现.pdf",
  "/第3阶段-运维线上实战：千万级电商系统解决方案/企业架构LB-服务器的负载均衡之LVS实现.pdf",
  "/第4阶段-运维线下实战：运维自动化/centos7虚拟机教学环境统一文档.pdf",
  "/第4阶段-运维线下实战：运维自动化/windows下Git使用拓展.pdf",
  "/第5阶段-运维安全/1_系统安全.pdf",
  "/第5阶段-运维安全/2_网络安全.pdf",
  "/第5阶段-运维安全/3_服务安全.pdf",
  "/第5阶段-运维安全/5_入侵检测.pdf",
  "/第6阶段-运维云计算/01_k8s极速入门课程介绍.pdf",
  "/第6阶段-运维云计算/02_k8s初识.pdf",
  "/第6阶段-运维云计算/03_k8s功能.pdf",
  "/第6阶段-运维云计算/04_k8s架构.pdf",
  "/第6阶段-运维云计算/05_k8s集群部署.pdf",
  "/第6阶段-运维云计算/06_k8s集群客户端工具 kubectl.pdf",
  "/第6阶段-运维云计算/07_k8s集群资源清单文件（YAML）书写方法.pdf",
  "/第6阶段-运维云计算/08_k8s集群NameSpace(命名空间).pdf",
  "/第6阶段-运维云计算/09_k8s集群核心概念 Pod.pdf",
  "/第6阶段-运维云计算/1-kubernetes介绍与安装部署.pdf",
  "/第6阶段-运维云计算/10_k8s集群核心概念Controller.pdf",
  "/第6阶段-运维云计算/11_k8s集群核心概念Service.pdf",
  "/第6阶段-运维云计算/12_k8s极速入门_结课.pdf",
  "/第6阶段-运维云计算/1_大数据基础平台实施及运维.pdf",
  "/第6阶段-运维云计算/1_容器技术.pdf",
  "/第6阶段-运维云计算/1_虚拟化技术（KVM）.pdf",
  "/第6阶段-运维云计算/2-kubernetes应用.pdf",
  "/第6阶段-运维云计算/2_代码自动发布-docker.pdf",
  "/第6阶段-运维云计算/2_大数据基础平台实施及运维.pdf",
  "/第6阶段-运维云计算/2_虚拟化技术（KVM）(1).pdf",
  "/第6阶段-运维云计算/OpenStack手动分布式部署.pdf",
  "/第6阶段-运维云计算/OpenStack自动部署.pdf",
  "/第6阶段-运维云计算/Paas云平台_docker容器.pdf",
  "/第6阶段-运维云计算/rancher.pdf",
  "/第6阶段-运维云计算/容器编排之Docker三剑客.pdf",
  "/第6阶段-运维云计算/阿里云 ECS.pdf",
  "/第6阶段-运维云计算/阿里云 RDS.pdf",
  "/第6阶段-运维云计算/阿里云 SLB.pdf",
  "/第6阶段-运维云计算/阿里云 对象存储(OSS).pdf",
  "/第6阶段-运维云计算/阿里云CDN应用.pdf",
  "/第6阶段-运维云计算/阿里云文件存储 NAS.pdf",
  "/第7阶段-Python运维开发/python基础7天最终版.pdf"
];
const prefix = "linux/heima-Linux云计算";
import {select_pdf_mixin} from "src/mixins/index.js"
export default {
  mixins:[select_pdf_mixin],
  data() {
    return {
      prefix,
      book_arr,
      show: true,
      book: book_arr[0],
      src: ""
    };
  },
 
};
</script>
<style></style>
