import jsonp from '@/common/js/jsonp'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = {   
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
	  outCharset: 'utf-8',	
	  notice: 0,
  	platform: 'h5',
  	needNewCode: 1
  }

  const options = {
    param: 'jsonpCallback'
  }

  return jsonp(url, data, options)
}

