import { Table, Input } from "antd";
import { useEffect, useState } from "react";

const TableAlumnosNombres = ({ columnsAlumnosNombres, nombresData }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Set the initial filteredData once nombresData is available
        setFilteredData(nombresData);
    }, [nombresData]);

    const handleSearch = (value) => {
        setSearchText(value);
        const filtered = nombresData.filter((record) =>
            Object.values(record).some(
                (val) =>
                    val && val.toString().toLowerCase().includes(value.toLowerCase())
            )
        );
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
            <Table columns={columnsAlumnosNombres} dataSource={filteredData} rowKey="id" pagination={{ pageSize: 20 }} size="small" />
        </div>
    );
};

export default TableAlumnosNombres;