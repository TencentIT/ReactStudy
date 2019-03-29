import {CHANGE_INPUT_VALUE ,ADD_TODO_ITEM , DELETE_TODO_ITEM } from  '. /actionTypes'

const defaultState = {
    inputValue:"123",
    list : [4,5]
}

export default (state = defaultState,action) => {  // state 指的是 笔记本里的空数据
    console.log(state,action)
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state)) // 把传递过来的值复制一份 
        newState.inputValue = action.value

        return newState
    }

    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state)) // 把传递过来的值复制一份 
        console.log('add_todo_item 前',newState)
        newState.list.push(newState.inputValue)

        newState.inputValue = ''
        console.log('add_todo_item 后',newState)
        return newState
    }

    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState
    }


    return state;
}