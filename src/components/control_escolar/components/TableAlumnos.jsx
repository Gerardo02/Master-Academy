import { Button, Table } from 'antd';
import { Excel } from "antd-table-saveas-excel";


const TableAlumnos = ({alumnosData, columnsAlumnos}) => {

  const downloadExcel = () => {
    const excel = new Excel();
    excel
      .addSheet("sheet 1")
      .addColumns(columnsAlumnos)
      .addDataSource(alumnosData, {
        str2Percent: true
      })
      .saveAs("Excel.xlsx");
      
  }
  
  return ( 
      <>
        <Table columns={columnsAlumnos} dataSource={alumnosData} size='small' />
        <Button onClick={downloadExcel}>Descargar Excel</Button>
      </>
    );
}
 
export default TableAlumnos;