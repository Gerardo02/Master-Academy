import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { itemsAdministrador } from "../../../Declarations/Navs/Items";
import { Menu } from "antd";
import { columnsUsuarios, columnsPermisos } from "../../../Declarations/Tables/Columns";
import NuevoUsuario from "../components/NuevoUsuario";
import EditarUsuario from "../components/EditarUsuario";
import TableUsuarios from "../components/TableUsuarios";
import EliminarUsuario from "../components/EliminarUsuario";
import '../styles/index.css'
import CrearPermisos from "../components/CrearPermisos";
import EditarPassword from "../components/EditarPassword";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import TablePermisos from "../components/TablePermisos";
import EditarPermiso from "../components/EditarPermiso";

const formItemPassLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
};

const formItemUserLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
};

const formItemDeleteLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
};

const formItemPermisoUserLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
};

const Index = () => {

    useEffect(() => {
        try {
            fetchUsers()
            fetchPermisos()
        } catch(error) {
            throw error
        }
    },[])

    const fetchUsers = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/usuarios')
        const data = await response.json()
        setUserData(data)
    }
    const fetchPermisos = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/permisos')
        const data = await response.json()
        setPermisosData(data)
    }

    const navigate = useNavigate()

    const [userData, setUserData] = useState(null)
    const [permisosData, setPermisosData] = useState([])

    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const [currentOption, setCurrentOption, clearCurrentOption] = useLocalStorage('navAdmin', 'newUser');

    useEffect(() => {

        switch(currentOption){

            case 'back':
                clearCurrentOption();
                navigate('/home')
                break;

            case 'newUser':
                setSelectedComponent(<NuevoUsuario permisosData={permisosData} />)
                break;

            case 'changePassword':
                
                setSelectedComponent(<EditarPassword layout={formItemPassLayout}/>)
                
                break;

            case 'changeUser':
                
                setSelectedComponent(<EditarUsuario layout={formItemUserLayout}/>)
                
                break;  

            case 'createPermiso':
                setSelectedComponent(<CrearPermisos />)
                
                break;

            case 'changePermit':
                setSelectedComponent(<EditarPermiso permisosData={permisosData} layout={formItemPermisoUserLayout} />)
                break;

            case 'deleteUser':
                setSelectedComponent(<EliminarUsuario layout={formItemDeleteLayout}/>)
                
                break;

            case 'userList':
                setSelectedComponent(<TableUsuarios columnsUsuarios={columnsUsuarios} userData={userData} />)
                
                break;

            case 'permList':
                setSelectedComponent(<TablePermisos columnsPermisos={columnsPermisos} permisosData={permisosData} />)
            default:
                break;
        }
        
    },[currentOption, userData])
    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={itemsAdministrador} />
            <br /><br />

            {selectedComponent}
        </>
     );
}
 
export default Index;