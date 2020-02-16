import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../view/HelloWorld.vue'
import Liste from './../components/Liste.vue'
import Infos from './../view/Infos.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/Infos', component: Infos },
        { path: '/detail/:id', component: Liste },
    ]
})