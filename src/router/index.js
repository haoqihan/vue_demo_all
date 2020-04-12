import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'
import TestWorld2 from '@/components/TestWorld2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/test",
      children: [
        {
          path: '/test',
          name: 'Test',
          component: TestWorld
        },
        {
          path: '/test2',
          name: 'Test2',
          component: TestWorld2
        }
      ]
    }
  ]
})
