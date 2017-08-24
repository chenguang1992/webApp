<template>
  <transition name="slide">
	 <div class="list">
	   <div class="header">
			<div class="back" @click="back">
				<span class="icon-back"><</span>
			</div>
		   <h1 class="title">{{title}}</h1>
		</div>  
		<div class="bgImg"><img :src="bgImg" width="100%" height="320" /></div>
		<div class="content">
			<div class="songName">
				<ul>
					<li class="songName_li" v-for="(item,index) in songList.songName" @click="select(item,index)">{{index+1}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="songName_a" href="javascript:void(0)">{{item}}</a></li>
				</ul>
			</div> 		  
		  <div class="singerName">
		  	<ul>
		  		<li class="singerName_li" v-for="item in songList.singerName">--{{item}}</li>
		  	</ul>
		  </div>
		</div>
	 </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
 
  export default {
	data() {
	  return {
			songList: {
				iconImg: [],
				singerName: [],
				songName: [],
				audioUrl: []
			},
			selectUrl: ''
	  }
	},
	created() {
		this._normalize()
	},
	computed: {
		title() {
			return this.get_listname.ListName
		},
		bgImg() {
			return this.get_listname.pic_v12
		},
		...mapGetters([
			'get_listname',
			'get_detaillist'
		])
	},
	methods: {
		back() {
			this.$router.back()
		},
		select(item,index) {
			this.selectUrl = this.songList.audioUrl[index]

			this.set_playing_name(item)
			this.set_playing_imgsrc(this.songList.iconImg[index])
			this.set_playing_singer(this.songList.singerName[index])
			this.set_playing_show(true)
			this.set_playing_url(this.selectUrl)
		},
		_normalize() {
			this.get_detaillist.forEach((item) => {
				let albummid = item.data.albummid
				let imgsrc = 'https://y.gtimg.cn/music/photo_new/T002R90x90M000'+ albummid +'.jpg'
				let name = item.data.singer[0].name

				let songid = item.data.songid
				let audioUrl = 'http://ws.stream.qqmusic.qq.com/'+songid+'.m4a?fromtag=46'
				this.songList.iconImg.push(imgsrc)
			   this.songList.singerName.push(name)
			   this.songList.songName.push(item.data.songname)
			   this.songList.audioUrl.push(audioUrl)
			})
		},
		...mapMutations([
			'set_playing_name',
			'set_playing_imgsrc',
			'set_playing_singer',
			'set_playing_show',
			'set_playing_url'

	    ])
	}
  }
</script>

<style scoped>
	.list {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		bottom: -5px;
		right: 0;
		background: white;
		color: black;
		overflow: scroll;
	}
	.header {
		position: fixed;
		z-index: 100;
		width: 100%;
		background: #d43c33;
	}
	.slide-enter,.slide-leave-to {
		opacity: 0;
	}
	.slide-enter-active,.slide-leave-active {
		transition: all 0.3s;
	}
	.back {
		display: inline-block;
		padding: 12px 0 12px 15px;
	}
	.icon-back {
		width: 20%;
		color: white;
		font-size: 24px;
		font-weight: bold;
	}
	.title {
		width: 80%;
		display: inline-block;
		text-align: center;
		color: white;

	}
	.content {
	  display: flex;
		width: 100%;
	}
	.songName {
		flex: 1;
	}
	.songName_li,.singerName_li {
		width: 250px;
		padding: 5px;
		height: 35px;
		line-height: 35px;
		border:0;
	}
	.singerName_li{
		color: black;
		font-size: 15px;
	}
	.singerName {
		flex: 1;
		
	}
	.songName_a {
		color: black;
	}
	.songName_a:hover {
		color:red;
	}
</style>