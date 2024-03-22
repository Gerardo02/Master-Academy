import { Table } from 'antd'
import { columnsAdministracion2 } from '../../../Declarations/Tables/Columns';
import { useEffect, useState } from 'react';

const ValidarPago = () => {

    useEffect(() => {
        try {
            fetchAdminData()
        } catch(error) {
            throw error
        }
    }, [])

    const [adminData, setAdminData] = useState([])

    const fetchAdminData = async () => {
        const response = await fetch('http://127.0.0.1:3030/api/administracion')
        const data = await response.json()
        setAdminData(data)
    }

    return ( 
        <>
            <Table columns={columnsAdministracion2} dataSource={adminData} rowKey='id' />
        </>
     );
}
 
export default ValidarPago;