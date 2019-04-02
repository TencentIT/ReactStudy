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

`reducer` 返回的必须是一个函数，里面有两个参数，`state，action` 

`redux` 里面   组件通过 `store.dispatch(action)` 通过`dispatch`把东西传递给`store` ，`dispatch`本意思就是 派发的意思

`reducer`里面的`state`存的是上一次`store`存的数据， `action`指的是用户传递过来的那句话 
经过`reducer`处理过后，返回一个新数据 替换掉 `store`里面的老数据

通过`store.subscribe` 把`reducer`传递过去的 `state`新值 映射到 组件中 

     store.subscribe


数据是怎么更新的呢？ 不是`reducer` 更新的，只不过是通过 在`reducer`里面做处理，然后把处理后的数据返回给`store`，是`store`自己更新数据的


## 设计使用原则 
1 store只有一个
2 只有store自己能改变自己的内容 

reducer是一个纯函数
`纯函数`指的是 ：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
也就是说 reducer里面不能有 异步操作，以及与时间相关的操作
什么叫`副作用`呢？ 比如reducer里面对传入的参数进行修改，这就叫副作用，reducer里面 不要对 传入的参数进行修改 ，一旦修改的话，

 reducer就不是纯函数了

 
=======================================================================================
## redux核心API
`createStore` 创建一个store
`store.dispatch()` 帮助我们派发一个action 
`store.getState()` 帮助我们获取到state里面所有的数据内容 

`store.subscribe` 可以订阅 store数据的改变 ，只要数据发生改变，store.subscribe接受的回调函数就会被执行

无状态组件性能更优 为什么 ？
因为  无状态组件 是一个函数， 例如

    const TodoListUI = (props) => {
        return (
            <div className='todolist_box'>
                <Input placeholder="Basic usage" value = {this.props.inputValue} onChange = {this.props.handleInputChange}/> 
                <Button type="primary" onClick={this.props.handleBtnClick }>添加</Button>
                <List.Item
                bordered
                dataSource={this.props.list}
                renderItem={(item,index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }} >{item}</List.Item>)}
                />
            </div>
        )
    }

而 普通 class类 render 里面 

    class TodoListUI extends Component {
        state = {  }
        render() {
            return (
                <div className='todolist_box'>
                    <Input placeholder="Basic usage" value = {this.props.inputValue} onChange = {this.props.handleInputChange}/> 
                    <Button type="primary" onClick={this.props.handleBtnClick }>添加</Button>
                    <List.Item
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }} >{item}</List.Item>)}
                    />
                 </div>
            );
        }
    } 

是一个类，类里面有生命周期，执行起来，既要执行 render ，又要执行  生命周期函数 
所以一个普通组件的性能，肯定是赶不上 无状态组件的 
如果一个文件只有render，建议用无状态组件  

=======================================================================================

## 什么是中间件？ 
实际上就是对`dispatch`的封装  ， 对`dispatch`的一次升级 ，之前只能接受对象，现在也能接受函数了 ，用 `redux-thunk`  对它进行了升级  

其他中间价还有，例如 `redux-logger` 记录每次 `action`每次派发的日志 
             例如 `redux-saga`  解决react中异步问题的一个中间件， 不同于react-thunk，
             `react-thunk`是把 异步操作放到`action`里操作 
             而 redux-saga 采用的处理逻辑是 单独的把异步的逻辑拆分出来放到另一个文件里去管理 

=======================================================================================

`redux-thunk`  中间件  git : https://github.com/zalmoxisus/redux-devtools-extension
使用了 `redux-thunk`  返回的东西可以是一个函数 
只有用了 `thunk`  ，`action`才能是一个函数 
如果`action` 传了一个 对象，`dispatch`方法会直接把action传递给store
如果`action` 传了一个 函数， `dispatch`方法 不会直接把 函数传递给`store` ，`dispatch`会让这个函数先执行，需要调用store的时候 再去调store
`dispatch`  做了一个事情， 会根据参数的不同执行不同的事情， 
用了`redux-thunk`  ， 可以把 写在 生命周期里面的 异步请求数据的方法，都抽出来，写在 `actionCreators.js`  文件里，
避免组件的生命周期函数太大，后期当我们去做自动化测试的时候， 去测试一些异步的方法，非常的简单，  比测试组件生命周期要简单的多 

=======================================================================================

redux-saga 的使用 
git https://github.com/redux-saga/redux-saga
 
可以用 `redux-saga`  代替  `redux-thunk`  ，项目开发中只用其中一种 

    npm install --save redux-saga

index.js 

    import { createStore, applyMiddleware } from 'redux'
    import createSagaMiddleware from 'redux-saga'
    
    // 创建 saga 中间件
    const sagaMiddleware = createSagaMiddleware()
    // 挂载在 Store 上
    const store = createStore(
      reducer,
      applyMiddleware(sagaMiddleware)
    )

sagas.js 
saga 文件必须要求是 generator函数 
思想：以前接受action 是在 reducer里面，现在有了saga  直接在sagas.js里面的 takeEvery 方法，来捕获派发出来的action 

例如 

    sagas.js
    function* mySaga() {
       yield takeEvery(getInitList , fetchUser)
    }

捕获 getInitList 对应的action type值，来调用 sagas.js 文件里的 fetchUser 方法
saga.js  里 通过 put方法 来把处理后的action发到 store里面 ,如果担心 sagas.js里面 请求数据失败 用try catch 来包裹 
例如 
sagas.js
 

    function* getInitList(){
        try {
            const res = yield  axios.get('./list.json')
            const action = initListAction(res.data)
            yield put(action)
        }catch(e){
            console.log('list.json 网络请求失败')
        }
    }

## redux-thunk redux-saga 区别 
`redux-saga` 比 `redux-thunk`负责的多，`redux-saga` 有非常多的API ，非常大型的项目建议用 `redux-saga` 
`redux-thunk` 只是返回东西多里一个 函数  
`redux-thunk` 把异步代码放到 `action` 里面去， `redux-saga` 单独写在 `sagasl.js` 文件里面

## 中间件总结 ：
是位于 组件和 store中间，对dispatch的升级

=======================================================================================
## react-redux使用

TodoList.js
    获取数据通过  this.props.inputValue 取 store里的数据
    <input type="text" value = {this.props.inputValue}/>

const mapStateToProps = (state) => { // state指  store 里面的数据 
    return  {
        inputValue : state.inputValue // store 里的inputValue映射到 props里面 ，所以上面html里面用 通过this.props来获取值
    }
}

// 让 store 和 TodoList 做连接 
export default connect(mapStateToProps,null)(TodoList);

口诀 ： 
connect是连接，谁和谁做连接，TodoList 和 store做连接，怎么做连接，有个映射关系， 通过mapStateToProps 做连接 

todoList.js
// 让 store 和 TodoList 做连接 
const mapStateToProps = (state) => {
    return  {
        inputValue : state.inputValue
    }
}
// 把 store的dispatch 方法挂载到props 
const mapDispatchtoProps = (dispatch) => {
    return {
        changeInputValue(e) {    
            const action = {
                type : 'change_input_value',
                value : e.target.value
            }
            dispatch(action )
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps )(TodoList);

数据发生改变，这个组件自动跟着变，是因为todo list组件里面 
export default connect(mapStateToProps,mapDispatchtoProps )(TodoList); 
通过connect跟数据做了连接，
以前还需要通过subscribe做订阅来监控数据的改变，现在通过 react-redux 自动完成这个过程 ，订阅都不用做，数据变，页面自动跟着变

最后可以把代码进行优化，改成无状态组件，好处是：提升代码的性能，无状态组件没有生命周期函数，同时也不会生成真正的组件的实例 

UI组件指 todo list页面，容器组件指的是todo list里面 connect模块 返回的结果 