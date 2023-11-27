import { useState, useEffect } from "react";
import { Menu } from "antd";
import { itemsInscripcion } from "../../../Declarations/Navs/Items";
import { useNavigate } from "react-router-dom";
import InscpcionAlumno from "../componets/InscripcionAlumno";
import FormularioGrupo from "../componets/FormularioGrupo";
import DeleteGroup from "../componets/DeleteGroup";
import '../styles/index.css'
import DarDeBajaAlumno from "../componets/DarDeBajaAlumno";


const Index = () => {

    const navigate = useNavigate()

    useEffect(() => {
        try {
            fetchEspecialidadesData()
        } catch(error) {
            throw error
        }
    }, [])

    const fetchEspecialidadesData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/especialidad')
        const data = await response.json()
        setEspecialidadData(data)
    }

    const [especialidadData, setEspecialidadData] = useState([])
    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const [currentOption, setCurrentOption] = useState('newAlumno');

    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/home')
                break;

            case 'newAlumno':
                setSelectedComponent(<InscpcionAlumno especialidadData={especialidadData} />)
                break;

            case 'newGroup':
                setSelectedComponent(<FormularioGrupo />)
                
                break;

            case 'deleteGroup':
                setSelectedComponent(<DeleteGroup />)
                
                break;

            case 'bajaAlumno':
                setSelectedComponent(<DarDeBajaAlumno />)
                break;

            default:
                break;
        }
        
    },[currentOption, especialidadData])

    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={itemsInscripcion} />
            <br /><br />

            {selectedComponent}
        </>
     );
}
 
export default Index;