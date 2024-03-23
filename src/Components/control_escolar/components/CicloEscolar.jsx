import { Button, Popconfirm } from 'antd'
import { useEffect, useState } from 'react';
import { useMainData } from '../../../MainDataProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

const CicloEscolar = () => {
    

    const { ciclosData, gruposData } = useMainData()

    const [cicloEscolar, setcicloEscolar] = useState({})
    const [lastTri, setLastTri] = useState(false)
    const [cicloActivo, setCicloActivo] = useState(false)
    const [gruposDataBien, setGruposDataBien] = useState([])

    useEffect(() => {
        setGruposDataBien(gruposData)
    }, [gruposData])

    const getCurrentAndNextTwoMonths = () => {
        dayjs.locale('es'); // Set the locale to Spanish

        const currentMonth = dayjs().format('MMMM');
        const nextMonth = dayjs().add(1, 'month').format('MMMM');
        const thirdMonth = dayjs().add(2, 'months').format('MMMM');

        let result = `${currentMonth} - `;

        if (dayjs().month() + 1 !== dayjs().add(1, 'month').month()) {
            // If next month is not consecutive, include it in the result
            result += `${nextMonth} - `;
        }

        result += thirdMonth;

        return result;
    };

    const getCurrentYear = () => {
        const currentYear = dayjs().format('YYYY');
        return currentYear;
    };

    useEffect(() => {
        ciclosData.map((elem) => {
           if(elem.activo === true) {
            setCicloActivo(true)
            setcicloEscolar(elem)
            return
           }
        })
    }, [ciclosData])

    useEffect(() => {
        if(cicloEscolar.trimestre >= 3) {
            setLastTri(true)
        } else {
            setLastTri(false)
        }
    }, [cicloEscolar.trimestre])

    const onConfirmNewCycle = async () => {

        const newCycle = {
            "nombre": getCurrentAndNextTwoMonths(),
            "year": getCurrentYear(),
            "trimestre": 1,
            "activo": true
        }

        try {
            await fetch(`https://back-fiber-production.up.railway.app/api/ciclo/`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCycle)
            })
        }catch(error) {
            throw error
        }

        window.location.reload(false);
        
    }

    const onConfirmFinishCycle = async () => {
        cicloEscolar.activo = false

        try {
            await fetch(`https://back-fiber-production.up.railway.app/api/ciclo/${cicloEscolar.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cicloEscolar)
            })
        }catch(error) {
            throw error
        }

        try{
            for(let i = 0; i < gruposDataBien.length; i++) {
                const finishedGroupData = {
                    'nombre': gruposDataBien[i].nombre,
                    'cantidad_de_alumnos': gruposDataBien[i].cantidad_de_alumnos,
                    'especialidad_id': gruposDataBien[i].especialidad.id,
                    'ciclo_escolar_id': gruposDataBien[i].ciclo_escolar.id,
                    'id_grupo_place_holder': gruposDataBien[i].id
                }
                await fetch(`https://back-fiber-production.up.railway.app/api/grupos/concluidos`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(finishedGroupData)
                })
            }
            
        }catch(error){
            throw error
        }

        try{
            await fetch(`https://back-fiber-production.up.railway.app/api/grupos/`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
            });
        }catch(error){
            throw error
        }

        window.location.reload(false);
    }

    const onConfirmNextTri = async () => {
        cicloEscolar.trimestre = cicloEscolar.trimestre + 1;

        try {
            await fetch(`https://back-fiber-production.up.railway.app/api/ciclo/${cicloEscolar.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cicloEscolar)
            })
        }catch(error) {
            throw error
        }

        window.location.reload(false);
    }

    return ( 
        <div className='ciclo-escolar'>
            <br /><br /><br />
            <Popconfirm
                    title={<span>Estas por iniciar un nuevo ciclo. Esto tendra cambios <strong>irreversibles</strong>. <br />Seguro que quieres continuar?</span>}
                    onConfirm={onConfirmNewCycle}
                    okText="Nuevo ciclo"
                    cancelText="Cancelar"
                    okButtonProps={{
                        type: 'primary',
                    }}
            >
                <Button style={{width: '300px', height: '70px'}} size='large' disabled={cicloActivo} type='primary'>Iniciar Nuevo Ciclo Escolar</Button> <br /> <br />
            </Popconfirm>
            <div style={{display: cicloActivo ? 'block' : 'none'}}>
                <h1 style={{fontSize: '40px'}}><u>Ciclo: {cicloEscolar.nombre} {cicloEscolar.year}</u></h1>
                <h2 style={{fontSize: '35px'}}>Trimestre Actual:</h2>
                <h2 style={{fontSize: '35px'}}>{cicloEscolar.trimestre}</h2>
                <Popconfirm
                    title={<span>Estas por pasar de trimestre. Esto tendra cambios <strong>irreversibles</strong>. <br />Seguro que quieres continuar?</span>}
                    onConfirm={onConfirmNextTri}
                    okText="Siguiente trimestre"
                    cancelText="Cancelar"
                    okButtonProps={{
                        type: 'primary',
                        danger: true
                    }}
                >
                    <Button style={{width: '300px', height: '70px'}} size='large' disabled={lastTri} type='primary' ghost>Siguiente Trimestre</Button> <br /> <br />
                </Popconfirm>
                <Popconfirm
                    title={<span>Estas por terminar el ciclo. Esto tendra cambios <strong>irreversibles</strong>. <br />Seguro que quieres continuar?</span>}
                    onConfirm={onConfirmFinishCycle}
                    okText="Terminar Ciclo"
                    cancelText="Cancelar"
                    okButtonProps={{
                        type: 'primary',
                        danger: true
                    }}
                >
                    <Button style={{width: '300px', height: '70px'}} size='large' disabled={!lastTri} danger>Terminar Ciclo</Button>
                </Popconfirm>
            </div>

        </div>
     );
}
 
export default CicloEscolar;