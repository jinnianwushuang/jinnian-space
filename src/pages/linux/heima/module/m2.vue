<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/linux/heima/module/m2.vue
 * @Description    : 
-->
<template>
  <div>
    <div class="row  ">
      <q-select
        v-model="book"
        use-input
        input-debounce="0"
        clearable
        @filter="filterFn"
        :options="book_options"
        ><template slot="before">
          <div></div>
        </template>
      </q-select>
    </div>
    <div class="q-pdfviewer-container  ">
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
const book_options = [
  "第1阶段-运维基本功/day01/第1阶段-运维基本功（升级7.6版本）day01课堂讲义.pdf",
  "第1阶段-运维基本功/day01/课堂讲义.pdf",
  "第1阶段-运维基本功/day01/讲义/01运维概述与Linux系统安装.pdf",
  "第1阶段-运维基本功/day02/课堂笔记.pdf",
  "第1阶段-运维基本功/day02/讲义/02Linux基础命令.pdf",
  "第1阶段-运维基本功/day03/课堂笔记.pdf",
  "第1阶段-运维基本功/day03/讲义/03Linux文件管理(上).pdf",
  "第1阶段-运维基本功/day04/课堂笔记.pdf",
  "第1阶段-运维基本功/day05/课堂笔记.pdf",
  "第1阶段-运维基本功/day05/讲义/上/03Linux文件管理(下).pdf",
  "第1阶段-运维基本功/day06/课堂笔记.pdf",
  "第1阶段-运维基本功/day06/讲义/04用户管理.pdf",
  "第1阶段-运维基本功/day07/课堂笔记.pdf",
  "第1阶段-运维基本功/day07/讲义/05权限管理.pdf",
  "第1阶段-运维基本功/day08/课堂笔记.pdf",
  "第1阶段-运维基本功/day09/课堂笔记.pdf",
  "第1阶段-运维基本功/day09/讲义/上/06自有服务及软件包.pdf",
  "第1阶段-运维基本功/day10/课堂笔记.pdf",
  "第1阶段-运维基本功/day10/讲义/07进程检测与控制.pdf",
  "第1阶段-运维基本功/day11/课堂笔记.pdf",
  "第1阶段-运维基本功/day12/课堂笔记.pdf",
  "第1阶段-运维基本功/day12/讲义/08YUM与开源项目实战.pdf",

  "第2阶段-运维系统服务/第二阶段网络基础/计算机网络设备.pdf",
  "第2阶段-运维系统服务/第二阶段网络基础/网络基础1.pdf",
  "第2阶段-运维系统服务/第二阶段网络基础/网络基础2.pdf",
  "第2阶段-运维系统服务/第二阶段网络基础/网络基础3.pdf",
  "第2阶段-运维系统服务/01_磁盘管理.pdf",
  "第2阶段-运维系统服务/02_磁盘阵列之RAID.pdf",
  "第2阶段-运维系统服务/系统服务/day01/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day01/讲义/01_Linux高级命令.pdf",
  "第2阶段-运维系统服务/系统服务/day01/讲义/02_Linux下用户组管理.pdf",
  "第2阶段-运维系统服务/系统服务/day01/讲义/03_Linux下文件权限管理.pdf",
  "第2阶段-运维系统服务/系统服务/day01/讲义/04_Linux下软件包管理.pdf",
  "第2阶段-运维系统服务/系统服务/day02/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day02/讲义/02_Linux下用户组管理.pdf",
  "第2阶段-运维系统服务/系统服务/day02/讲义/03_Linux下文件权限管理.pdf",
  "第2阶段-运维系统服务/系统服务/day03/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day03/讲义/03_Linux下文件权限管理.pdf",
  "第2阶段-运维系统服务/系统服务/day04/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day04/讲义/Linux下yum源配置实战.pdf",
  "第2阶段-运维系统服务/系统服务/day05/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day05/讲义/远程管理SSH服务.pdf",
  "第2阶段-运维系统服务/系统服务/day06/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day06/讲义/01-远程管理SSH服务免密登录解决方案.pdf",
  "第2阶段-运维系统服务/系统服务/day07/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day07/讲义/02-Linux下数据同步RSYNC.pdf",
  "第2阶段-运维系统服务/系统服务/day08/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day08/讲义/02-文件共享服务之FTP.pdf",
  "第2阶段-运维系统服务/系统服务/day09/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day09/讲义/文件共享服务之NFS_SMB.pdf",
  "第2阶段-运维系统服务/系统服务/day10/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day10/讲义/域名管理系统之DNS.pdf",
  "第2阶段-运维系统服务/系统服务/day11/课堂笔记.pdf",
  "第2阶段-运维系统服务/系统服务/day11/讲义/源码构建LAMP环境.pdf",
  "第2阶段-运维系统服务/01_SHELL编程前奏_小工具.pdf",

  "第2阶段-运维系统服务/07SSH服务(打卡).pdf",
  "第2阶段-运维系统服务/navicat.pdf",
  "第2阶段-运维系统服务/Percona-XtraBackup-2.4.7-2.pdf",
  "第2阶段-运维系统服务/Percona-XtraDB-Cluster-5.7.18-29.20.pdf",
  "第2阶段-运维系统服务/mysql-dba/day01/讲义/01_MySQL介绍及安装.pdf",
  "第2阶段-运维系统服务/mysql-dba/day02/课堂笔记.pdf",
  "第2阶段-运维系统服务/mysql-dba/day02/讲义/02_MySQL体系结构及数据文件介绍.pdf",
  "第2阶段-运维系统服务/mysql-dba/day02/讲义/03_MySQL基本SQL语句讲解.pdf",
  "第2阶段-运维系统服务/mysql-dba/day03/课堂笔记.pdf",
  "第2阶段-运维系统服务/mysql-dba/day04/讲义/04_MySQL备份与恢复.pdf",
  "第2阶段-运维系统服务/mysql-dba/day05/课堂笔记.pdf",
  "第2阶段-运维系统服务/mysql-dba/day05/讲义/04_MySQL备份与恢复.pdf",
  "第2阶段-运维系统服务/mysql-dba/day06/课堂笔记.pdf",
  "第2阶段-运维系统服务/mysql-dba/day06/讲义/05_MySQL主从复制架构.pdf",
  "第2阶段-运维系统服务/mysql-dba/day07/课堂笔记.pdf",
  "第2阶段-运维系统服务/mysql-dba/day07/讲义/06_MySQL数据库高可用解决方案(MHA).pdf",
  "第2阶段-运维系统服务/shell脚本/01_SHELL编程之变量定义.pdf",
  "第2阶段-运维系统服务/shell脚本/02_SHELL编程之流程控制和循环语句.pdf",
  "第2阶段-运维系统服务/shell脚本/03_SHELL编程之嵌套循环+随机数及综合案例.pdf",
  "第2阶段-运维系统服务/shell脚本/04_SHELL编程之CASE语句+函数+正则.pdf",
  "第2阶段-运维系统服务/shell脚本/05_SHELL编程之文本处理工具SED.pdf",
  "第2阶段-运维系统服务/shell脚本/06_SHELL编程之文本处理工具AWK.pdf",
  "第2阶段-运维系统服务/小工具/01_SHELL编程前奏_小工具.pdf",

  "第3阶段-运维线上实战：千万级电商系统解决方案/10_企业架构NOSQL数据库之MongoDB.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/11_企业架构web服务器文件及时同步.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/12_企业架构之Tomcat部署使用.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/4_企业架构双点服务器HA.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/7_企业架构MySQL读写分离.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/8_企业架构缓存中间件分布式memcached.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/MongoDB权威指南中文版.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/Mycat_V1.6.0.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/企业架构LB-服务器的负载均衡之Haproxy实现.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/企业架构LB-服务器的负载均衡之LVS实现.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/11_企业架构web服务器文件及时同步/01_文档/rsync+sersync/rsync+sersync.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/1_企业架构之LNMP/01_文档/1_企业架构之LNMP.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/2_企业级Nginx使用-day1/01_文档/2_企业级Nginx使用-day1.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/2_企业级Nginx使用-day1/05_资料/ThinkPHP5.0完全开发手册-20180101212957.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/3_企业级Nginx使用-day2/01_文档/3_企业级Nginx使用-day2.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/4_企业架构HA-服务器的高可用/01_文档/4_企业架构双点服务器HA.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/4_企业架构HA-服务器的高可用/05_资料/虚拟机克隆网卡配置/虚拟机克隆IP处理.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/5_企业架构LB-服务器的负载均衡之Nginx实现/01_文档/5_企业架构LNMP高可用负载均衡服务器.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/6_企业架构LB-服务器的负载均衡二/01_文档/haproxy/企业架构LB-服务器的负载均衡之Haproxy实现.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/6_企业架构LB-服务器的负载均衡二/01_文档/lvs/企业架构LB-服务器的负载均衡之LVS实现.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/6_企业架构LB-服务器的负载均衡二/05_资料/heartbeat安装/heartbeat.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/8_企业架构缓存中间件分布式memcached/01_文档/8_企业架构缓存中间件分布式memcached.pdf",
  "第3阶段-运维线上实战：千万级电商系统解决方案/9_企业架构队列缓存中间件分布式Redis/01_文档/9_企业架构队列缓存中间件分布式Redis.pdf",
  "第4阶段-运维线下实战：运维自动化/centos7虚拟机教学环境统一文档.pdf",
  "第4阶段-运维线下实战：运维自动化/CICD/文档/1-git.pdf",
  "第4阶段-运维线下实战：运维自动化/CICD/文档/2-github与gitlab.pdf",
  "第4阶段-运维线下实战：运维自动化/CICD/文档/3-jenkins.pdf",
  "第4阶段-运维线下实战：运维自动化/CICD/文档/windows下Git使用拓展.pdf",
  "第4阶段-运维线下实战：运维自动化/ELK日志分析/文档/ELK1.pdf",
  "第4阶段-运维线下实战：运维自动化/ELK日志分析/文档/ELK2.pdf",
  "第4阶段-运维线下实战：运维自动化/ELK日志分析/文档/logstash插件.pdf",
  "第4阶段-运维线下实战：运维自动化/ELK日志分析/文档/综合案例.pdf",
  "第4阶段-运维线下实战：运维自动化/存储/讲义/1-存储概念与SAN.pdf",
  "第4阶段-运维线下实战：运维自动化/存储/讲义/2-分布式存储之glusterfs.pdf",
  "第4阶段-运维线下实战：运维自动化/存储/讲义/3-分布式存储之Ceph.pdf",
  "第4阶段-运维线下实战：运维自动化/存储/讲义/ceph的osd盘删除操作.pdf",
  "第4阶段-运维线下实战：运维自动化/存储/讲义/iscsi扩展.pdf",
  "第4阶段-运维线下实战：运维自动化/监控/文档/prometheus.pdf",
  "第4阶段-运维线下实战：运维自动化/监控/文档/zabbix1.pdf",
  "第4阶段-运维线下实战：运维自动化/监控/文档/zabbix2.pdf",
  "第4阶段-运维线下实战：运维自动化/监控/文档/zabbix课后练习答案.pdf",
  "第4阶段-运维线下实战：运维自动化/配置自动化/文档/ansible.pdf",
  "第4阶段-运维线下实战：运维自动化/配置自动化/文档/练习答案.pdf",
  "第4阶段-运维线下实战：运维自动化/配置自动化/文档/练习答案2.pdf",
  "第5阶段-运维安全/1_系统安全.pdf",
  "第5阶段-运维安全/2_网络安全.pdf",
  "第5阶段-运维安全/3_服务安全.pdf",
  "第5阶段-运维安全/5_入侵检测.pdf",
  "第6阶段-运维云计算/01_k8s极速入门课程介绍.pdf",
  "第6阶段-运维云计算/02_k8s初识.pdf",
  "第6阶段-运维云计算/03_k8s功能.pdf",
  "第6阶段-运维云计算/04_k8s架构.pdf",
  "第6阶段-运维云计算/05_k8s集群部署.pdf",
  "第6阶段-运维云计算/06_k8s集群客户端工具 kubectl.pdf",
  "第6阶段-运维云计算/07_k8s集群资源清单文件（YAML）书写方法.pdf",
  "第6阶段-运维云计算/1-kubernetes介绍与安装部署.pdf",
  "第6阶段-运维云计算/1_容器技术.pdf",
  "第6阶段-运维云计算/1_虚拟化技术（KVM）.pdf",
  "第6阶段-运维云计算/2-kubernetes应用.pdf",
  "第6阶段-运维云计算/2_代码自动发布-docker.pdf",
  "第6阶段-运维云计算/2_大数据基础平台实施及运维.pdf",
  "第6阶段-运维云计算/阿里云 SLB.pdf",
  "第6阶段-运维云计算/阿里云 对象存储(OSS).pdf",
  "第6阶段-运维云计算/阿里云CDN应用.pdf",
  "第6阶段-运维云计算/01_大数据/day1/01_笔记/1_大数据基础平台实施及运维.pdf",
  "第6阶段-运维云计算/02_虚拟化/day2/01_笔记/2_虚拟化技术（KVM）(1).pdf",
  "第6阶段-运维云计算/03_阿里云/CDN/01_笔记/阿里云CDN应用.pdf",
  "第6阶段-运维云计算/03_阿里云/ECS/01_笔记/阿里云 ECS.pdf",
  "第6阶段-运维云计算/03_阿里云/NAS/01_笔记/阿里云文件存储 NAS.pdf",
  "第6阶段-运维云计算/03_阿里云/OSS/01_笔记/阿里云 对象存储(OSS).pdf",
  "第6阶段-运维云计算/03_阿里云/RDS/01_笔记/阿里云 RDS.pdf",
  "第6阶段-运维云计算/03_阿里云/SLB/01_笔记/阿里云 SLB.pdf",
  "第6阶段-运维云计算/04_私有云/openstack/OpenStack手动分布式部署.pdf",
  "第6阶段-运维云计算/04_私有云/openstack/openstack排错思路.pdf",
  "第6阶段-运维云计算/04_私有云/openstack/OpenStack自动部署.pdf",
  "第6阶段-运维云计算/06_容器编排(k8s)/Paas云平台_docker容器.pdf",
  "第6阶段-运维云计算/06_容器编排(k8s)/rancher.pdf",
  "第6阶段-运维云计算/06_容器编排(k8s)/容器编排之Docker三剑客.pdf",
  "第6阶段-运维云计算/7-k8s极速入门（赠送）/08_k8s极速入门_k8s集群NameSpace(命名空间)/01_笔记/08_k8s集群NameSpace(命名空间).pdf",
  "第6阶段-运维云计算/7-k8s极速入门（赠送）/09_k8s极速入门_k8s集群核心概念 Pod/01_笔记/09_k8s集群核心概念 Pod.pdf",
  "第6阶段-运维云计算/7-k8s极速入门（赠送）/10_k8s极速入门_k8s集群核心概念 Controller(控制器)/01_笔记/10_k8s集群核心概念Controller.pdf",
  "第6阶段-运维云计算/7-k8s极速入门（赠送）/11_k8s极速入门_k8s集群核心概念 Service/01_笔记/11_k8s集群核心概念Service.pdf",
  "第6阶段-运维云计算/7-k8s极速入门（赠送）/12_k8s极速入门_结课/01_笔记/12_k8s极速入门_结课.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/00_环境说明/01_笔记/第6阶段-运维云计算-《Kubernetes快速入门》进阶课程环境说明.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/01_Pod进阶/01_笔记/k8s集群核心概念 Pod进阶.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/02_Controller进阶/01_笔记/kubernetes集群应用 controller进阶.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/03_Service进阶/01_笔记/kubernetes集群应用 service进阶.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/04_kubernetes集群PaaS Rancher/01_笔记/基于kubernetes实现PaaS云平台-rancher.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/05_在kubernetes集群中kubesphere部署/01_笔记/kubernetes集群kubesphere.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/06_kubernetes集群 zookeeper部署/01_笔记/kubernetes集群 应用实践 zookeeper部署.pdf",
  "第6阶段-运维云计算/8-Kubernetes高级教程营销视频（赠送）/07_kubernetes集群应用实践 kafka部署/01_笔记/kubernetes集群 应用实践 kafka部署.pdf",
  "第7阶段-Python运维开发/python基础7天最终版.pdf",
  "第7阶段-Python运维开发/01_Web开发基础之HTML+CSS/文档/01_Web开发基础之HTML+CSS.pdf",
  "第7阶段-Python运维开发/02_Web开发基础之JavaScript/文档/02_Web开发基础之JavaScript.pdf",
  "第7阶段-Python运维开发/03_Web开发基础之综合应用/文档/03_Web开发基础之综合应用.pdf",
  "第7阶段-Python运维开发/04_Web框架之Django一/文档/04_Web框架之Django一.pdf",
  "第7阶段-Python运维开发/05_Web框架之Django二/文档/05_Web框架之Django二.pdf",
  "第7阶段-Python运维开发/06_Web框架之Django三/文档/06_Web框架之Django三.pdf",
  "第7阶段-Python运维开发/07_CMDB系统开发一/文档/07_CMDB系统开发一.pdf",
  "第7阶段-Python运维开发/09_CMDB系统开发三/文档/09_CMDB系统开发三.pdf"
];
const prefix = "linux/heima-Linux云计算/";
import { select_pdf_mixin } from "src/mixins/index.js";
export default {
  mixins: [select_pdf_mixin],
  data() {
    return {
      prefix,
      book_options,
      show: true,
      book: book_options[0],
      src: ""
    };
  }
};
</script>
<style></style>
