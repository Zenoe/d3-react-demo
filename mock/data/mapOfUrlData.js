
const {areaId, projectlist, deviceNum, staNFlow, lastAraStaNum, areaAccFlow, riskList } = require('./json/project')

/*
 * key: [post/get][space]url
 * post 和 get省略的话默认为post
 * value: 请求对应URL要返回的数据
 * value也可为函数: function(req, res){...}
 */
const mappings = {
  'projectList/infos': projectlist,
  'post device/getDeviceNum': deviceNum,
  'risk/projectTag': '有风险',
  'areaFlow/getStaNumByProjectId': 684,
  'device/apOfflineCnt': {"apOfflineCnt" : "3"},
  'User/getLastAreaStaNum': lastAraStaNum,
  'User/getAreaAccumulateFlow': areaAccFlow,
  'risk/optStatus': optStatus,
  'autoOptConfig/saveAutoOptConfigInfo': applyOpt,
  'autoOptConfig/removeAutoOptConfigByAc': cancelApply,
  'risk/optResult': optResult,
  'risk/riskList': riskList,
  'area/getAreaByProjId': areaId,
}

module.exports= mappings
