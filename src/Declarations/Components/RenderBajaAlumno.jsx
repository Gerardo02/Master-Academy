import { Popconfirm, Button } from 'antd'
import { useState } from 'react';

const RenderBajaAlumno = ({ record }) => {

    const [isLoading, setIsLoading] = useState(false)

    const onConfirm = async () => {
        setIsLoading(true)

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

        setIsLoading(false)

        window.location.reload(false);
        // Implement your delete API call or local state update here
        
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Popconfirm
                title={<span>¿Seguro que quieres dar de baja al alumno <strong>{record.nombre} {record.apellidos}</strong>?</span>}
                onConfirm={onConfirm}
                okText="Si"
                cancelText="No"
            >
                <Button style={{ backgroundColor: 'red', color: 'white' }} loading={isLoading} >Baja</Button>
            </Popconfirm>
        </div>
      );
}
 
export default RenderBajaAlumno;