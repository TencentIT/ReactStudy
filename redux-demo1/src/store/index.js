import {createStore ,  applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware),
    );


// redux-thunk
// const store = createStore(
//     reducer,
//     applyMiddleware([thunk ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()])
// )



const store = createStore(
    reducer,
    enhancer 
)

sagaMiddleware.run(TodoSagas )


export default store; 