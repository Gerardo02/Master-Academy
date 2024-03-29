import { useState, useEffect } from "react";
import { Menu, Popconfirm, Button } from "antd";
import { itemsInscripcion } from "../../../Declarations/Navs/Items";
import { useNavigate } from "react-router-dom";
import InscripcionAlumno from "../componets/InscripcionAlumno";
import FormularioGrupo from "../componets/FormularioGrupo";
import DeleteGroup from "../componets/DeleteGroup";
import '../styles/index.css'
import { columnsAlumnosNombres, columnsAlumnosPorInscribir, columnsAlumnosSinEspecialidad } from "../../../Declarations/Tables/Columns";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import TableAlumnosNombres from "../componets/TableAlumnosNombres";


const Index = () => {

    const navigate = useNavigate()

    const fetchData = async () => {
        
    };
    
    useEffect(() => {
        try {
            fetchAlumnosNombresData();
            fetchEspecialidadesData();
            fetchGruposData();
            fetchRelacionAlumnoGrupo();
        } catch (error) {
            throw error;
        }
    }, []);
    
    const fetchEspecialidadesData = async () => {
        const response = await fetch('https://back-fiber-production.up.railway.app/api/especialidad')
        const data = await response.json()
        setEspecialidadData(data)
    }
    
    const fetchAlumnosNombresData = async () => {
        const response = await fetch('https://back-fiber-production.up.railway.app/api/alumnos/nombres')
        const data = await response.json()
        setNombresData(data)
    }

    const fetchGruposData = async () => {
        const response = await fetch('https://back-fiber-production.up.railway.app/api/grupos')
        const data = await response.json()
        setGruposData(data)
    }

    const fetchRelacionAlumnoGrupo = async () => {
        const response = await fetch('https://back-fiber-production.up.railway.app/api/alumnos/grupos')
        const data = await response.json()
        setRelacionData(data)
    }

    const [especialidadData, setEspecialidadData] = useState([])
    const [nombresData, setNombresData] = useState([])
    const [gruposData, setGruposData] = useState([])
    const [relacionData, setRelacionData] = useState([])
    
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

            case 'existAlumno':
                setSelectedComponent(<TableAlumnosNombres columnsAlumnosNombres={columnsAlumnosSinEspecialidad} />)

                break;

            case 'newGroup':
                setSelectedComponent(<FormularioGrupo columnsAlumnosPorInscribir={columnsAlumnosPorInscribir} especialidadData={especialidadData} nombresData={nombresData} relacionData={relacionData} />)
                
                break;

            case 'deleteGroup':
                setSelectedComponent(<DeleteGroup gruposData={gruposData} />)
                
                break;

            case 'bajaAlumno':
                setSelectedComponent(<TableAlumnosNombres columnsAlumnosNombres={columnsAlumnosNombres} />)

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