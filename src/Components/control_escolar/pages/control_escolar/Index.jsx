import React from "react";
import { useNavigate } from "react-router-dom";
import { itemsControlEscolar } from "../../../../Declarations/Navs/Items";
import { columnsAlumnos, columnsDocumentosEntregados, columnsAlumnosInscritos, columnsAlumnosInscritosEditar } from "../../../../Declarations/Tables/Columns";
import { Menu, Button } from "antd";
import { useEffect, useState } from "react";
import TableDocumentos from "../../components/TableDocumentos";
import TableAlumnos from "../../components/TableAlumnos";
import FichaAlumnos from "../../components/FichaAlumnos";
import Grupos from "../../components/Grupos";
import '../../styles/index.css'
import useLocalStorage from "../../../../Hooks/useLocalStorage";
import CicloEscolar from "../../components/CicloEscolar";
import { useMainData } from "../../../../MainDataProvider";
import HistorialAlumno from "../../components/HistorialAlumno";

const Index = () => {

    const { alumnosData, documentosData } = useMainData()

    useEffect(() => {
        try {
            fetchGruposData()
        } catch(error) {
            throw error
        }
    }, [])

    const fetchGruposData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3030/api/grupos')
            const data = await response.json()
            setGruposData(data)
        }catch (error) {
            throw error
        }
        
    }

    const [selectedComponent, setSelectedComponent] = useState(
        <p style={{textAlign: 'center'}}>
            <Button type="primary" onClick={() => setCurrentOption('groups')}>Regresar</Button>
        </p>
    )

    const [gruposData, setGruposData] = useState([])

    const [currentOption, setCurrentOption, clearCurrentOption] = useLocalStorage('navControl', 'lista');

    const navigate = useNavigate()

    useEffect(() => {
        

        switch(currentOption){

            case 'back':
                clearCurrentOption()
                navigate('/home')
                break;

            case 'lista':

                setSelectedComponent(<TableAlumnos alumnosData={alumnosData} columnsAlumnos={columnsAlumnos} />)

                break;

            case 'listaDocumentos':

                setSelectedComponent(<TableDocumentos columnsDocumentosEntregados={columnsDocumentosEntregados} documentosData={documentosData}/>)

                break;

            case 'ciclo':
                setSelectedComponent(<CicloEscolar />)
                break;
                
            case 'editarAlumno':

                setSelectedComponent(<FichaAlumnos setCurrentOption={setCurrentOption} setSelectedComponent={setSelectedComponent} alumnosData={alumnosData} columnsAlumnosInscritosEditar={columnsAlumnosInscritosEditar} />)

                break;

            case 'groups':

                setSelectedComponent(
                <Grupos 
                    nombresData={alumnosData} 
                    gruposData={gruposData} 
                    setCurrentOption={setCurrentOption} 
                    setSelectedComponent={setSelectedComponent} 
                    columnsAlumnosInscritos={columnsAlumnosInscritos} 
                />)

                break;
            
            case 'historial':
                setSelectedComponent(<HistorialAlumno alumnosData={alumnosData} />)

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