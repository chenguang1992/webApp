<template>
	<div class="myHeader">
		<div class="icon"></div>
		<h1 class="text">HXX的音乐屋</h1>
	</div>
</template>

<scirpt>
  export default {}
</scirpt>

<style scoped>
  .myHeader {
  	position: relative;
  	height: 44px;
  	text-align: center;
    background: #d43c33;
  }
  .icon {
  	display: inline-block;
  	vertical-align: top;
  	margin-top: 6px;
  	width: 35px;
  	height: 35px;
  	margin-right: 5px;
  	background: url('./logo.png');
  	background-size: 35px 35px;
  }
  .text{
  	display: inline-block;
  	line-height: 44px;
  	font-size: 18px;
  	color: white;
  }
</style>