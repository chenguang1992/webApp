 import originJsonp from 'jsonp'

//这里暴露了一个封装好的jsonp方法
//url是路径，data是参数，option是要传给originJsonp的回调函数
export default function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

	return new Promise((resolve, reject) => {
		originJsonp(url, option, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}

export function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
