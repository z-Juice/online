import { createStore, combineReducers } from 'redux'

// 导入具体的业务reducer
import testReducer from '../reducer/testReducer.js'

// 将多个reducer编译成统一的rootReducer
const rootReducer = combineReducers({
  testReducer  //颜色改变测试reducer，无实际意义
})

// 构建初始化Store的函数，交给 next-redux-wrapper的withRedux 使用
const initStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
}
export default initStore