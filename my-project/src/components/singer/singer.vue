<template> 
  <div class="singer">
  	<ul>
  		<li v-for="group in singers" class="list-group">
				<h2 class="list-group-title">{{group.title}}</h2>
				<ul>
					<li v-for="item in group.items" class="list-group-item">
						<img class="img" :src="item.img"/>
						<span class="name" @click="selectSinger(item)">{{item.name}}</span>
					</li>
				</ul>
			</li>
		</ul>
		<div class="list-shortcut">
			<ul>
				<li class="item" v-for="group in singers">{{group.title}}</li>
			</ul>
		</div>
  </div>
</template>

<script>
  import {getSingerList} from "@/api/SingerList"

  export default {
  	data() {
	  	return {
		    singers: []
		  }
  	},
  	created() {
  		this._getSingerList()
  	},
  	methods: {
      selectSinger(singer){
        this.$router.push({
          path: '/singer/'+singer.id
        })
      },
  	  _getSingerList() {
	  		getSingerList().then((res) => {
	  			if(res.code === 0){
	  				this.singers=this._nomalizeSinger(res.data.list)
	  			}
  			})
  		},
  		_nomalizeSinger(list) {
  			let map = {
  				hot: {
  					title: "热门",
  					items: []
  				}
  			}		
  			list.forEach((item,index) => {
  				if(index < 10){
  					map.hot.items.push({
  						id: item.Fsinger_id, 
  						name: item.Fsinger_name,
  						img: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000' + item.Fsinger_mid + '.jpg?max_age=2592000'
  					})
  				}
  		 		const key=item.Findex
  				if(!map[key]){
  					map[key]={
  						title: key,
  						items: []
  					}
  				}
  				map[key].items.push({
  					id: item.Fsinger_id, 
  					name: item.Fsinger_name,
  					img: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000' + item.Fsinger_mid + '.jpg?max_age=2592000'
  				})
  			})
  			//得到有序列表
  			let hot=[]
  			let ret=[]
  			for(let key in map){
  				let val=map[key]  //也就是map.hot和另一个
  				if(val.title.match(/[a-zA-Z]/)){
  					ret.push(val)
  				}else if(val.title === '热门'){
  					hot.push(val)
  				}
  			}
  			ret.sort((a,b) => {
  				return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  			})
  			return hot.concat(ret)
  		}
  	}
  }
</script>

<style scoped>
  .singer {
  	position: relative;
  	top: 88px;
  	bottom: 0;
  	width: 100%;
  	background: white;
  }
  .list-group {
  	padding-bottom: 30px;
  }
  .list-group-title {
  	height: 30px;
  	line-height: 30px;
  	padding-left: 10px;
  	font-size: 16px;
    font-weight: bold;
  	color: #d43c33;
    border-left-color: #d43c33;
    border-left-style: solid;
    border-left-width: 2px;


  }
  .list-group-item {
  	display: flex;;
  	align-items: center;
  	padding: 20px 0 0 30px;
  }
  .img {
  	width: 50px;
  	height: 50px;
  	border-radius: 50%;
  }
  .name {
  	margin-left: 20px;
  	color: black;
  	font-size: 16px;
  }
  .list-shortcut {
  	position: fixed;
  	z-index: 1;
  	right: 0;
  	top: 45%;
  	transform: translateY(-37%);
  	width: 20px;
  	padding: 20px 0;
  	border-radius: 10px;
  	text-align: center;
  	background: rgba(0, 0, 0, 0.03);
  }
  .item {
  	padding: 3px;
  	line-height: 1;
  	color: black;
  	font-size: 12px;
  }
</style>