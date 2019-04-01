import { GET_INIT_LIST , CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM , INIT_LIST_ACTION } from  './actionTypes'
// import axios from 'axios' 

export const getInputChangeAction = (value) => ({
    type : CHANGE_INPUT_VALUE , 
    value 
})

export const getAddItemAction = () => ({
    type : ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export default initListAction = (data) => ({
     type: INIT_LIST_ACTION,
     data 
})

// 这里就是通过redux-thunk 把异步代码放到 action 里面去
// export default getTodoList = () => {
//     return (dispatch) => {
//         axios.get('./list.json').then((res)=>{
//             const data = res.data
//              const action = initListAction(data)
//              dispatch(action)
//         }) 
//     }
// }


export default getInitList = () => ({
    type: GET_INIT_LIST
})