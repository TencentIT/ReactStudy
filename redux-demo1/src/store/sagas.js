import { takeEvery ,put} from 'redux-saga/effects'
import  {getInitList} from './actionCreators'
import axios from 'axios'   
import {initListAction} from  './actionCreators'

function* getInitList(){
    try {
        const res = yield  axios.get('./list.json')
        const action = initListAction(res.data)
        yield put(action)
    }catch(e){
        console.log('list.json 网络请求失败')
    }


    // generator 函数写成 yield 类型，异步变同步，注意需要加关键字 yield 
    // axios.get('./list.json').then((res)=>{
    //     const data = res.data
    //     const action = initListAction(data)
    //     put(action)
    // })
}


function* mySaga() {
   yield takeEvery(getInitList , getInitList)
} 
  
export default mySaga;