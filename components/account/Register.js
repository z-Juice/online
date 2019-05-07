// 导入antd中的所有当前页面需要的组件
import { Icon, Row, Col, Form, Input, Button, message } from 'antd'
import fetchHelper from '../../kits/fetchHelper.js'

const FormItem = Form.Item;

class Register extends React.Component {
    //发送注册请求
    register = () => {
        
    }

    //定义手机号码是否已经被注册逻辑
    checkuser () {

    }

    //获取短信验证码
    getSMSCode () {

    }

    //定义一个方法用来控制按钮的是否可点击状态和倒计时功能
    setButtonState () {

    }

    // 定义一个密码是否一致的函数，来判断再次输入密码框中的密码字符串必须与密码框中的密码字符串一致
    /**
     * rule:规则对象
     * value: 使用checkpwd这个函数对应的控件值（此处是再次输入密码文本框的值）
     * callback：是一个回调，如果需要callback提示用户异常信息，就这么写： callback('两次输入的密码不一致')
     * 如果验证通过，直接callback()即可，里面不需要传入任何提示语字符串
     *  */
    checkpwd (rule, value, callback) {

    }

    //定义一个state
    state = {
        bttxt:'获取验证码',
        isClick:false // 表示获取验证码按钮初始情况下是可以被点击的
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form ref="register" onSubmit={this.register}>
                <FormItem>
                    {getFieldDecorator('user_name', {
                        rules: [{ required: true, message: '请输入手机号码' },
                        { pattern: /^1(3|4|5|7|8)\d{9}$/, message: '用户名必须符合手机格式!' }
                        ]
                    })(
                        <Row type="flex" justify="space-between">
                            <Col span={17}>
                                <Input onBlur={this.checkuser.bind(this)} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入注册时的手机号码" />
                            </Col>
                            <Col span={6}>
                                <Button disabled={this.state.isClick} type="primary" onClick={this.getSMSCode.bind(this)} >{this.state.bttxt}</Button>
                            </Col>
                        </Row>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('sns_code', {
                        rules: [{ required: true, message: '请输入验证码!' }
                        ],
                    })(
                        <Input prefix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入验证码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password1', {
                        rules: [{ required: true, message: '请再一次输入密码!' }
                            , {
                            // 自定义验证：保证再次属于密码和密码框中的密码保持一致
                            validator: this.checkpwd.bind(this)
                        }],
                    })(
                        <Input prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再一次输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                </Button>
                </FormItem>
            </Form>
        )
    }
}

// 包装以后，就会在Register组件的props上挂在一个form对象
export default Form.create()(Register);