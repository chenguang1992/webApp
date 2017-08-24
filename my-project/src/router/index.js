import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'

//子路由
import RankDetail from '@/components/rankDetail/rankDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	redirect: "/recommend"
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
    	path: '/rank',
    	component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
    	path: '/search',
    	component: Search
    }
  ]
})
