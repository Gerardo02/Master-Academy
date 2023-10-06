import { Button, Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    DollarOutlined,
    TeamOutlined,
    EditOutlined,
    UserOutlined
} from '@ant-design/icons';
import "../styles/index.css"



const Dashboard =() => {
    const navigate = useNavigate()
    return (
        <div className='dashboard'>
        {/* <Title>MASTER ACADEMY</Title> */}
            <Row>
                <Col span={8} offset={8}>
                    <img src="src/assets/MasterAcademyLogo.png" alt="Girl in a jacket" width="353" height="123"></img>
                </Col>
                <Col span={6} offset={2}>
                    <Button onClick={() => navigate('/documentacion')} block style={{ height: '80px' }}><strong style={{ fontSize: '20px' }}>Documentacion</strong></Button>
                </Col>
            </Row>
            
            
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{
                        //width: 420,
                        color:'white',
                        backgroundColor: '#FB8B24',
                        padding: '0.6em',
                        }}
                        cover={<DollarOutlined style={{ fontSize: '8vw', backgroundColor: '#FB8B24', marginTop:"40px"}} />}
                        onClick={() => navigate('/pagos') }
                    >
                        <h1 style={{color:'white'}}>Pagos</h1>
                        <p style={{color:'white'}}>Opciones para el manejo y control de pagos de los alumnos</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{
                            //width: 420,
                            color:'white',
                            padding: '0.6em',
                            backgroundColor: '#E5446D',
                        }}
                        cover={<TeamOutlined style={{ fontSize: '8vw', backgroundColor: '#E5446D', marginTop:"40px"  }} />}
                        onClick={() => navigate('/control_escolar') }
                    >
                        <h1 style={{color:'white'}}>Control Escolar</h1>
                        <p style={{color:'white'}}>Consulta la información de grupos y alumnos, listas de asistencia, calificaciones, etc. </p>
                        
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{
                            //width: 420,
                            color:'white',
                            padding: '0.6em',
                            backgroundColor: '#04A777',
                        }}
                        cover={<EditOutlined style={{ fontSize: '8vw', backgroundColor: '#04A777', marginTop:"40px"  }} />}
                        onClick={() => navigate('/administracion') }
                    >
                        <h1 style={{color:'white'}}>Administración</h1>
                        <p style={{color:'white'}}>información completa de todos los alumnos, consulta, edita o elimina información</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{
                            //width: 420,
                            color:'white',
                            padding: '0.6em',
                            backgroundColor: '#531CB3',
                        }}
                        cover={<UserOutlined style={{ fontSize: '8vw', backgroundColor: '#531CB3', marginTop:"40px"  }} />}
                        onClick={() => navigate('/alumnos') }
                    >
                        <h1 style={{color:'white'}}>Alumno</h1>
                        <p style={{color:'white'}}>Accede a tu información básica con tu matricula de alumno</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
 
export default Dashboard;