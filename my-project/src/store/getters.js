//取出state里面的数据
const getters = {
	get_listname: state => {
		return state.listName
	},
	//排行榜详情页
	get_detaillist: state => {
		return state.detailList
	},
	get_playing_name: state => {
		return state.playingName
	},
	get_playing_imgsrc: state => {
		return state.playingImgsrc
	},
	get_playing_singer: state => {
		return state.playingSinger
	},
	get_playing_show: state => {
		return state.playingShow
	},
	get_playing_url: state => {
		return state.playingUrl
	}
   

	// get_playlist: state => {
	// 	return state.playlist
	// }
	// get_fullscreen: state => {
	// 	return state.fullScreen
	// },
	// palying: state => {
	// 	state.palying
	// },
	// fullScreen: state => {
	// 	state.fullScreen
	// },
	// playlist: state => {
	// 	state.playlist
	// },
	// sequenceList: state => {
	// 	state.sequenceList
	// },
	// mode: state => {
	// 	state.mode
	// },
	// currentIndex: state => {
	// 	state.currentIndex
	// },
	// currentSong: state => {
	// 	return state.playlist[state.currentIndex] || {}
	// }
}

export default getters 