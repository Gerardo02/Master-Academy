import { Button, Table } from 'antd';
import { Excel } from "antd-table-saveas-excel";

const TableAdministracion = ({columnsAdministracion, adminData}) => {

  const downloadExcel = () => {
    const excel = new Excel();
    excel
      .addSheet("sheet 1")
      .addColumns(columnsAdministracion)
      .addDataSource(adminData, {
        str2Percent: true
      })
      .saveAs("Excel.xlsx");
      
  }
  
  return ( 
      <>
        <Table columns={columnsAdministracion} dataSource={adminData} rowKey="id" pagination={{ pageSize: 20 }} />
        <Button onClick={downloadExcel}>Descargar Excel</Button>
      </>
    );
}
 
export default TableAdministracion;