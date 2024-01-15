import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { itemsAdministrador } from "../../../Declarations/Navs/Items";
import { Menu } from "antd";
import { columnsUsuarios } from "../../../Declarations/Tables/Columns";
import NuevoUsuario from "../components/NuevoUsuario";
import EditarUsuario from "../components/EditarUsuario";
import TableUsuarios from "../components/TableUsuarios";
import EliminarUsuario from "../components/EliminarUsuario";
import '../styles/index.css'

const Index = () => {

    useEffect(() => {
        try {
            fetchUsers()
        } catch(error) {
            throw error
        }
    },[])

    const fetchUsers = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/usuarios')
        const data = await response.json()
        setUserData(data)
    }   

    const navigate = useNavigate()

    const [userData, setUserData] = useState(null)

    const [tipo, setTipo] = useState('')
    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const [currentOption, setCurrentOption] = useState('newUser');

    useEffect(() => {

        switch(currentOption){

            case 'back':

                navigate('/home')
                break;

            case 'newUser':
                setSelectedComponent(<NuevoUsuario />)
                break;

            case 'changePassword':
                setTipo('password')
                setSelectedComponent(<EditarUsuario tipo={tipo} />)
                
                break;

            case 'changeUser':
                setTipo('user')
                setSelectedComponent(<EditarUsuario tipo={tipo} />)
                
                break;

            case 'deleteUser':
                setSelectedComponent(<EliminarUsuario />)
                
                break;

            case 'userList':
                setSelectedComponent(<TableUsuarios columnsUsuarios={columnsUsuarios} userData={userData} />)
                
                break;

            default:
                break;
        }
        
    },[currentOption, userData, tipo])
    return ( 
        <>
            <Menu onClick={(e) => setCurrentOption(e.key)} selectedKeys={[currentOption]} mode="horizontal" items={itemsAdministrador} />
            <br /><br />

            {selectedComponent}
        </>
     );
}
 
export default Index;