import { SnippetsOutlined, ArrowLeftOutlined, UnorderedListOutlined, OrderedListOutlined, FormOutlined, CreditCardOutlined, DeleteOutlined, EditOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import TableAlumnos from './TableAlumnos';
import FichaAlumnos from './FichaAlumnos';
import Formulario from './Formulario';
import DeleteGroup from './DeleteGroup';
import ControlPracticas from './ControlPracticas';
import Grupos from './Grupos';

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
        label: 'Lista de Asistencias',
        key: 'listaAsist',
        icon: <OrderedListOutlined />,
    },
    {
        label: 'Ficha de Alumno',
        key: 'ficha',
        icon: <CreditCardOutlined />,
    },
    {
        label: 'Control de practicas',
        key: 'practicas',
        icon: <SnippetsOutlined />,
    },
    {
        label: 'Grupos',
        key: 'groups',
        icon: <AppstoreOutlined />
    },
    {
        label: 'Crear nuevo grupo',
        key: 'newGroup',
        icon: <FormOutlined />,
    },
    {
        label: 'Editar grupo',
        key: 'editGroup',
        icon: <EditOutlined />,
    },
    {
        label: 'Eliminar grupo',
        key: 'deleteGroup',
        icon: <DeleteOutlined />,
    },
    
  ];

const NavMenu = ({ setSelectedComponent, navigate, groupData, alumnosCard }) => {


    const [currentOption, setCurrentOption] = useState('lista');
    const [createEdit, setCreateEdit] = useState('')
    
    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/')
                break;

            case 'lista':

                setSelectedComponent(<TableAlumnos />)
                break;

            case 'listaAsist':

                setSelectedComponent(<TableAlumnos />)
                break;
                
            case 'ficha':

                setSelectedComponent(<FichaAlumnos alumnosCard={alumnosCard} />)
                break;

            case 'practicas':

                setSelectedComponent(<ControlPracticas />)
                break;

            case 'newGroup':

                setCreateEdit('Crear')
                setSelectedComponent(<Formulario createEdit={createEdit} />)
                break;

            case 'editGroup':

                setCreateEdit('Editar')
                setSelectedComponent(<Formulario createEdit={createEdit} />)
                break;

            case 'deleteGroup':
                setSelectedComponent(<DeleteGroup />)
                break;

            case 'groups':
                setSelectedComponent(<Grupos groupData={groupData} setCurrentOption={setCurrentOption} />)
                break;

            default:
                break;
        }
        
    },[currentOption, createEdit])


    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={items} />
        </>
     );
}
 
export default NavMenu;