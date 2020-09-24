import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import index from '../components/index/index.vue'
import footer from '../components/index/footer.vue'
import course from '../components/index/course.vue'
import release from '../components/index/release.vue'
import detail from '../components/index/detail.vue'
import poster from '../components/index/poster.vue'
import task from '../components/index/task.vue'
import mytask from '../components/mytask/mytask.vue'
import setmeal from '../components/setmeal/setmeal.vue'
import personal from '../components/personal/personal.vue'
import financial from '../components/personal/financial.vue'
import issue from '../components/personal/issue.vue'
import manage from '../components/personal/manage.vue'
import issuedetail from '../components/personal/issuedetail.vue'
import withdraw from '../components/personal/withdraw.vue'
import record from '../components/personal/record.vue'
import forget from '../components/login/forget.vue'
import taskdetail from '../components/mytask/taskdetail.vue'
import weblogin from '../components/pc/weblogin.vue'
import webindex from '../components/pc/webindex.vue'
import recharge from '../components/personal/recharge.vue'
import orderlist from '../components/personal/orderlist.vue'
import copys from '../components/personal/copys.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
	  path:'/orderlist',
	  name:'orderlist',
	  component:orderlist
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/weblogin',
    name: 'weblogin',
    component: weblogin
  },
  {
    path: '/webindex',
    name: 'webindex',
    component: webindex
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: recharge
  },
  {
    path: '/release',
    name: 'release',
    component: release,
    meta: {
      islg: true
    },
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {
      islg: true
    },
  },
  {
    path: '/poster',
    name: 'poster',
    component: poster,
    meta: {
      islg: true
    },
  },
  {
    path: '/financial',
    name: 'financial',
    component: financial,
    meta: {
      islg: true
    },
  },
  {
    path: '/taskdetail',
    name: 'taskdetail',
    component: taskdetail,
    meta: {
      islg: true
    },
  },
  {
    path: '/issue',
    name: 'issue',
    component: issue,
    meta: {
      islg: true
    },
  },
  {
    path: '/manage',
    name: 'manage',
    component: manage,
    meta: {
      islg: true
    },
  },
  {
    path: '/course',
    name: 'course',
    component: course
  },
  {
    path: '/issuedetail',
    name: 'issuedetail',
    component: issuedetail,
    meta: {
      islg: true
    },
  },
	{
		path: '/copys',
		name: 'copys',
		component: copys,
		meta: {
		  islg: true
		},
		
	},
  {
    path: '/withdraw',
    name: 'withdraw',
    component: withdraw,
    meta: {
      islg: true
    },
  },
  {
    path: '/record',
    name: 'record',
    component: record,
    meta: {
      islg: true
    },
  },
  {
    path: '/task',
    name: 'task',
    component: task,
    meta: {
      islg: true
    },
  },
  {
    path: '/footer',
    name: 'footer',
    component: footer,
    redirect: 'index',
    meta: {
      islg: true
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
          islg: true
        },
      }, 
      {
        path: '/mytask',
        name: 'mytask',
        component: mytask,
        meta: {
          islg: true
        },
      },
      {
        path: '/setmeal',
        name: 'setmeal',
        component: setmeal,
        meta: {
          islg: true
        },
      },
      {
        path: '/personal',
        name: 'personal',
        component: personal,
        meta: {
          islg: true
        },
      },
    ]
  },


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]


const router = new VueRouter({
  // mode: 'history',  这是使路由后边的不显示 需要后台配合
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})



export default router