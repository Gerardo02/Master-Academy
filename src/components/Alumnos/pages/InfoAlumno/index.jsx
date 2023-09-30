import '..//styles/InfoAlumno.css'
import { useNavigate } from "react-router-dom";
import InfoAlumnos from "../../components/InfoAlumnos";
import {Col} from 'antd'


const InfoAlumno = () => {

    const alumnosCard = {
        
        nombre: 'Pedro',
        apellidos: 'Juarez Herrera',
        matricula: '123456'

    }

    return ( 
        <>
          <Col span={24}>
            <InfoAlumnos alumnosCard={alumnosCard} />
          </Col>
            
            <br />
            <br />
            
        </>
     );
}
 
export default InfoAlumno;