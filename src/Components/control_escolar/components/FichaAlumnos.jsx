import { Input, Table } from "antd";
import { useEffect, useState} from "react";
const { Search } = Input;


const FichaAlumnos = ({ columnsAlumnosInscritosEditar }) => {

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [nombresData, setNombresData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    try{
      fetchAlumnosNombresData();
      setFilteredData(nombresData);

    }catch(error) {
      throw error
    }
  }, [])
  
  const fetchAlumnosNombresData = async () => {
    const response = await fetch('http://127.0.0.1:3030/api/alumnos/nombres')
    const data = await response.json()
    setNombresData(data)
  }

  const handleSearch = (value) => {
    setShowTable(true);
    setSearchText(value);
    const filtered = nombresData.filter((record) =>
      Object.values(record).some(
        (val) => val && val.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };


  return ( 
    <div className="buscar-alumno">
      <h2>Buscar alumno</h2>
      <Search
        placeholder="input search text"
        enterButton="Buscar"
        size="large"
        onSearch={(e) => handleSearch(e)}
      />
      <br /><br />
      <Table columns={columnsAlumnosInscritosEditar} dataSource={filteredData} rowKey={"id"} style={{display: showTable ? 'block' : 'none'}} pagination={false} />
    </div>
  );
}
 
export default FichaAlumnos;