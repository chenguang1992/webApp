<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">
    	<a :href="slide.linkUrl"><img :src="slide.picUrl"></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script scoped> 
  export default {
    name: 'carousel',
    props: {
    	swiperSlides: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction: false
        }
        //swiperSlides: []
      }
    }
   //  created() {
  	// 	this._getRecommend()
  	// },
  	// methods: {
  	// 	_getRecommend() {
  	// 		getRecommend().then((res) => {
  	// 			if(res.code === 0){
  	// 				this.swiperSlides=res.data.slider 
  	// 			}
  	// 		})
  	// 	}
   //  }
  }
</script>

<style>
  img {
  	display: block;
  	width: 100%;
  }
</style>