import '..//styles/InfoAlumno.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import NavBarAlumno from '../../components/NavBarAlumno';


const InfoAlumno = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState(<></>)

    const alumnosCard = {
        
        nombre: 'Pedro',
        apellidos: 'Juarez Herrera',
        matricula: '123456'

    }

    return ( 
        <>

            <NavBarAlumno alumnosCard={alumnosCard} navigate={navigate} setSelectedComponent={setSelectedComponent} />
            
            <br />
            <br />
            {selectedComponent}
        </>
     );
}
 
export default InfoAlumno;