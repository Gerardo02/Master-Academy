import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Button, Col, Input } from 'antd';



const CrearPermisos = () => {

    const onFinsh = async (formValues) => {
        try {
            await fetch('https://back-fiber-production.up.railway.app/api/permisos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues)
        })} catch(error) {
            throw error
        }

        window.location.reload(false);
    };

    return ( 
        <div className='crear-permisos'>
            <h2 style={{textAlign: 'center' }}>Crear Permisos</h2>
            <h4>Nombre:</h4>
            <Form
                onFinish={onFinsh}
                initialValues={
                    { 
                        administracion: false, 
                        control_escolar: false, 
                        inscripcion: false, 
                        administrador: false 
                    }
                }
            >
                <Form.Item 
                    name="permiso"
                    rules={[
                        {
                            required: true,
                            message: "Nombre Obligatorio"
                        },
                    ]}
                >
                    <Col>
                        <Input placeholder='Nombre' />
                    </Col>
                </Form.Item>

                <h3>Acceso:</h3>

                <Form.Item name="administracion" valuePropName="checked">
                    <Col span={8}>
                        <Checkbox style={{ lineHeight: '32px' }}>Administracion</Checkbox>
                    </Col>
                </Form.Item>

                <Form.Item name="control_escolar" valuePropName="checked">
                    <Col span={8}>
                        <Checkbox style={{ lineHeight: '32px' }}>Control Escolar</Checkbox>
                    </Col>
                </Form.Item>

                <Form.Item name="inscripcion" valuePropName="checked">
                    <Col span={8}>
                        <Checkbox style={{ lineHeight: '32px' }}>Inscripcion</Checkbox>
                    </Col>
                </Form.Item>

                <Form.Item name="administrador" valuePropName="checked">
                    <Col span={8}>
                        <Checkbox style={{ lineHeight: '32px' }}>Administrador</Checkbox>
                    </Col>
                </Form.Item>

                <Form.Item style={{width: '100%'}}>
                    <Button block htmlType="submit" type="primary" >Crear</Button>
                </Form.Item>

            </Form>

        </div>
     );
}
 
export default CrearPermisos;