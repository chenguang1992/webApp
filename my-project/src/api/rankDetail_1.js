import jsonp from '@/common/js/jsonp'

export function getRankDetail_two() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = {   
    tpl:3,
    page:"detail",
   // date:"2017_33",
    topid:26,
    type:"top",
    song_begin:0,
    song_num:30,
    g_tk:5381,
    //jsonpCallback:MusicJsonCallbacktoplist
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
    param: 'jsonpCallback'
  }

  return jsonp(url, data, options)
}




