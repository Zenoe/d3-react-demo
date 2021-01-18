import locationImg from '@/assets/images/location.png';

import hrisk from '@/assets/images/hrisk.png';
import mrisk from '@/assets/images/mrisk.png';
import lrisk from '@/assets/images/lrisk.png';

const ProjectState = Object.freeze({
  'HIGH_RISK': 'hrisk',
  'MID_RISK': 'mrisk',
  'LOW_RISK': 'lrisk',
  'NEGLECT' : 'neglect',
})

const ProjectStateContent = theme => (Object.freeze({
  [ ProjectState.HIGH_RISK ]: {
    text:'有风险',
    img: hrisk,
    bgColor: theme.palette.message.error,
  },
  [ ProjectState.MID_RISK ]:{
    text: '已预约',
    img: mrisk,
    bgColor: theme.palette.message.warning,
  },
  [ ProjectState.LOW_RISK ]:{
    text:  '已处理',
    img: lrisk,
    bgColor: theme.palette.message.info,
  },
  [ ProjectState.NEGLECT ]:{
    text:  '已忽略',
    img: lrisk,
    bgColor: theme.palette.message.subinfo,
  },
}))

const crumbs = {
  '我的项目':
  {
    title: '我的项目',
    href: '/afu/projects',
    imgsrc: locationImg,
  },
  '项目详情':
  {
    title: '项目详情',
    href: '/afu/projectdetail',
  },
  '问题详情':
  {
    title: '问题详情',
    href: '/afu/problemdetail',
  },
  '一键网优':
  {
    title: '一键网优',
    href: '/afu/onekeyopt',
  },
  '已处理风险':
  {
    title: '已处理风险',
    href: '/afu/processedrisk'
  },
  '已预约处理风险':
  {
    title: '已预约处理风险',
    href: '/afu/reservedrisk'
  },
  '预约网优':
  {
    title: '预约网优',
    href: '/afu/appointoptimize'
  },
  '网优结果':
  {
    title: '网优结果',
    href: '/afu/optresult',
  },
  '风险详情':
  {
    title: '风险详情',
    href: '/afu/riskdetail',
  },
}

const projectPageLen = 20;

export { ProjectState, ProjectStateContent, crumbs, projectPageLen};
