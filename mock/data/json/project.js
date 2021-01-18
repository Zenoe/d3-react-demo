const projectlist= {
  "recordsTotal" : "122",
  "recordsFiltered" : "2",
  "data" : [ {
    "id" : "24445331514749609",
    "name" : "西安理工大学无线网络建设",
    "createTime" : "2016-03-25 13:38:21",
    "uploadTime" : "2020-09-16 17:59:39",
    "industryName" : "高教",
    "posx" : "108.998808",
    "posy" : "34.259166",
    "orgProvince" : "陕西",
    "countryCode" : "CN",
    "projectManager" : "xaut",
    "managerContact" : "02982312022"
  }, {
    "id" : "25345551334192847",
    "name" : "陕西工业职业技术学院",
    "createTime" : "2017-11-23 20:44:45",
    "uploadTime" : "2020-09-16 17:59:39",
    "industryName" : "高教",
    "orgProvince" : "陕西",
    "countryCode" : "CN",
    "projectManager" : "訾成名",
    "managerContact" : "18629087458"
  } ]
}

const deviceNum={
  "acNum" : "1",			// AC数
  "onlineApNum" : "2571",	// 在线AP数
  "offlineApNum" : "61"		// 离线AP数
}

const staNFlow=[ {
  "collectionTime" : "2020-09-23 00:05:00",
  "v4upflow" : "538.1808630898959",
  "v4downflow" : "2286.0007985264674",
  "v6upflow" : "0.0",
  "v6downflow" : "0.0",
  "v4upflow2G" : "0.0",
  "v4downflow2G" : "0.0",
  "v6upflow2G" : "0.0",
  "v6downflow2G" : "0.0",
  "v4upflow5G" : "0.0",
  "v4downflow5G" : "0.0",
  "v6upflow5G" : "0.0",
  "v6downflow5G" : "0.0",
  "staNum2G" : "894",
  "staNum5G" : "2647",
  "staNum" : "3541"
}, {
  "collectionTime" : "2020-09-23 00:10:00",
  "v4upflow" : "531.4457094586905",
  "v4downflow" : "2433.9728304088276",
  "v6upflow" : "0.0",
  "v6downflow" : "0.0",
  "v4upflow2G" : "0.0",
  "v4downflow2G" : "0.0",
  "v6upflow2G" : "0.0",
  "v6downflow2G" : "0.0",
  "v4upflow5G" : "0.0",
  "v4downflow5G" : "0.0",
  "v6upflow5G" : "0.0",
  "v6downflow5G" : "0.0",
  "staNum2G" : "888",
  "staNum5G" : "2617",
  "staNum" : "3505"
}]

const areaAccFlow=[ {
  "_id" : null,
  "downFlowSum" : "1.8479876362275124E7",		// 下行，MB，注意可能会有科学计数
  "upFlowSum" : "1530187.6196479797"		// 上行，MB，注意可能会有科学计数
} ]

const lastAraStaNum=[ {
  "isDayStaSum" : true,
  "dayStaSum" : "8186",		// 累计用户
  "staNum2G" : "1167",		// 2.4G
  "staNum5G" : "2543",		// 5G
  "staNum" : "3710"
} ]

const riskList = {
  "preOrder" : [ ],
  "risk" : [ {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查STA限速情况",
    "riskType" : "1",
    "description" : "环境中STA没有配置限速功能或者限速不合理",
    "suggestion" : "用户是否开启限速并不影响网络正常使用，但是单STA流量过大可能导致其他STA无线体验下降，建议配置限速对每个sta进行上下行流量控制(注意限速配置单位，限速过小会导致终端网速变慢)，限速可以基于AP/wlan/client进行配置\n基于AP：Ruijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)#ap-based per-user-limit down-streams/up-streams\n基于wlan：Ruijie(config)#wlan-config XX（wlan-id）\nRuijie(config-wlan)#wlan-based per-user-limit \n基于client：Ruijie(config)#ac-controller\nRuijie(config-ac)#netuser XXXX.XXXX.XXXX(MAC) outbound/inbound",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备端口是否配置描述信息",
    "riskType" : "2",
    "description" : "设备接口没有配置端口描述信息，不利于后期维护",
    "suggestion" : "设备在使用的物理接口建议配置端口描述信息description，便于后期维护\nRuijie(config)#interface XX\nRuijie(config-if-XX)#description",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备打印LOG频率是否过高",
    "riskType" : "2",
    "description" : "设备打印log频率较高，可能占用大量CPU资源",
    "suggestion" : "无线设备经常因为打印LOG信息量太大，导致设备CPU过高，建议配置下述两条命令，限制每秒LOG打印不超过10条并调高设备波特率，尽量减少LOG打印占用资源\nRuijie(config)#logging rate-limit console 10 except warnings\nRuijie(config)# line console 0\nRuijie(config-line)#speed 115200",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备配置信息是否保存",
    "riskType" : "2",
    "description" : "环境中show run与保存的config.text配置不一致",
    "suggestion" : "环境中show run与保存的config.text配置不一致，可能导致设备下电/宕机后网络异常，配置丢失，需要进行配置保存（请自行使用diffusew等对比软件再确认一遍show run与config.text的配置，保存配置后系统如果重启过可能导致密码加密部分不同而误报错）\nRuijie#write",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备是否开启广播功能",
    "riskType" : "2",
    "description" : "设备开启了广播功能，会严重影响设备性能",
    "suggestion" : "设备开启了广播功能，会严重影响设备性能，如无特定需求，建议关闭广播功能（默认关闭）\nRuijie(config)#data-plane wireless-broadcast disable",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP频宽设置情况",
    "riskType" : "2",
    "description" : "实际部署中2.4G只能使用20频宽，5G最多使用40频宽，否则将导致严重的同频干扰影响整网性能",
    "suggestion" : "实际部署中2.4G只能使用20频宽，5G最多使用40频宽，否则将导致严重的同频干扰影响整网性能，用户体验反而下降，需要进行修改：\nRuijie(config)#ap-config xxx\nRuijie(config-ap)#chan-width 20 radio 1\nRuijie(config-ap)#chan-width 20/40 radio 2",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP无线定位功能",
    "riskType" : "2",
    "description" : "AP启用了无线定位功能",
    "suggestion" : "AP启用无线定位功能并不影响正常使用，但是会导致该AP下无线STA体验下降，如果不是明确要求，建议关闭AP上的无线定位功能\nRuijie(config)#ap-config XX��ap-name）\nRuijie(config-ap)#no wlocation enable",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备接口是否有做vlan裁剪",
    "riskType" : "2",
    "description" : "设备Trunk口没有做VLAN裁剪",
    "suggestion" : "环境中Trunk口必须进行vlan裁剪，否则会导致链路带宽浪费或引起vlan冲突，环路类的异常影响面扩大。Vlan裁剪前需要知道用户现场VLAN分布情况，避免误裁剪导致网络中断\nRuijie(config)#interface XX\nRuijie(config-if-XX)#switchport trunk allowed vlan remove x-xx",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查低速报文禁用情况",
    "riskType" : "2",
    "description" : "环境中没有合理的禁用低速报文，低速节点过多会影响整网性能及终端体验",
    "suggestion" : "低速率报文并不影响网络正常使用，但是过多的使用低速率集报文会影响整网性能和终端体验下降，在信号覆盖正常且不是有特殊业务或终端需求的场景（如某些业务或终端只能使用/支持低速率报文，就不能禁用），建议禁用低速率报文以提升用户体验（一般推荐禁用11M以下的低速报文，具体情况可以根据现场环境调整）\nRuijie(config)#ac-controller\nRuijie(config-ac)#802.11g network rate 1/2/5/6/9 disabled\nRuijie(config-ac)#802.11b network rate 1/2/5 disabled\nRuijie(config-ac)#802.11a network rate 6/9 disabled",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查无线用户保持接入的最小信号强度",
    "riskType" : "2",
    "description" : "环境中没有对无线用户保持接入的信号强度做合理设置",
    "suggestion" : "assoc-rssi值是环境中无线用户可以保持接入的门限，不设置并不影响网络正常使用，但是如果环境中存在终端漫游不及时或者终端在低信号情况下体检不佳的情况，建议设置assoc-rssi在15-20左右，提升用户体验（该值默认为0不做限制），assoc-rssi值计算方式为-95+实际配置的assoc-rssi数值（如assoc-rssi设置20，门限即为-95+20=-75dbm，此时当终端信号强度低于-75时会被踢下线，促使其关联到信号更好的AP上）\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)# assoc-rssi XX radio X",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP带点数是否合适",
    "riskType" : "2",
    "description" : "单AP负载STA数偏大，无法达到最佳性能",
    "suggestion" : "AP带点数设置并不影响网络正常使用，但是单AP负载STA数量过大会导致该AP无法达到最佳性能，检查AP的sta-limit值设置是否合理（默认值为32，如果要达到最佳性能建议不超过64），具体以AP带点数以及每STA性能是否能满足客户需求为准",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查频谱分析功能",
    "riskType" : "2",
    "description" : "AP启用了频谱分析功能",
    "suggestion" : "AP启用频谱分析功能会影响性能导致STA体验下降，如果不是有明确需求，建议关闭AP上的频谱分析功能\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)#no spectral enable",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP命名情况",
    "riskType" : "2",
    "description" : "部分AP命名使用默认MAC，未进行规划命名",
    "suggestion" : "新AP上线后默认以MAC命名，是否修改AP名称不影响网络使用，为了便于后续网络维护及故障定位，建议对所有AP进行规则命名\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)#ap-name xx",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查是否开启基于ac/ap的二层隔离",
    "riskType" : "2",
    "description" : "未开启基于ac/ap的二层隔离",
    "suggestion" : "建议配置对应的命令开启\nRuijie(config)#wids\nRuijie(config-wids)#user-isolation ap enable\nRuijie(config-wids)#user-isolation ac enable",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP工作模式",
    "riskType" : "2",
    "description" : "AP工作在非normal的模式",
    "suggestion" : "AP工作在错误的模式会影响性能导致STA体验下降，如果没有开启反制、频谱分析等功能需要修改AP工作模式，建议所有AP的工作模式设置为normal，show ap-config run如果看不到该命令，既AP工作在默认的normal模式\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)#device mode normal",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查AP设备版本",
    "riskType" : "2",
    "description" : "AP版本不是最新的推荐版本",
    "suggestion" : "show version all查看AP设备版本，发现不是RTR系统最新的推荐版本可能存在隐患（可能为之前旧的试点/正式版本），如果不是金融/运营商、故障/定制的特殊版本，建议到RTR系统下载最新的推荐版本进行升级",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "会话超时检测",
    "riskType" : "2",
    "description" : "未配置会话超时时间。在等保场景下，不满足”安全计算环境-身份鉴别”中“应具有登录失败处理功能，应配置并启用结束会话、限制非法登录次数和当登录连接超时时自动退出等相关措施”的要求。",
    "suggestion" : "建议参考如下配置，满足等保要求：\nRuijie(config)#line vty 0 4\nRuijie(config)#session-timeout 5 //登录后如果5分钟未进行操作则退出系统登录（时间支持自定义）。",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查设备是否存在异常日志信息",
    "riskType" : "2",
    "description" : "AC存在等级5以上的log日志",
    "suggestion" : "LOG日志并不表示设备出现问题，环境中存在等级5以上的告警日志，show logging查看设备日志，匹配-5-以上等级的LOG（1-4），确定异常信息原因是否符合预期，如果存在异常LOG建议将LOG上传云端并拨打400电话跟进",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  }, {
    "projectId" : "25345551897955586",
    "acMac" : "5869.6c1f.2346",
    "ruleName" : "检查用户接入RSSI门限设置",
    "riskType" : "2",
    "description" : "环境中没有对RSSI门限进行合理限制",
    "suggestion" : "不设置RSSI门限并不影响网络正常使用，但是信号较差的STA接入无线容易出现问题，且会影响AP上其他STA的体验，检查AP的RSSI阀值设置是否可以满足客户实际场景的需求（一般信号覆盖较好要求高的场景推荐RSSI设置25左右也不要太高，其他场景或有特殊需求的地方也可以不设置RSSI门限，默认为不限制接入），RSSI门限计算方式为-95+实际配置的response-rssi数值（如RSSI设置25，门限即为-95+25=-70dbm）\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)# response-rssi XX",
    "updateTime" : "2020-11-02 15:27:00",
    "optimizeStatus" : "1",
    "createTime" : "2020-11-02 15:27:00"
  } ],
  "done" : [
    {
      "projectId" : "25345551897955586",
      "acMac" : "5869.6c1f.2346",
      "ruleName" : "会话超时检测",
      "riskType" : "1",
      "description" : "未配置会话超时时间。在等保场景下，不满足”安全计算环境-身份鉴别”中“应具有登录失败处理功能，应配置并启用结束会话、限制非法登录次数和当登录连接超时时自动退出等相关措施”的要求。",
      "suggestion" : "建议参考如下配置，满足等保要求：\nRuijie(config)#line vty 0 4\nRuijie(config)#session-timeout 5 //登录后如果5分钟未进行操作则退出系统登录（时间支持自定义）。",
      "updateTime" : "2020-11-02 15:27:00",
      "optimizeStatus" : "1",
      "createTime" : "2020-11-02 15:27:00"
    }, {
      "projectId" : "25345551897955586",
      "acMac" : "5869.6c1f.2346",
      "ruleName" : "检查设备是否存在异常日志信息",
      "riskType" : "2",
      "description" : "AC存在等级5以上的log日志",
      "suggestion" : "LOG日志并不表示设备出现问题，环境中存在等级5以上的告警日志，show logging查看设备日志，匹配-5-以上等级的LOG（1-4），确定异常信息原因是否符合预期，如果存在异常LOG建议将LOG上传云端并拨打400电话跟进",
      "updateTime" : "2020-11-02 15:27:00",
      "optimizeStatus" : "1",
      "createTime" : "2020-11-02 15:27:00"
    }, {
      "projectId" : "25345551897955586",
      "acMac" : "5869.6c1f.2346",
      "ruleName" : "检查用户接入RSSI门限设置",
      "riskType" : "2",
      "description" : "环境中没有对RSSI门限进行合理限制",
      "suggestion" : "不设置RSSI门限并不影响网络正常使用，但是信号较差的STA接入无线容易出现问题，且会影响AP上其他STA的体验，检查AP的RSSI阀值设置是否可以满足客户实际场景的需求（一般信号覆盖较好要求高的场景推荐RSSI设置25左右也不要太高，其他场景或有特殊需求的地方也可以不设置RSSI门限，默认为不限制接入），RSSI门限计算方式为-95+实际配置的response-rssi数值（如RSSI设置25，门限即为-95+25=-70dbm）\nRuijie(config)#ap-config XX（ap-name）\nRuijie(config-ap)# response-rssi XX",
      "updateTime" : "2020-11-02 15:27:00",
      "optimizeStatus" : "1",
      "createTime" : "2020-11-02 15:27:00"
    }
  ]
}

const areaId ="[{\"areaId\":\"5b28660e0a0a787a6629e343\",\"name\":\"锐捷网络-海西万福分部\",\"patternLen\":0,\"type\":\"proj\"},{\"areaId\":\"5b4ffe4e16706c54b3299b59\",\"name\":\"1231231231\",\"parentId\":\"5b28660e0a0a787a6629e343\",\"patternLen\":0,\"type\":\"ac\"},{\"areaId\":\"5c6384c2d9e6ec0d9eb15651\",\"name\":\"vac6512\",\"parentId\":\"5b28660e0a0a787a6629e343\",\"patternLen\":0,\"type\":\"ac\"},{\"areaId\":\"5ecf5358d7cfa43f6944075e\",\"name\":\"HX-10F-test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440760\",\"name\":\"yjg-test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944075f\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944075e\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440762\",\"name\":\"test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440761\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440760\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440763\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440762\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440764\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f69440762\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440765\",\"name\":\"VlanGroup-Test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440766\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440765\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440767\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f69440765\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944079c\",\"name\":\"default\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440768\",\"name\":\"wf-09\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944079d\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944079c\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440769\",\"name\":\"wf-02\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076a\",\"name\":\"wf-10\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076b\",\"name\":\"wf-10F-180-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076c\",\"name\":\"wf-10F-07-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076d\",\"name\":\"wf-10F-24-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076e\",\"name\":\"wf-10F-hys\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944076f\",\"name\":\"wf-10F-25-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440770\",\"name\":\"wf-10F-16-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440771\",\"name\":\"wf-10F-02-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440772\",\"name\":\"wf-10F-06-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440773\",\"name\":\"wf-10F-130\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440774\",\"name\":\"wf-10F-01-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440775\",\"name\":\"wf-10F-08-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440776\",\"name\":\"wf-10F-14-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944079e\",\"name\":\"--\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944079f\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440777\",\"name\":\"wf-10F-18-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a0\",\"name\":\"test\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440778\",\"name\":\"wf-10F-09-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407bc\",\"name\":\"HX-test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407a1\",\"name\":\"RAP\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440779\",\"name\":\"wf-10F-20-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a2\",\"name\":\"idc-\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407bd\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407bc\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407a3\",\"name\":\"WF-\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407be\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f694407bc\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944077a\",\"name\":\"wf-10F-13-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a4\",\"name\":\"630\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407bf\",\"name\":\"HX-APD\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944077b\",\"name\":\"wf-10F-11-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a5\",\"name\":\"C\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c0\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407bf\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407a6\",\"name\":\"wubingrong-\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944077c\",\"name\":\"wf-10F-27-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c1\",\"name\":\"wf-09F-AP\",\"parentId\":\"5ecf5358d7cfa43f694407bf\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a7\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944077d\",\"name\":\"wf-10F-17-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c2\",\"name\":\"wf-09F-APD-\",\"parentId\":\"5ecf5358d7cfa43f694407bf\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407a8\",\"name\":\"wf-10\",\"parentId\":\"5ecf5358d7cfa43f694407a7\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944077e\",\"name\":\"wf-10F-21-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c6\",\"name\":\"test1\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407a9\",\"name\":\"wf-10F-\",\"parentId\":\"5ecf5358d7cfa43f694407a8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944077f\",\"name\":\"wf-10F-12-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c7\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407c6\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407aa\",\"name\":\"wf-10F-05-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440780\",\"name\":\"wf-10F-19-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ab\",\"name\":\"wf-10F-07-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440781\",\"name\":\"wf-10F-26-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440782\",\"name\":\"wf-10F-03-\",\"parentId\":\"5ecf5358d7cfa43f6944076a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ac\",\"name\":\"wf-10F-24-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ad\",\"name\":\"wf-10F-02-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440783\",\"name\":\"wf-04\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ae\",\"name\":\"wf-10F-06-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440784\",\"name\":\"wf-11\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440785\",\"name\":\"wf-08\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407af\",\"name\":\"wf-10F-15-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b0\",\"name\":\"wf-10F-23-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440786\",\"name\":\"wf-03\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b1\",\"name\":\"wf-10F-08-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440787\",\"name\":\"wf-12\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b2\",\"name\":\"wf-10F-18-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b3\",\"name\":\"wf-10F-27-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440788\",\"name\":\"wf-06\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b4\",\"name\":\"wf-10F-17-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440789\",\"name\":\"wf-06F-01-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b5\",\"name\":\"wf-10F-130-\",\"parentId\":\"5ecf5358d7cfa43f694407a9\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078a\",\"name\":\"wf-06F-09-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b6\",\"name\":\"wf-10f-\",\"parentId\":\"5ecf5358d7cfa43f694407a8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078b\",\"name\":\"wf-06F-16-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b7\",\"name\":\"wf-03\",\"parentId\":\"5ecf5358d7cfa43f694407a7\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078c\",\"name\":\"wf-06F-12-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b8\",\"name\":\"wf-08\",\"parentId\":\"5ecf5358d7cfa43f694407a7\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078d\",\"name\":\"wf-06F-13-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407b9\",\"name\":\"wf-06\",\"parentId\":\"5ecf5358d7cfa43f694407a7\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078e\",\"name\":\"wf-06F-03-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ba\",\"name\":\"xxx-\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944078f\",\"name\":\"wf-06F-06-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407bb\",\"name\":\"AP\",\"parentId\":\"5ecf5358d7cfa43f6944079e\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440790\",\"name\":\"wf-06F-11-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440791\",\"name\":\"wf-06F-05-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440792\",\"name\":\"wf-06F-02-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440793\",\"name\":\"wf-06F-04-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440794\",\"name\":\"wf-06F-07-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440795\",\"name\":\"wf-06F-10-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440796\",\"name\":\"wf-06F-08-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440797\",\"name\":\"wf-06F-15-\",\"parentId\":\"5ecf5358d7cfa43f69440788\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440798\",\"name\":\"wf-07\",\"parentId\":\"5ecf5358d7cfa43f69440767\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440799\",\"name\":\"AP\",\"parentId\":\"5ecf5358d7cfa43f69440765\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944079a\",\"name\":\"WF-\",\"parentId\":\"5ecf5358d7cfa43f69440765\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944079b\",\"name\":\"ap\",\"parentId\":\"5ecf5358d7cfa43f69440765\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c3\",\"name\":\"HX-ST\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407c4\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407c3\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407e6\",\"name\":\"VlanGroup-Test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944081d\",\"name\":\"test3\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407c5\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f694407c3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e7\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407e6\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f6944081e\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944081d\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407e8\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f694407e6\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c8\",\"name\":\"--\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944081f\",\"name\":\"HX-APD\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407e9\",\"name\":\"wf-09\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407c9\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f69440820\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944081f\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407ea\",\"name\":\"wf-02\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ca\",\"name\":\"test\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440821\",\"name\":\"wf-09F-AP\",\"parentId\":\"5ecf5358d7cfa43f6944081f\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407eb\",\"name\":\"wf-10\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440825\",\"name\":\"HX\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440828\",\"name\":\"AP4220\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440822\",\"name\":\"wf-09F-APD-\",\"parentId\":\"5ecf5358d7cfa43f6944081f\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407cb\",\"name\":\"RAP\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ec\",\"name\":\"wf-10F-180-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440826\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440825\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f6944082a\",\"name\":\"test\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407ed\",\"name\":\"wf-10F-07-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440829\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440828\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407cc\",\"name\":\"idc-\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440827\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f69440825\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944082b\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944082a\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f6944082f\",\"name\":\"840\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f69440832\",\"name\":\"860\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f694407ee\",\"name\":\"wf-10F-24-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407cd\",\"name\":\"WF-\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944082c\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f6944082a\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440833\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440832\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407ef\",\"name\":\"wf-10F-hys\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440830\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944082f\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f694407ce\",\"name\":\"630\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f0\",\"name\":\"wf-10F-25-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440834\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f69440832\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440831\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f6944082f\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407cf\",\"name\":\"C\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f1\",\"name\":\"wf-10F-16-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d0\",\"name\":\"wubingrong-\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f2\",\"name\":\"wf-10F-02-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d1\",\"name\":\"wf-\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d2\",\"name\":\"wf-10\",\"parentId\":\"5ecf5358d7cfa43f694407d1\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f3\",\"name\":\"wf-10F-06-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d3\",\"name\":\"wf-10F-\",\"parentId\":\"5ecf5358d7cfa43f694407d2\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f4\",\"name\":\"wf-10F-130\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f5\",\"name\":\"wf-10F-01-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d4\",\"name\":\"wf-10F-05-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f6\",\"name\":\"wf-10F-08-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d5\",\"name\":\"wf-10F-07-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f7\",\"name\":\"wf-10F-14-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d6\",\"name\":\"wf-10F-24-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f8\",\"name\":\"wf-10F-18-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d7\",\"name\":\"wf-10F-02-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407f9\",\"name\":\"wf-10F-09-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407fa\",\"name\":\"wf-10F-20-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d8\",\"name\":\"wf-10F-06-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407d9\",\"name\":\"wf-10F-15-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407fb\",\"name\":\"wf-10F-13-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407da\",\"name\":\"wf-10F-23-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407fc\",\"name\":\"wf-10F-11-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407fd\",\"name\":\"wf-10F-27-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407db\",\"name\":\"wf-10F-08-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407fe\",\"name\":\"wf-10F-17-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407dc\",\"name\":\"wf-10F-18-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407ff\",\"name\":\"wf-10F-21-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440800\",\"name\":\"wf-10F-12-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407dd\",\"name\":\"wf-10F-27-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440801\",\"name\":\"wf-10F-19-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407de\",\"name\":\"wf-10F-17-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440802\",\"name\":\"wf-10F-26-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440803\",\"name\":\"wf-10F-03-\",\"parentId\":\"5ecf5358d7cfa43f694407eb\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407df\",\"name\":\"wf-10F-130-\",\"parentId\":\"5ecf5358d7cfa43f694407d3\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440804\",\"name\":\"wf-04\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e0\",\"name\":\"wf-10f-\",\"parentId\":\"5ecf5358d7cfa43f694407d2\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440805\",\"name\":\"wf-11\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e1\",\"name\":\"wf-03\",\"parentId\":\"5ecf5358d7cfa43f694407d1\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440806\",\"name\":\"wf-08\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e2\",\"name\":\"wf-08\",\"parentId\":\"5ecf5358d7cfa43f694407d1\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440807\",\"name\":\"wf-03\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e3\",\"name\":\"wf-06\",\"parentId\":\"5ecf5358d7cfa43f694407d1\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440808\",\"name\":\"wf-12\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e4\",\"name\":\"xxx-\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440809\",\"name\":\"wf-06\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f694407e5\",\"name\":\"AP\",\"parentId\":\"5ecf5358d7cfa43f694407c8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944080a\",\"name\":\"wf-06F-01-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440823\",\"name\":\"default\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944080b\",\"name\":\"wf-06F-09-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944080c\",\"name\":\"wf-06F-16-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440824\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f69440823\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f6944080d\",\"name\":\"wf-06F-12-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944082d\",\"name\":\"850\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5ecf5358d7cfa43f6944080e\",\"name\":\"wf-06F-13-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944082e\",\"name\":\"NotAssigned\",\"parentId\":\"5ecf5358d7cfa43f6944082d\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5ecf5358d7cfa43f6944080f\",\"name\":\"wf-06F-03-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440810\",\"name\":\"wf-06F-06-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440811\",\"name\":\"wf-06F-11-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440812\",\"name\":\"wf-06F-05-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440813\",\"name\":\"wf-06F-02-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440814\",\"name\":\"wf-06F-04-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440815\",\"name\":\"wf-06F-07-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440816\",\"name\":\"wf-06F-10-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440817\",\"name\":\"wf-06F-08-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440818\",\"name\":\"wf-06F-15-\",\"parentId\":\"5ecf5358d7cfa43f69440809\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f69440819\",\"name\":\"wf-07\",\"parentId\":\"5ecf5358d7cfa43f694407e8\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944081a\",\"name\":\"AP\",\"parentId\":\"5ecf5358d7cfa43f694407e6\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944081b\",\"name\":\"WF-\",\"parentId\":\"5ecf5358d7cfa43f694407e6\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5ecf5358d7cfa43f6944081c\",\"name\":\"ap\",\"parentId\":\"5ecf5358d7cfa43f694407e6\",\"patternLen\":0,\"type\":\"area\"},{\"areaId\":\"5efdb4041dd0ba130e3a3bc3\",\"name\":\"test-ccx\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5efdb4041dd0ba130e3a3bc4\",\"name\":\"NotAssigned\",\"parentId\":\"5efdb4041dd0ba130e3a3bc3\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5efee27fd061d71191beb5ac\",\"name\":\"wf-ipv6\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5efee27fd061d71191beb5ad\",\"name\":\"NotAssigned\",\"parentId\":\"5efee27fd061d71191beb5ac\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5efee27fd061d71191beb5ae\",\"name\":\"wf-ipv6\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5efee27fd061d71191beb5af\",\"name\":\"NotAssigned\",\"parentId\":\"5efee27fd061d71191beb5ae\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5f1003bf38566cd5a9bd1541\",\"name\":\"ap820-2\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5f1003c038566cd5a9bd1546\",\"name\":\"NotAssigned\",\"parentId\":\"5f1003c038566cd5a9bd1545\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5f1003c038566cd5a9bd1545\",\"name\":\"ap820-1\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5f1003c038566cd5a9bd1543\",\"name\":\"ap820-3\",\"parentId\":\"5c6384c2d9e6ec0d9eb15651\",\"patternLen\":0,\"type\":\"group\"},{\"areaId\":\"5f1003bf38566cd5a9bd1542\",\"name\":\"NotAssigned\",\"parentId\":\"5f1003bf38566cd5a9bd1541\",\"patternLen\":0,\"type\":\"areaFix\"},{\"areaId\":\"5f1003c038566cd5a9bd1544\",\"name\":\"NotAssigned\",\"parentId\":\"5f1003c038566cd5a9bd1543\",\"patternLen\":0,\"type\":\"areaFix\"}]"

module.exports={
  projectlist,
  deviceNum,
  staNFlow,
  areaAccFlow,
  lastAraStaNum,
  riskList,
  areaId,
}
