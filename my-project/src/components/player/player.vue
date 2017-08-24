<template>
   <transition name="slide">
		<div class="player" v-show="this.get_playing_show">
			<div class="header">
				<!-- <div class="back-icon" @click="playerHidden"></div> -->
				<div class="play-img"><img :src="get_playing_imgsrc"></div> 
				<div class="play-content">					
					{{get_playing_name}}<br/>
					{{get_playing_singer}}					
				</div>
				<div :class="playing_css_control" @click="palyingControl"></div>
				<span class="icon-undo2"></span>
			</div>

			<div class="bottom">
				<div class="progress-wrapper">
					<span class="time time-l">{{format(currentTime)}}</span>
					<div class="progress-bar-wrapper">
						<div class="progress-bar" ref="progressBar">
							<div class="bar-inner">
								<div class="progress" ref="progress"></div>
							</div>
						</div>
					</div>
					<span class="time time-r">{{format(duration)}}</span>
				</div>
			</div>

			<audio ref="audio" :src="get_playing_url" autoplay="autoplay" @timeupdate="updateTime" @canplay="songDuration"></audio>
		</div>
	</transition>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

	export default {
	  data() {
	  	return {
	     playing_css_control: 'playing',
	     duration: '',
	     currentTime: 0
	  	}
	  },
	  watch: {
	  	percent(newPercent) {
	  		if(newPercent >= 0) {
	  			const barWidth = this.$refs.progressBar.clientWidth
	  			const offsetWidth = newPercent * barWidth
	  			this.$refs.progress.style.width = offsetWidth+'px'
	  		}
	  	}
	  },
	  computed: {
	  	percent() {
	  		return this.currentTime/this.duration 
	  	},
	  	...mapGetters([
	  		'get_playing_name',
	  		'get_playing_imgsrc',
	  		'get_playing_singer',
	  		'get_playing_show',
	  		'get_playing_url'
	  	])
	  },
	  methods: {
	  	songDuration() {
	  		const times = this.$refs.audio.duration
	  		this.duration = times
	  	},
	  	palyingControl() {
	  		if(!this.$refs.audio.paused){
	  			this.playing_css_control = 'pause'
	  			this.$refs.audio.pause()
	  		}else {
	  			this.$refs.audio.play()
	  			this.playing_css_control = 'playing'
	  		}
	  	},
	  	playerHidden() {
	  		this.set_playing_show('')
	  		this.$refs.audio.pause()

	  	},
	  	updateTime(e) {
	  	  this.currentTime = e.target.currentTime
	  	},
	  	format(interval) {
	  		interval = interval | 0
	  		const minute = interval/60 | 0
	  		const second = this.pad(interval % 60)
	  		return minute+':'+second
	  	},
	  	pad(num,n=2) {
	  		let len = num.toString().length
	  		while(len < n) {
	  			num = '0' + num
	  			len++
	  		}
	  		return num
	  	},
	  	...mapMutations([
	  		'set_playing_show'
	  	])
	  }
	}
</script>

<style scoped>
	.player {
		position: fixed;
		left: 0;
		right: 0;
		top: 592px;
		bottom: 0; 
		z-index: 150;
		background: rgba(0,0,0,0.8);
	}
	.slide-enter,.slide-leave-to {
		opacity: 0;
	}
	.slide-enter-active,.slide-leave-active {
		transition: all 0.25s;
	}
	.header {
		display: flex;
		background: rgba(255,255,255,0.96);
		font-size: 14px;
		font-weight: normal;

	}
	/*.back-icon {
		width: 40px;
		height: 40px;
		background: url('./back.jpg');
	}*/
	.play-img img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.play-content {
		flex: 1;
		height: 40px;
		color: black;
		letter-spacing: 2px;
		padding: 23px 0 0 25px;
		font-family: Arial;
		font-size: 14px;
	}
	.playing {
		width: 40px;
		height: 40px;
		flex: 0 0 40px;
		background: url('./pause.jpg');
		margin: 15px 20px 0 0;
	}
	.pause {
		background: url('./play.jpg');
		width: 40px;
		height: 40px;
		flex: 0 0 40px;
		margin: 16px 19px 0 0;
	}
	.bottom {
		position: absolute;
		right: 2px;
		bottom: -5px;
		width: 75%;
		
		
	}
	.progress-wrapper {
		display: flex;
	}
	.time {
		color:black;
		line-height: 30px;
	}
	.progress-bar {
		height: 30px;
	}
	.bar-inner {
		position: relative;
		top: 13px;
		height:4px;
		background: rgba(0,0,0,0.2);
	}
	.progress-bar-wrapper{
		width: 100%;
	}
	.progress {
		position: absolute;
		height: 100%;
		/*滚动条样式*/
		background: red;
	}
</style>

