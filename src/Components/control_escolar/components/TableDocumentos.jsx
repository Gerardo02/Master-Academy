import { Table } from 'antd';


const TableDocumentos = ({columnsDocumentosEntregados, documentosData}) => {

    return ( 
        <>
            <Table columns={columnsDocumentosEntregados} dataSource={documentosData} size='small' />
        </>
     );
}
 
export default TableDocumentos;