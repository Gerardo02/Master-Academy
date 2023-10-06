import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Regresar', '1', <PieChartOutlined />),
    getItem('Introduccion', '2', <DesktopOutlined />),
    getItem('Pagos', 'sub1', <UserOutlined />, [
        getItem('Nuevos pagos', '3'),
        getItem('Actualizar informacion', '4'),
        getItem('Revisar', '5'),
    ]),
    getItem('Control escolar', 'sub2', <TeamOutlined />, [getItem('Listas', '6'), getItem('Grupos', '7')]),
    getItem('Administrador', '8', <FileOutlined />),
];




const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer }, } = theme.useToken();
    const navigate = useNavigate()
    const onClick = (e) => {
        if(e.key === '1') navigate('/')
      }
    return (
        <Layout
        style={{
            minHeight: '100vh',
        }}
        >
            <Sider theme='light' trigger={null} width={250} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: 'white' }} >
                <Menu defaultSelectedKeys={['2']} mode="inline" items={items} onClick={onClick}  />
            </Sider>
            <Layout>
                <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
                
                >

                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    }}
                />
                
                </Header>
                <Content
                style={{
                    margin: '0 16px',
                }}
                >
                    <Breadcrumb
                        style={{
                        margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Index;