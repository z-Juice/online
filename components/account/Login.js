// 导入antd中的所有当前页面需要的组件
import { Icon, Form, Input, Button, message } from 'antd'
import fetchHelper from '../../kits/fetchHelper.js'
// 将用户对象存储到sessionStroage中
import { setUser } from '../../kits/storageHelper.js'

const FormItem = Form.Item;

class Login extends React.Component {
    //发送登录请求
    login = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 将values数据通过post请求，发送给/nc/common/account/login
                fetchHelper.post('/nc/common/account/login', values)
                    .then(json => {
                        if (json.status == 1) {
                            // 表示服务器处理异常或者用户名和密码错误
                            message.error(json.message)
                        } else {
                            // 登录成功以后
                            //  1、将用户信息保存到sessionStorage中
                            setUser(json.message.user)
                            //  2、跳转到首页  /index
                            message.success(json.message.text, 1, () => {
                                window.location = '/index'
                            })
                        }
                    })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.login}>
                <FormItem>
                    {getFieldDecorator('user_name', {
                        rules: [
                            { required: true, message: '请输入用户名!' },
                            { pattern: /^1(3|4|5|7|8)\d{9}$/, message: '用户名必须符合手机格式!' }
                        ],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名或者手机号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </FormItem>
            </Form>
        )
    }
}

// 利用Form.create高阶函数将form对象附加到login组件中的props中
export default Form.create()(Login);