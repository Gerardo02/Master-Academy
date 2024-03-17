import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "antd";
import { itemsAdministracion } from "../../../../Declarations/Navs/Items";
import { columnsAdministracion } from "../../../../Declarations/Tables/Columns";
import RegistroPago from "../../components/RegistroPago";
import HistorialAlumno from "../../components/HistorialAlumno";
import TableAdministracion from "../../components/TableAdministracion";
import useLocalStorage from "../../../../Hooks/useLocalStorage";
import "../../styles/index.css"

const data = [
    'Pago realizado por Raul de la Mancha a las 14:45 con un monto de 50$',
    'Pago realizado por Monica Galindo a las 20:14 con un monto de 200$',
    'Pago realizado por Sebastian Gutierrez a las 11:27 con un monto de 150$',
    'Pago realizado por Alma Guadalupe Encinas a las 16:39 con un monto de 70$',
    'Pago realizado por Marta Cristina Perez a las 12:11 con un monto de 400$',
];


const Index = () => {

    useEffect(() => {
        try {
            fetchAdminData()
        } catch(error) {
            throw error
        }
    }, [])

    const navigate = useNavigate()
    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const [currentOption, setCurrentOption, clearCurrentOption] = useLocalStorage('nanAdministracion', 'lista')

    const [adminData, setAdminData] = useState([])

    const fetchAdminData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/administracion')
        const data = await response.json()
        setAdminData(data)
    }
    
    useEffect(() => {

        switch(currentOption){

            case 'back':
                clearCurrentOption()
                navigate('/home')
                break;

            case 'lista':

                setSelectedComponent(<TableAdministracion columnsAdministracion={columnsAdministracion} adminData={adminData} />)
                break;

            case 'registroPago':

                setSelectedComponent(<RegistroPago />)
                break;

            case 'historial':

                setSelectedComponent(<HistorialAlumno data={data} />)
                break;

            default:
                break;
        }
        
    },[currentOption, adminData])

    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={itemsAdministracion} />
            <br /><br />

            {selectedComponent}
        </>
     );
}
 
export default Index;