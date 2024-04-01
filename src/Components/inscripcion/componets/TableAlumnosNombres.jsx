import { Table, Input, Skeleton, Button } from "antd";
import { useEffect, useState } from "react";

const TableAlumnosNombres = ({ columnsAlumnosNombres }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [nombresData, setNombresData] = useState([])
    const [changed, setChanged] = useState(false);

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
        setChanged(true)
        setSearchText(value);
        const filtered = nombresData.filter((record) =>
            Object.values(record).some(
                (val) =>
                    val && val.toString().toLowerCase().includes(value.toLowerCase())
            )
        );
        console.log("Filtered Data:", filtered);
        setFilteredData(filtered);
    };

    const searchInput = (
        <Input
            placeholder="Buscar nombre"
            style={{ width: "33%" }}
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            allowClear
        />
    );

    return (
        <div className="search-table">
            <h4>Buscar nombre</h4>
            {searchInput}
            <br />
            <br />

            {!changed ? (
                    <Table columns={columnsAlumnosNombres} dataSource={nombresData} rowKey="id" pagination={{ pageSize: 20 }} size="small" />
                ) : (
                    <Table columns={columnsAlumnosNombres} dataSource={filteredData} rowKey="id" pagination={{ pageSize: 20 }} size="small" />
                )
            }

        </div>
    );
};

export default TableAlumnosNombres;