import { SnippetsOutlined, ArrowLeftOutlined, UnorderedListOutlined, FileSearchOutlined, HistoryOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { Menu } from 'antd';
import InfoAlumno from './InfoAlumnos';

const items = [
    {
        label: 'Regresar',
        key: 'back',
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Informacion del alumno',
        key: 'info',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Calificaciones',
        key: 'calificaciones',
        icon: <FileSearchOutlined />,
    },
    {
        label: 'Progreso de practicas',
        key: 'practicas',
        icon: <HistoryOutlined />,
    },
    
    
  ];

const NavBarAlumno = ({ alumnosCard, navigate, setSelectedComponent }) => {


    const [currentOption, setCurrentOption] = useState('info');
    
    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/alumnos')
                break;

            case 'info':

                setSelectedComponent(<InfoAlumno alumnosCard={alumnosCard} />)
                break;

            case 'calificaciones':

                
                break;

            case 'practicas':

                
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
 
export default NavBarAlumno;