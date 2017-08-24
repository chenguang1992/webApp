<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider :swiperSlides="recommendList"></slider>
      </div>
      <div class="recommend-list" v-if="recommendList.length>0">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li v-for="item in songList" class="item">
            <div class="icon">
              <img :src="item.picUrl" width="60" height="60" />
            </div>
            <div class="text">
              <p class="name">{{item.songListDesc}}</p> 
              <p class="desc">{{item.songListAuthor}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRecommend} from '@/api/recommend.js'
  import Slider from '@/components/slider/slider'

  export default {
    name: 'recommend',  
    components: {
      Slider
    },
    data() {
      return {
        recommendList: [],
        songList: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if(res.code === 0){
            this.recommendList=res.data.slider
            this.songList=res.data.songList
          }
        })
      }
    }
  }
</script>

<style scoped>
  .recommend {
    position: relative;
    top: 88px;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 0;
  }
  .list-title {
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #d43c33;
  }
  .item {
    display: flex;
    box-sizing: border-box;;
    align-items: center;
    padding: 0 20px 20px 20px;
  }
  .icon {
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    font-size: 14px;
  }
  .name {
    margin-bottom: 10px;
    color: black;
  }
  .desc {
    color: black;
  }
  
</style>
