import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import '..//styles/InfoAlumno.css'
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd';


const InfoAlumno = () => {
    const [setInformation] = useState('')

    return(<>
        <Form onFinish={(value) => setInformation(value)}>
            <Col span={24}>
                <Space direction="vertical" size={16}>
                    <Space wrap size={16}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                    </Space>
                </Space>
            </Col>
            
        </Form>
        
    </>);
}
 
export default InfoAlumno;