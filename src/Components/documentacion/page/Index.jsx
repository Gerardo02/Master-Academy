import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  UserAddOutlined,
  ArrowLeftOutlined,
  ReconciliationOutlined,
  DollarOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  KeyOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, disabled, children) {
    return {
        key,
        icon,
        children,
        label,
        disabled,
    };
}

const items = [
    getItem('Regresar', '1', <ArrowLeftOutlined />),
    getItem('Introduccion', '2', <DesktopOutlined />),
    getItem('Pagos', 'sub1', <DollarOutlined />, false,  [
        getItem('Nuevos pagos', '3'),
        getItem('Actualizar informacion', '4'),
        getItem('Revisar', '5'),
    ]),
    getItem('Control escolar', 'sub2', <ReconciliationOutlined />, false, [
        getItem('Listas', '6'), getItem('Grupos', '7')
    ]),
    getItem('Inscripcion', 'sub3', <UserAddOutlined />, false, [
        getItem('Alumnos', '8'), getItem('Grupos', '9')
    ]),
    getItem('Administrador', '10', <KeyOutlined />, true),
    getItem('Soporte', '11', <QuestionCircleOutlined />),
];




const Index = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [parentTitleBreadCumb, setParentTitleBreadCumb] = useState('')
    const [childTitleBreadCumb, setChildTitleBreadCumb] = useState('')

    const { token: { colorBgContainer }, } = theme.useToken();
    const navigate = useNavigate()

    const breadcrumbItems = [
        { path: '/user', breadcrumbName: 'User', title: parentTitleBreadCumb },
        { path: '/bill', breadcrumbName: 'Bill', title: 'Bill' },
    ];

    const onClick = (e) => {
        if(e.key === '1') navigate('/home')
        if(e.keyPath[1] === 'sub1'){
            setParentTitleBreadCumb('Pagos')
        }
        console.log(e)
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
                        items={breadcrumbItems}
                    />

                    <div
                        style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        }}
                    >
                        {'Aqui va el componente'}
                        
                    </div>
                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Master Academy ©2024 Created by Master Academy
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Index;