<template>
  <div id="app">
    <div class="fixed">
      <myHeader></myHeader>
      <tab></tab>
    </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <player></player>
  </div>
</template>

<script>
import myHeader from './components/myHeader/myHeader'
import Tab from './components/tab/tab'
import Player from './components/player/player'

export default {
  name: 'app',
  //把上面引入过来的myHeader组件通过使用组件实例选项注册，可以使组件仅在另一个实例/组件的作用域中可用：
  components: {
    myHeader,
    Tab,
    Player
  }
}
</script>

<style>
  @import './reset.css';
  .fixed {
    background: white;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1
  }
</style>
