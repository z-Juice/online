import { connect } from 'react-redux';
import Link from 'next/link';
import { Icon, Badge } from 'antd';
import css from './layout.less';
import { getUser, removeUser } from '../../kits/storageHelper.js'
import fetchHelper from '../../kits/fetchHelper.js'

class head extends React.Component {

  //  登出系统逻辑处理
  logout() {
    // 1.0 调用数据服务接口将服务器的当前浏览器的session清除
    fetchHelper.get('/nc/common/account/logout')
      .then(json => {
        if (json.status == 1) {
          // 请求失败 
          message.error(json.message, 1)
        } else {
          // 2.0 清除浏览器中的sessionStroage中的当前用户信息
          removeUser()

          // 3.0 跳转到登录页面
          window.location = '/account/login'
        }
      })

  }

  render() {
    const user = getUser();

    return <header className={css.headtop + " w"}>
      <a href="" className="fl"><img src="/static/img/asset-logoIco.png" alt="" /></a>
      <div className={css.left + " fl"}>
        <Link href={{ pathname: '/index' }}>
          <a className={css.a}>首页</a>
        </Link>
        <a className={css.a} href="">课程</a>
        <a className={css.a} href="">职业规划</a>
      </div>
      <div className={css.input + " fl"}>
        <input type="text" className="fl" placeholder="输入查询关键字" />
        <button className="fr">搜索</button>
      </div>
      <div className={css.right + " fr"}>
        <div className={css.signin}>
          <a href="#" onClick={() => this.props.onSwitchColor('blue')}>蓝色 </a>
          <a href="#" onClick={() => this.props.onSwitchColor('red')}>红色 </a>
          <Link href={{ pathname: '/car/carlist' }}>
            <Badge count={this.props.shopCarCountReducer.count}>
              <Icon style={{ cursor: 'pointer' }} type="shopping-cart" className={css.icon} />
            </Badge>
          </Link>
          {
            user.uid ?
              <span>
                {/* <!-- 登录以后要显示 --> */}
                <Link href={{ pathname: '/mycenter/myorders' }}>
                  <a href="#" ><Icon type="bell" theme="twoTone" />个人中心</a>
                </Link>
                <a href="#" >
                  <img src="/static/img/asset-myImg.jpg" alt="" width="30px" height="30px" />
                  {user.nick_name}</a>
                <a href="#" onClick={() => { this.logout() }}>退出</a>
              </span>
              :
              <span>
                {/* <!-- 未登录 -->*/}
                <Link href='/account/login'><a>登录</a></Link> <span> |</span> <Link href="/account/login"><a>注册</a></Link>
              </span>
          }
        </div>
      </div>
    </header>

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', color: color })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(head)