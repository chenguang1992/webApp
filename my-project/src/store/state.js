 const palyMode = {
	sequence: 0,
	loop: 1,
	random: 2
}

const state = {
	//排行榜
	listName: {},
	//排行榜detail
    detailList: [],
    //正在播放的歌曲名
    playingName: '',
    //正在播放的封面图链接
    playingImgsrc: '',
    //正在播放的歌手
    playingSinger: '',
    //展开播放器
    playingShow: '',
    //正在播放歌曲的url
    playingUrl: ''


	// playing: false,
	// fullScreen: [],	
	// sequenceList: [],
	// mode: palyMode.sequence,
	// currentIndex: -1
}
 export default state