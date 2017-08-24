//将singer的值写入
const mutations = {
	set_listname: (state,val) => {
		state.listName = val
	},
	//排行榜详情页
	set_detaillist: (state,val) => {
		state.detailList = val
	},
	//点击了正在播放的歌名
	set_playing_name: (state,val) => {
		state.playingName = val
	},
	//点击了正在播放的封面图链接
    set_playing_imgsrc: (state,val) => {
    	state.playingImgsrc = val
    },
    //点击了正在播放的歌手名
    set_playing_singer: (state,val) => {
    	state.playingSinger = val
    },
    //点击了传个true是播放器展开
    set_playing_show: (state,val) => {
    	state.playingShow = val
    },
    //点击了播放歌曲的url
    set_playing_url: (state,val) => {
    	state.playingUrl = val
    }





	// set_palying_state: (state,flag) => {
	// 	state.playing = flag
	// },
	// set_full_screen: (state,flag) => {
	// 	state.fullScreen = flag
	// },
	// set_palylist: (state,list) => {
	// 	state.playlist = list
	// },
	// set_sequence_list: (state,list) => {
	// 	state.sequenceList = list
	// },
	// set_paly_mode: (state,mode) => {
	// 	state.mode = mode
	// },
	// set_current_index: (state,index) => {
	// 	state.currentIndex = index
	// }
}

export default mutations 