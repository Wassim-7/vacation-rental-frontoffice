import { Layout, Menu } from 'antd';
import { Switch, Route, Link } from 'react-router-dom'

import Home from '../views/Home/Home.js'
import About from '../views/About/About.js'

function MainLayout(props) {
    const { Header, Content, Footer } = Layout

    return (
        <Layout className="layout">
            <Header style={{ backgroundColor: "white" }}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to='/'>Home Page</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/about'>About</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <br />
                <br />
                <div className="site-layout-content">
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Vacation Rental ©2021 Created by Aycer & Wassim</Footer>
        </Layout>

    )
}

export default MainLayout;