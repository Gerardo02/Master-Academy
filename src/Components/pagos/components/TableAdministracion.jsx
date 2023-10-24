import { Button, Table } from 'antd';

const TableAdministracion = ({columnsAdministracion, adminData}) => {
  
  return ( 
      <>
        <Table columns={columnsAdministracion} dataSource={adminData} />
      </>
    );
}
 
export default TableAdministracion;