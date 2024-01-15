import { Table } from "antd";

const TableUsuarios = ({ columnsUsuarios, userData }) => {
    return ( 
        <>
            <Table columns={columnsUsuarios} dataSource={userData} rowKey="id" pagination={{ pageSize: 20 }} />
        </>
     );
}
 
export default TableUsuarios;