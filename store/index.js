import { createStore, combineReducers } from 'redux'
// 集成redux-persist实现store持久化到localStorage的步骤
// 1.0.1、导入相关方法和storage对象
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// 1.0.2配置 storage对象的key
const config = {
    key:'xczxredux',
    storage
}

// 导入具体的业务reducer
import testReducer from '../reducer/testReducer.js'

// 将多个reducer编译成统一的rootReducer
const rootReducer = combineReducers({
  testReducer  //颜色改变测试reducer，无实际意义
})

// 3.0.1、利用persistReducer将rootReducer重新包装后返回新对象pReducer
const pReducer = persistReducer(config,rootReducer)

// 4.0 调用 createStore创建好一个store对象
const store = createStore(pReducer)

// 5.0 定义一个函数将store对象返回，将来被_app.js中的withRedux去调用
export const initStore = ()=>{
    return store
}

// 6.0、(export)利用persistStore方法传入store对象创建出新的persistor对象,将来在_app.js中被PersistGate组件使用 
export const persistor = persistStore(store)

// // 构建初始化Store的函数，交给 next-redux-wrapper的withRedux 使用
// const initStore = (initialState, options) => {
//   return createStore(rootReducer, initialState);
// }

// export default initStore