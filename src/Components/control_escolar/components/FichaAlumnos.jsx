import { Input, Table, Button } from "antd";
import { useEffect, useState} from "react";
import EditarAlumno from "./EditarAlumno";
const { Search } = Input;


const FichaAlumnos = ({ setCurrentOption, setSelectedComponent, alumnosData, columnsAlumnosInscritosEditar }) => {

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedAlumnos, setSelectedAlumnos] = useState(null)
  const [visibleButton, setVisibleButton] = useState(false)
  // const [nombresData, setNombresData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setFilteredData(alumnosData);

    // try{
    //   fetchAlumnosNombresData();

    // }catch(error) {
    //   throw error
    // }
  }, [alumnosData])
  
  // const fetchAlumnosNombresData = async () => {
  //   const response = await fetch('http://127.0.0.1:3030/api/alumnos/nombres')
  //   const data = await response.json()
  //   setNombresData(data)
  // }

  const handleSearch = (value) => {
    setSelectedAlumnos([]);
    setVisibleButton(false);
    setShowTable(true);
    setSearchText(value);
    const filtered = alumnosData.filter((record) =>
      Object.values(record).some(
        (val) => val && val.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        setSelectedAlumnos(selectedRows[0])
        setVisibleButton(true)
    },
    selectedRowKeys: selectedAlumnos ? [selectedAlumnos.id] : [],
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
  };

  const onClick = () => {
    setCurrentOption('editar')
    setSelectedComponent(<EditarAlumno setCurrentOption={setCurrentOption} selectedAlumnos={selectedAlumnos} />)
  }


  return ( 
    <div className="buscar-alumno">
      <h2>Buscar alumno y selecciona para editar</h2>
      <Search
        placeholder="Buscar alumno"
        enterButton="Buscar"
        size="large"
        onSearch={(e) => handleSearch(e)}
      />
      <br /><br />
      <Table 
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columnsAlumnosInscritosEditar} 
        dataSource={filteredData} 
        rowKey={"id"} 
        style={{display: showTable ? 'block' : 'none'}} 
        pagination={false} 
      /> <br />
      <Button block type="primary" style={{display: visibleButton ? 'block' : 'none'}} onClick={onClick} >Editar</Button>
    </div>
  );
}
 
export default FichaAlumnos;