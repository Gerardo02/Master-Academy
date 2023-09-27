import { Card, Col, Row } from 'antd';
import {
    DollarOutlined,
    TeamOutlined,
    EditOutlined,
    UserOutlined
  } from '@ant-design/icons';


const { Meta } = Card;
const Dashboard =() => {
    return (
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
                    cover={<DollarOutlined style={{ fontSize: '8vw', backgroundColor: '#FB8B24', marginTop:"50px"}} />}
                >
                    <h1 style={{color:'white'}}>Administración/Pagos</h1>
                    <p style={{color:'white'}}>Opciones para registrar o editar la informacion de los alumnos y de control de pagos</p>
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
                    cover={<TeamOutlined style={{ fontSize: '8vw', backgroundColor: '#E5446D', marginTop:"50px"  }} />}
                >
                    <h1 style={{color:'white'}}>Control Escolar</h1>
                    <p style={{color:'white'}}>Información completa de todos los alumnos</p>
                    
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
                    cover={<EditOutlined style={{ fontSize: '8vw', backgroundColor: '#04A777', marginTop:"50px"  }} />}
                >
                    <h1 style={{color:'white'}}>Asistencia y prácticas</h1>
                    <p style={{color:'white'}}>Lista de asistencia, calificaciones y prácticas de los alumnos por grupo</p>
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
                    cover={<UserOutlined style={{ fontSize: '8vw', backgroundColor: '#531CB3', marginTop:"50px"  }} />}
                >
                    <h1 style={{color:'white'}}>Alumno</h1>
                    <p style={{color:'white'}}>Accede a tu información básica con tu matricula de alumno</p>
                </Card>
            </Col>
        </Row>

      
      
         );
}
 
export default Dashboard;