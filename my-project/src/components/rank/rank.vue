<template>
	<div class="rank">
		<div class="toplist">
			<ul>
				<li class="item" v-for="(items,index) in topList" @click="slectItem(items,index)">
					<div class="icon">
					  <img width="100" height="100" :src="items.pic_v12">
					</div>
					<ul class="songlist">
						<li class="song" v-for="item in items.songlist">
							<span>{{item.songname}}</span>
							<span>--{{item.singername}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
  import {getRankList} from '@/api/rankList.js'
  import {getRankDetail_one} from '@/api/rankDetail_0.js'
  import {getRankDetail_two} from '@/api/rankDetail_1.js'
  import {getRankDetail_three} from '@/api/rankDetail_2.js'
  import {getRankDetail_four} from '@/api/rankDetail_3.js'
  import {mapMutations} from 'vuex'

	export default {
		data() {
      return {
        topList: [],
        topDetailList: []
      }
    },
    created() {
      this._getRankList()   
      this._getRankDetail_one()
      this._getRankDetail_two()
      this._getRankDetail_three()
      this._getRankDetail_four()
    },
    methods: {
      _getRankList() {
        getRankList().then((res) => {
          if(res.code === 0) {
            this.topList=res.data.toplist
          }
        })
      },
      _getRankDetail_one() {
      	getRankDetail_one().then((res) => {
      	  if(res.code === 0) {
      	  	this.topDetailList[0] = res.songlist
      	  }
      	}) 
      },
      _getRankDetail_two() {
      	getRankDetail_two().then((res) => {
      	  if(res.code === 0) {
      	  	this.topDetailList[1] = res.songlist
      	  }
      	})
      },
      _getRankDetail_three() {
      	getRankDetail_three().then((res) => {
      	  if(res.code === 0) {
      	  	this.topDetailList[2] = res.songlist
      	  }
      	})
      },
      _getRankDetail_four() {
      	getRankDetail_four().then((res) => {
      	  if(res.code === 0) {
      	  	this.topDetailList[3] = res.songlist
      	  }
      	})
      },
      slectItem(items,index) {
      	this.$router.push({
      		path: '/rank/'+items.listennum
      	})
      	this.set_listname(items)
      	this.set_detaillist(this.topDetailList[index])
      },
      ...mapMutations([
      	'set_listname',
      	'set_detaillist'
      ])
    }
	}
</script>

<style scoped>
	.rank {
		position: fixed;
		width: 100%;
		top: 88px;
		bottom: 0;
		background: white;
		z-index: 1
	}
	.toplist {
		height: 100%;
		overflow: hidden;
	}
	.item {
		display: flex;
		margin: 0 20px;
		padding-top: 20px;
		height: 100px;
	}
	.item:last-child {
		padding-bottom: 20px;
	}
	.icon {
		flex: 0 0 100px;
		width: 100px;
		height: 100px;
	}
	.songlist {
		flex: 1;
		flex-direction: column;
		justify-content: center;
		padding: 0 20px;
		height: 100px;
		overflow: hidden;
		background: rgba(0,0,0,0.03);
		font-size: 12px;
	}
	.song {
		text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px 0;
		font-size: 14px;
		line-height: 15px;
		color: black;
	}
</style>