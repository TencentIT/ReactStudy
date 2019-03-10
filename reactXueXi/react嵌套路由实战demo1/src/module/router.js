import Home from "../component/Home";
import User from "../component/User";
    import UserInfo from '../component/User/UserInfo'
    import UserMain from '../component/User/UserMain'
    import UserEdit  from '../component/User/UserEdit'
import Shop from "../component/Shop";


let routes = [
    {
      path:'/',
      component:Home,
      exact:true
    },
    {
      path:'/user',
      component:User,
      routes:[
        {
            path:'/user/',
            component:UserMain
        },
        {
            path:'/user/UserInfo',
            component:UserInfo
        },
        {
            path:'/user/UserEdit',
            component:UserEdit
        }
    
      ]
    },
    {
      path:'/shop',
      component:Shop
    }
  ]

export default routes