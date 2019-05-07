// 导入antd中的所有当前页面需要的组件
import { Icon, Tabs, Row, Col } from 'antd'
// 导入登录和注册组件
import Login from '../../components/account/Login.js'
import Register from '../../components/account/Register.js'

const TabPane = Tabs.TabPane;

class login extends React.Component {
    render() {
        return (
            <div style={{ minHeight: '500px' }}>
                <Row>
                    <Col span={10} offset={7}>
                        {/* 3.0.1 利用Tabs去做一个注册和登录的切换功能 */}
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Icon type="user" />登录</span>} key="1">
                                {/* 使用登录组件 */}
                                <Login></Login>
                            </TabPane>
                            <TabPane tab={<span><Icon type="solution" />注册</span>} key="2">
                                {/* 使用注册组件 */}
                                <Register></Register>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <style>{
                    `
                    .ant-form-item{
                        margin:10px 10px;
                    }

                    `
                }
                </style>
            </div>
        )
    }
}

export default login