import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import 'isomorphic-fetch'
// import initStore from '../store'
//其中persistor是store持久化使用
import { initStore, persistor } from '../store'
// store持久化步骤2导入PersistGate组件
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../components/layout'
/*
Next.js项目中有一种数据请求是会在组件的await async getInitialProps()方法中去请求数据，而getInitialProps方法会在nodejs服务器执行，不会在浏览器中执行
保证在nodejs环境中也能利用isomorphic-fetch请求数据服务api，需要全局导入一下
*/
import 'isomorphic-fetch'
//保证使低版本浏览器（IE<9）中可以正常使用promise
require('es6-promise').polyfill();

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    /*判断子组件是否有getInitialProps，如果有则调用子组件的getInitialProps，可以在子组件中getInitialProps返回同一个key
    的不同值，类实现是否加载局部组件*/
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    // 增加一个store ，通过withRedux后自动会将store添加到props中
    const { Component, pageProps, store } = this.props
    return <Container>
      {/* 调用Layout布局组件并完成子组件Component内容的显示
                增加： <Provider store = {store}>
            */}
      <Provider store={store}>
        {/* // store持久化步骤3 将PersistGate组件当做layout的根组件 */}
        <PersistGate persistor={persistor}>
          <Layout Component={Component} {...pageProps}></Layout>
        </PersistGate>
      </Provider>
    </Container>
  }
}

export default withRedux(initStore)(MyApp)