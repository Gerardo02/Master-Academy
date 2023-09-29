import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import { useState } from "react";

const Index = () => {

    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const navigate = useNavigate()
    const groupData = [
        {
            id: 1,
            nombreMaestro: 'Carlos',
            especialidad: 'Cortes',
            horario: '10:00 - 12:00'
        },
        {
            id: 2,
            nombreMaestro: 'Pedro',
            especialidad: 'Uñas',
            horario: '11:00 - 14:00'
        },
        {
            id: 3,
            nombreMaestro: 'Carlos',
            especialidad: 'Cortes',
            horario: '12:00 - 13:00'
        },
        {
            id: 4,
            nombreMaestro: 'Pedro',
            especialidad: 'Uñas',
            horario: '14:00 - 16:00'
        },

    ]

    return ( 
        <>
            <NavMenu groupData={groupData} setSelectedComponent={setSelectedComponent} navigate={navigate} />
            <br />
            <br />
            {selectedComponent}
        </>
     );
}
 
export default Index;