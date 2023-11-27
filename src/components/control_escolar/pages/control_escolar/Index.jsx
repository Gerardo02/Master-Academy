import { useNavigate } from "react-router-dom";
import { itemsControlEscolar } from "../../../../Declarations/Navs/Items";
import { columnsAlumnos, columnsDocumentosEntregados } from "../../../../Declarations/Tables/Columns";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import TableDocumentos from "../../components/TableDocumentos";
import TableAlumnos from "../../components/TableAlumnos";
import FichaAlumnos from "../../components/FichaAlumnos";
import Formulario from "../../components/Formulario";
import Grupos from "../../components/Grupos";
import '../../styles/index.css'

const alumnosCard = {
        
    nombre: 'Pedro',
    apellidos: 'Juarez Herrera',
    matricula: '123456'

}

const groupData = [
    {
        id: 1,
        nombreMaestro: 'Carlos',
        especialidad: 'Cortes',
        horario: '10:00 - 12:00'
    },
    {
        id: 2,
        nombreMaestro: 'Pedro',
        especialidad: 'Uñas',
        horario: '11:00 - 14:00'
    },
    {
        id: 3,
        nombreMaestro: 'Carlos',
        especialidad: 'Cortes',
        horario: '12:00 - 13:00'
    },
    {
        id: 4,
        nombreMaestro: 'Pedro',
        especialidad: 'Uñas',
        horario: '14:00 - 16:00'
    },

]

const Index = () => {

    useEffect(() => {
        try {
            fetchAlumnosData()
            fetchDocumentosEntregados()
        } catch(error) {
            throw error
        }
    }, [])

    const fetchAlumnosData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/alumnos')
        const data = await response.json()
        setAlumnosData(data)
    }

    const fetchDocumentosEntregados = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/documentos')
        const data = await response.json()
        console.log(data);
        setDocumentosData(data)
    }

    const [selectedComponent, setSelectedComponent] = useState(<></>)

    const [alumnosData, setAlumnosData] = useState([])
    const [documentosData, setDocumentosData] = useState([])
    
    const [currentOption, setCurrentOption] = useState('lista');

    const navigate = useNavigate()

    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/home')
                break;

            case 'lista':

                setSelectedComponent(<TableAlumnos alumnosData={alumnosData} columnsAlumnos={columnsAlumnos} />)
                break;

            case 'listaDocumentos':

                setSelectedComponent(<TableDocumentos columnsDocumentosEntregados={columnsDocumentosEntregados} documentosData={documentosData}/>)
                break;
                
            case 'ficha':

                setSelectedComponent(<FichaAlumnos alumnosCard={alumnosCard} />)
                break;

            
            case 'editGroup':

                
                setSelectedComponent(<Formulario />)
                break;

            case 'groups':
                setSelectedComponent(<Grupos groupData={groupData} setCurrentOption={setCurrentOption} />)
                break;

            

            default:
                break;
        }
        
    },[currentOption, alumnosData])

    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={itemsControlEscolar} />
            <br />
            <br />
            {selectedComponent}
            
        </>
     );
}
 
export default Index;