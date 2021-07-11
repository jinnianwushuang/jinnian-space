<!--
 * @Date           : 2021-07-10 01:26:52
 * @FilePath       : /jinnian-space/src/pages/linux/md/linux-其他.md
 * @Description    : 
-->

 

## **CentOS7防火墙firewalld，常见区域及相应策略规则**

| 区域     | 默认策略                                                     |
| -------- | ------------------------------------------------------------ |
| trusted  | 允许所有数据包                                               |
| home     | 拒绝流入的流量，除非与流出的流量相关，允许ssh,mdns,ippclient,amba-client,dhcpv6-client服务通过 |
| internal | 等同于home                                                   |
| work     | 拒绝流入的流量，除非与流出的流量相关，允许ssh,ipp-client,dhcpv6-client服务通过 |
| public   | 拒绝流入的流量，除非与流出的流量相关，允许ssh,dhcpv6-client服务通过 |
| external | 拒绝流入的流量，除非与流出的流量相关，允许ssh服务通过        |
| dmz      | 拒绝流入的流量，除非与流出的流量相关，允许ssh服务通过        |
| block    | 拒绝流入的流量，除非与流出的流量相关，非法流量采取拒绝操作   |
| drop     | 拒绝流入的流量，除非与流出的流量相关，非法流量采取丢弃操作   |
