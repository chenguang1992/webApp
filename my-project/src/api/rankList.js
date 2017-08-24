import jsonp from '@/common/js/jsonp'

export function getRankList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

  const data = {   
    format:"jsonp",
	tpl:"v12",
	page:"other",
	//callback:'GetRecomListCallback3849604831505682',
	rnd:3849604831505682,
	g_tk:5381,
	//jsonpCallback:'GetRecomListCallback3849604831505682',
	loginUin:0,
	hostUin:0,
	format:"jsonp",
	inCharset:"utf8",
	outCharset:"GB2312",
	notice:0,
	platform:"yqq",
	needNewCode:0
  }

  const options = {
    param: 'jsonpCallback'
  }

  return jsonp(url, data, options)
}




