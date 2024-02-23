import { useState, useEffect } from "react";
import { Menu, Popconfirm, Button } from "antd";
import { itemsInscripcion } from "../../../Declarations/Navs/Items";
import { useNavigate } from "react-router-dom";
import InscripcionAlumno from "../componets/InscripcionAlumno";
import FormularioGrupo from "../componets/FormularioGrupo";
import DeleteGroup from "../componets/DeleteGroup";
import '../styles/index.css'
import { columnsAlumnosNombres } from "../../../Declarations/Tables/Columns";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import TableAlumnosNombres from "../componets/TableAlumnosNombres";


const Index = () => {

    const navigate = useNavigate()

    useEffect(() => {
        try {
            fetchEspecialidadesData()
            fetchAlumnosNombresData()
        } catch(error) {
            throw error
        }
    }, [])

    const fetchEspecialidadesData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/especialidad')
        const data = await response.json()
        setEspecialidadData(data)
    }
    
    const fetchAlumnosNombresData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/alumnos/nombres')
        const data = await response.json()
        setNombresData(data)
    }

    const [especialidadData, setEspecialidadData] = useState([])
    const [nombresData, setNombresData] = useState([])
    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const [currentOption, setCurrentOption, clearCurrentOption] = useLocalStorage('navInscripcion', 'newAlumno')

    useEffect(() => {

        switch(currentOption){

            case 'back':
                clearCurrentOption();
                navigate('/home')
                break;

            case 'newAlumno':
                setSelectedComponent(<InscripcionAlumno especialidadData={especialidadData} />)
                break;

            case 'newGroup':
                setSelectedComponent(<FormularioGrupo />)
                
                break;

            case 'deleteGroup':
                setSelectedComponent(<DeleteGroup />)
                
                break;

            case 'bajaAlumno':
                setSelectedComponent(<TableAlumnosNombres columnsAlumnosNombres={columnsAlumnosNombres} nombresData={nombresData} />)
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