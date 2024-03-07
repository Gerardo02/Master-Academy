import { Button, Card, Col, Row, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    DollarOutlined,
    EditOutlined,
    UserOutlined,
    ContactsOutlined 
} from '@ant-design/icons';
import "../styles/index.css"
import { useState } from 'react';
import { useAuth } from '../../AuthContext';



const Dashboard = () => {

    const { logout, permission } = useAuth()
    const navigate = useNavigate()

    const [denegado, setDenegado] = useState([permission.administracion, permission.control_escolar, permission.inscripcion, permission.administrador])
    return (
        <>
        
        <div className='dashboard'>
        {/* <Title>MASTER ACADEMY</Title> */}
            <Row>
                <Col span={2} offset={22}>
                    <Popconfirm
                        title="Cerrar sesion?"
                        description="Seguro que quieres cerrar sesion?"
                        onConfirm={logout}
                        okText="Si"
                        cancelText="No"
                    >
                        <Button block style={{ backgroundColor: '#487EFB', color: 'white' }}>Cerrar Sesion</Button>
                    </Popconfirm>
                    
                </Col>
                
            </Row> 
            <br />
            <Row>
                <Col span={6}>
                    <Button onClick={() => navigate('/solicitudes')} block style={{ height: '80px' }}><strong style={{ fontSize: '20px' }}>Solicitudes</strong></Button>
                </Col>
                <Col span={8} offset={2}>
                    <img src="src/assets/MasterAcademyLogo.png" alt="Girl in a jacket" width="353" height="123"></img>
                </Col>
                <Col span={6} offset={2}>
                    <Button onClick={() => navigate('/documentacion')} block style={{ height: '80px' }}><strong style={{ fontSize: '20px' }}>Guia</strong></Button>
                </Col>
            </Row>
            
            
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    
                    <Card
                        hoverable={denegado[0]}
                        style={denegado[0] ? {
                            color:'white',
                            backgroundColor: '#FB8B24',
                            padding: '0.6em',
                        } :
                        {
                            color:'white',
                            backgroundColor: '#FB8B24',
                            padding: '0.6em',
                            cursor: 'not-allowed',
                            opacity: 0.5
                        } }
                        onClick={() => denegado[0] ? navigate('/administracion') : alert("Acceso denegado") }
                        cover={<DollarOutlined style={{ fontSize: '8vw', marginTop:"40px"}} />}
                    >
                        <h1 style={{color:'white'}}>Administración</h1>
                        <p style={{color:'white'}}>Opciones para el manejo y control de pagos de los alumnos</p>
                    </Card>
                    
                </Col>
                <Col span={12}>
                    <Card
                        hoverable={denegado[1]}
                        style={denegado[1] ? {
                            color:'white',
                            backgroundColor: '#E5446D',
                            padding: '0.6em',
                        } :
                        {
                            color:'white',
                            backgroundColor: '#E5446D',
                            padding: '0.6em',
                            cursor: 'not-allowed',
                            opacity: 0.5
                        } }
                        onClick={() => denegado[1] ? navigate('/control_escolar') : alert("Acceso denegado") }
                        cover={<ContactsOutlined  style={{ fontSize: '8vw', backgroundColor: '#E5446D', marginTop:"40px"  }} />}
                    >
                        <h1 style={{color:'white'}}>Control Escolar</h1>
                        <p style={{color:'white'}}>Consulta la información de grupos y alumnos, listas de inscripcion, documentos entregados, etc. </p>
                        
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable={denegado[2]}
                        style={denegado[2] ? {
                            color:'white',
                            backgroundColor: '#04A777',
                            padding: '0.6em',
                        } :
                        {
                            color:'white',
                            backgroundColor: '#04A777',
                            padding: '0.6em',
                            cursor: 'not-allowed',
                            opacity: 0.5
                        } }
                        onClick={() => denegado[2] ? navigate('/inscripcion') : alert("Acceso denegado") }
                        cover={<EditOutlined style={{ fontSize: '8vw', backgroundColor: '#04A777', marginTop:"40px"  }} />}
                        
                    >
                        <h1 style={{color:'white'}}>Inscripción</h1>
                        <p style={{color:'white'}}>Formas para inscripción de alumnos y dada de alta de grupos</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable={denegado[3]}
                        style={ denegado[3] ? {
                            color:'white',
                            backgroundColor: '#531CB3',
                            padding: '0.6em',
                        } :
                        {
                            color:'white',
                            backgroundColor: '#531CB3',
                            padding: '0.6em',
                            cursor: 'not-allowed',
                            opacity: 0.5
                        } }
                        onClick={() => denegado[3] ? navigate('/administrador') : alert("Acceso denegado") }
                        cover={<UserOutlined style={{ fontSize: '8vw', backgroundColor: '#531CB3', marginTop:"40px"  }} />}
                    >
                        <h1 style={{color:'white'}}>Administrador</h1>
                        <p style={{color:'white'}}>Acceso solo del administrador autorizado</p>
                    </Card>
                </Col>
            </Row>
            {/* <Button onClick={() => setDenegado([!denegado[0], denegado[1], denegado[2], denegado[3]])}>Denegado admin</Button>
            <Button onClick={() => setDenegado([denegado[0], !denegado[1], denegado[2], denegado[3]])}>Denegado control escolar</Button>
            <Button onClick={() => setDenegado([denegado[0], denegado[1], !denegado[2], denegado[3]])}>Denegado inscripcion</Button>
            <Button onClick={() => setDenegado([denegado[0], denegado[1], denegado[2], !denegado[3]])}>Denegado usuarios</Button> */}
        </div>
        </>
    );
}
 
export default Dashboard;