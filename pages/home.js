
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import { Button } from 'antd'
import fetchHelper from '../kits/fetchHelper.js'

class home extends React.Component {
  state = {
    blist: null
  }

  componentWillMount() {
    let url = '/nc/course/courseDetial/getCourseDetial/102'
    fetchHelper.get(url)
      .then(json => {
        // json格式：
        this.setState({
          blist: json.message.BreadCrumbs
        })
      })
  }

  render() {
    return <div style={{ height: '300px', width: '1024px', margin: '100px auto', fontSize: '30px' }}
      onClick={() => {
        Router.push({ pathname: '/index' })
      }}
    >
      <Head>
        <title>Home页面</title>
      </Head>
      <span style={{ color: this.props.testReducer.color }}>Home</span>
      <Link href='/index'>
        <Button type="danger" size="large">返回到index页</Button>
      </Link>
      {/* 获取this.state.blist数据展示在界面上 */}
      <ul>
        {this.state.blist && this.state.blist.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  }
}

const mappStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mappStateToProps, null)(home)