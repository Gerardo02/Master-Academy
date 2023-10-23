import { SnippetsOutlined, ArrowLeftOutlined, UnorderedListOutlined, FileSearchOutlined, HistoryOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { Menu } from 'antd';
import TableAlumnos from '../../control_escolar/components/TableAlumnos';
import BuscarAlumno from './BuscarAlumno';
import HistorialAlumno from './HistorialAlumno';

const items = [
    {
        label: 'Regresar',
        key: 'back',
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Lista de Alumnos',
        key: 'lista',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Buscar Alumno',
        key: 'buscarAlumno',
        icon: <FileSearchOutlined />,
    },
    {
        label: 'Historial de pagos',
        key: 'historial',
        icon: <HistoryOutlined />,
    },
    
    
  ];

const NavMenuPagos = ({ navigate, setSelectedComponent, data }) => {


    const [currentOption, setCurrentOption] = useState('lista');
    
    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/home')
                break;

            case 'lista':

                setSelectedComponent(<TableAlumnos />)
                break;

            case 'buscarAlumno':

                setSelectedComponent(<BuscarAlumno />)
                break;

            case 'historial':

                setSelectedComponent(<HistorialAlumno data={data} />)
                break;

            default:
                break;
        }
        
    },[currentOption])


    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={items} />
        </>
     );
}
 
export default NavMenuPagos;