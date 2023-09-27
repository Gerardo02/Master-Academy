import { ArrowLeftOutlined, UnorderedListOutlined, FormOutlined, CreditCardOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import TableAlumnos from './TableAlumnos';
import FichaAlumnos from './FichaAlumnos';
import Formulario from './Formulario';
import DeleteGroup from './DeleteGroup';

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
        label: 'Ficha de Alumno',
        key: 'ficha',
        icon: <CreditCardOutlined />,
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

const NavMenu = ({ setSelectedComponent, navigate }) => {


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
                
            case 'ficha':

                setSelectedComponent(<FichaAlumnos />)
                break;

            case 'newGroup':

                setCreateEdit('create')
                setSelectedComponent(<Formulario createEdit={createEdit} />)
                break;

            case 'editGroup':

                setCreateEdit('edit')
                setSelectedComponent(<Formulario createEdit={createEdit} />)
                break;

            case 'deleteGroup':
                setSelectedComponent(<DeleteGroup />)
                break;

            default:
                break;
        }
        
    },[currentOption, createEdit])
    

    const onClick = (e) => {
        setCurrentOption(e.key);
    };


    return ( 
        <>
            <Menu onClick={onClick} selectedKeys={[currentOption]} mode="horizontal" items={items} />
        </>
     );
}
 
export default NavMenu;