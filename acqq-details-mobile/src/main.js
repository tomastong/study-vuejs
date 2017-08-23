// 配置的入口文件，也就是index.html打开就加载这个页面，路由设置什么的，都在这个页面
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
// 这里是定义路由需要，不是app.vue需要，app.vue需要的话已经在内部引用过
import head from './components/header/header';
import dev from './components/dev/dev';
import menu from './components/menu/menu';
import tall from './components/tall/tall';

Vue.use(VueRouter);
Vue.use(VueResource);


let app = Vue.extend(App);

let router = new VueRouter({
  // 主要是这里控制选项卡active的名字，标签里面的没用
  linkActiveClass:'active' //改变v-link点击后默认v-link-active的类名
});

router.map({
  '/dev':{
    component:dev
  },
  '/menu':{
    component:menu
  },
  '/tall':{
    component:tall
  }
});

router.start(app,'#app');

// router.go('/dev');  入口可以改变，但是运行指令还是npm run dev
// router.go('/menu');
router.go('/tall');
