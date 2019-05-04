
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import { Button } from 'antd'

class home extends React.Component {
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
    </div>
  }
}

const mappStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mappStateToProps, null)(home)