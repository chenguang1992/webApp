import jsonp from '@/common/js/jsonp'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = {   
    channel:"singer",
    page:"list",
    key:"all_all_all",
    pagesize:100,
    pagenum:1,
    g_tk:5381,
    loginUin:0,
    hostUin:0,
    format:"jsonp",
    inCharset:"utf8",
    outCharset:"utf-8",
    notice:0,
    platform:"yqq",
    needNewCode:0
  }

  const options = {
    //插件jsonp里面的规定的param字段
    param: 'jsonpCallback'
  }

  return jsonp(url, data, options)
}

