import Vue from 'vue'
import Router from 'vue-router'
import Fund from 'pages/fund'
import FundIndex from 'pages/fund-index'
import FundCompare from 'pages/fund-compare'
import TemplateCustom from 'pages/template-custom'
import detailsIndex from 'pages/productDetails/index'
import detailsOne from 'pages/productDetails/detailsOne'
import detailsTwo from 'pages/productDetails/detailsTwo'
import detailsThree from 'pages/productDetails/detailsThree'
import detailsFour from 'pages/productDetails/detailsFour'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //路由默认跳转
      redirect: '/fund/index'
    },{
      path: '/fund',
      name: 'fund',
      component: Fund,
      children:[
        {
          path: '/fund/index',
          name: 'fundIndex',
          component: FundIndex
        },{
          path: '/fund/compare',
          name: 'fundCompare',
          component: FundCompare
        }
      ]
    },{
      path: '/templateCustom',
      name: 'templateCustom',
      component: TemplateCustom
    },
    {
      path: '/detailsIndex',  //产品详情
      name: 'detailsIndex',
      component: detailsIndex,
      children:[
        {
          path: '/detailsOne',
          name: 'detailsOne',
          component: detailsOne
        },
        {
          path: '/detailsTwo',
          name: 'detailsTwo',
          component: detailsTwo
        },
        {
          path: '/detailsThree',
          name: 'detailsThree',
          component: detailsThree
        },
        {
          path: '/detailsFour',
          name: 'detailsFour',
          component: detailsFour
        }
      ]
    },
  ]
})
