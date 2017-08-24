<template>
  <div class="tab">
  	<!-- tag:把router-link渲染为一个div标签 -->
  	<router-link tag="div" class="tab-item" to="/recommend">
  	  <span class="tab-link">推荐音乐</span>
  	</router-link>
  	<!-- <router-link tag="div" class="tab-item" to="/singer">
  	  <span class="tab-link">歌手</span>
  	</router-link> -->
  	<router-link tag="div" class="tab-item" to="/rank">
  	  <span class="tab-link">排行榜</span>
  	</router-link>
  	<router-link tag="div" class="tab-item" to="/search">
  	  <span class="tab-link">搜索</span>
  	</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .tab {
  	display: flex;
  	height: 44px;
  	line-height: 44px;
  	font-size: 14px;
  }
  .tab-item {
  	flex: 1;
  	text-align: center;
  }
  .tab-link {
  	padding-bottom: 5px;
  	color: rgb(0, 0, 0);
  }
  .router-link-active .tab-link {
  	color: #d43c33;
  	border-bottom: 2px solid #d43c33;
  }
</style>