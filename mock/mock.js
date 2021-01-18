const path = require('path')
const utils = require('../config/utils')

const dataFolder = path.resolve(__dirname, './data')

const postStubsArray = utils.findSync(dataFolder, ['json']).map(dir=>(require(dir)))

const handlerize = (v)=>{
  if(typeof v !== "function")
	return function(req, res){
	  res.json(v)
	}
  return v;
}

module.exports = function(app) {
  /* app 是 express 创建的一个应用 */

  const API_URL = '/afu/api'
  postStubsArray.forEach(postStubs=>{
	Object.keys(postStubs).forEach(url=>{
	  const method = url.substring(0,4).toLowerCase();
	  if(method.startsWith('get')){
		app.get(`${API_URL}/${url.substring(3).trim()}`, handlerize(postStubs[url]))
	  }else if(method.startsWith('post')){
		app.post(`${API_URL}/${url.substring(4).trim()}`, handlerize(postStubs[url]))
	  }
	  else{
		// default to be post
		app.post(`${API_URL}/${url}`, handlerize(postStubs[url]))
	  }
	})
  })

  // app.post('/api/areaFlow/getStaNumByProjectId', function(req, res){
  // 	res.json(684)
  // })

  // put
  // app.put('/create/:id', function(req, res) {
  // 	// /create/:id => req.params => { id }
  // 	res.json('更新成功');
  // });
}
