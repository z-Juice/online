import css from '../../pages/account/login.less'
import fetchHelper from '../../kits/fetchHelper.js'

// 导入antd中的所有当前页面需要的组件
import { Icon, Row, Col, Form, Input, Button, message } from 'antd'
const FormItem = Form.Item;

class Register extends React.Component {
    render () {
        return (
            <div>zhuce</div>
        )
    }
}

// 包装以后，就会在Register组件的props上挂在一个form对象
export default Form.create()(Register);