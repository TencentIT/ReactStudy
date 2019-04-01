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

redux 里面   组件通过 store.dispatch(action) 通过dispatch把东西传递给store ，dispatch本意思就是 派发的意思

reducer里面的state存的是上一次store存的数据， action指的是用户传递过来的那句话 
经过reducer处理过后，返回一个新数据 替换掉 store里面的老数据

通过store.subscribe 把reducer传递过去的 state新值 映射到 组件中 
 store.subscribe


数据是怎么更新的呢？ 不是reducer 更新的，只不过是通过 在reducer里面做处理，然后把处理后的数据返回给store，是store自己更新数据的


设计使用原则 
1 store只有一个
2 只有store自己能改变自己的内容 

reducer是一个纯函数
纯函数指的是 ：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
也就是说 reducer里面不能有 异步操作，以及与时间相关的操作
什么叫副作用呢？ 比如reducer里面对传入的参数进行修改，这就叫副作用，reducer里面 不要对 传入的参数进行修改 ，一旦修改的话，
reducer就不是纯函数了 

redux核心API
createStore 创建一个store
store.dispatch() 帮助我们派发一个action 
store.getState() 帮助我们获取到state里面所有的数据内容 
store.subscribe  可以订阅 store数据的改变 ，只要数据发生改变，store.subscribe接受的回调函数就会被执行 

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


redux-thunk  中间件  git : https://github.com/zalmoxisus/redux-devtools-extension
使用了 redux-thunk  返回的东西可以是一个函数 
只有用了 thunk  ，action才能是一个函数 
用了redux-thunk  ， 可以把 写在 生命周期里面的 异步请求数据的方法，都抽出来，写在 actionCreators.js  文件里，
避免组件的生命周期函数太大，后期当我们去做自动化测试的时候， 去测试一些异步的方法，非常的简单，  比测试组件生命周期要简单的多 


什么是中间价？ 
实际上就是对dispatch的封装  ， 对dispatch的一次升级 ，之前只能接受对象，现在也能接受函数了 ，用 redux-thunk  对它进行了升级  
如果action 传了一个 对象，dispatch方法会直接把action传递给store
如果action 传了一个 函数， dispatch方法 不会直接把 函数传递给store ，dispatch会让这个函数先执行，需要调用store的时候 再去调store
dispatch  做了一个事情， 会根据参数的不同执行不同的事情， 

其他中间价还有，例如 redux-logger 记录每次 action每次派发的日志 
             例如 reduex-saga  解决react中异步问题的一个中间件， 不同于react-thunk，
             react-thunk是把 异步操作放到action里操作 
             而 reduex-saga 采用的升级逻辑是 单独的把异步的逻辑拆分出来放到另一个文件里去管理 