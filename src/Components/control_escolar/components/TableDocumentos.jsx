import { Table } from 'antd';


const TableDocumentos = ({columnsDocumentosEntregados, documentosData}) => {

    return ( 
        <>
            <Table columns={columnsDocumentosEntregados} dataSource={documentosData} rowKey="id" pagination={{ pageSize: 20 }} />
        </>
     );
}
 
export default TableDocumentos;