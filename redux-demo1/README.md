## Redux demo 1    

## 笔记 
1 创建store 
     引入redux 里面的一个createStore 方法 ， 把 reducer 传递给store  
     import {createStore} from 'redux'

     const store = createStore(reducer)

2  创建reducer，作用 负责存储整个项目中的数据，怎么处理，怎么传都由reducer负责 ，把数据传递给store， 


const defaultState = {
    inputValue:"123",
    list : [4,5]
}

export default (state = defaultState,actions) => {  // state 指的是 笔记本里的空数据
    return state;
} 

reducer 返回的必须是一个函数，里面有两个参数，state，action 