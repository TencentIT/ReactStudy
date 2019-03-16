
const defaultState = {
    inputValue:"123",
    list : [4,5]
}

export default (state = defaultState,action) => {  // state 指的是 笔记本里的空数据
    console.log(state,action)
    if(action.type == 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state)) // 把传递过来的值复制一份 
        newState.inputValue = action.value

        return newState
    }
    return state;
}