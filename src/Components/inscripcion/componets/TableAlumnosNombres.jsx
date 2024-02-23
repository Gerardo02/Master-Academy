import { Table, Input, Button, Popconfirm } from "antd";
import { useState, useEffect } from "react";

const TableAlumnosNombres = ({ columnsAlumnosNombres, nombresData }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(nombresData);
    const [addNewButton, setAddNewButton] = useState(columnsAlumnosNombres);

    const createButton = {
        title: 'Baja',
        dataIndex: 'baja',
        key: 'baja',
        render: ((_, record) => (
            <div style={{ textAlign: 'center' }}>
                <Popconfirm
                    title="Seguro que quieres dar de baja alumno?"
                    onConfirm={() => handleDelete(record)}
                    okText="Si"
                    cancelText="No"
                >
                    <Button style={{ backgroundColor: 'red', color: 'white' }}>Baja</Button>
                </Popconfirm>
            </div>
        ))
    };

    const handleDelete = async (record) => {
        // Handle delete logic here using the record data
        try {
            const response = await fetch(`http://127.0.0.1:3030/api/alumnos/${record.id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
            });
        
            if (!response.ok) {
                // handle the case where the delete request was not successful
                throw new Error(`Failed to delete record with ID ${record.id}`);
            }
        
            // Optionally, you can check the response or perform additional actions if needed

        
        } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('Error during delete request:', error);
            // You might want to throw or handle the error differently
            throw error;
        }

        window.location.reload(false);
        // Implement your delete API call or local state update here
    };

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

    useEffect(() => {
        setAddNewButton([...addNewButton, createButton]);

    }, [])

    return (
        <div className="search-table">
            <h4>Buscar nombre</h4>
            {searchInput}
            <br />
            <br />
            <Table columns={addNewButton} dataSource={filteredData} rowKey="id" pagination={{ pageSize: 20 }} size="small" />
        </div>
    );
};

export default TableAlumnosNombres;