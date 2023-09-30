import { useNavigate } from "react-router-dom";
import NavMenuPagos from '../../components/NavMenuPagos';
import { useState } from "react";


const Index = () => {

    const navigate = useNavigate()
    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const data = [
        'Pago realizado por Raul de la Mancha a las 14:45 con un monto de 50$',
        'Pago realizado por Monica Galindo a las 20:14 con un monto de 200$',
        'Pago realizado por Sebastian Gutierrez a las 11:27 con un monto de 150$',
        'Pago realizado por Alma Guadalupe Encinas a las 16:39 con un monto de 70$',
        'Pago realizado por Marta Cristina Perez a las 12:11 con un monto de 400$',
    ];

    return ( 
        <>
            <NavMenuPagos navigate={navigate} setSelectedComponent={setSelectedComponent} data={data} />
            <br /><br />

            {selectedComponent}
        </>
     );
}
 
export default Index;