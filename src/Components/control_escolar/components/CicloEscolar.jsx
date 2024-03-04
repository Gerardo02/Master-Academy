import { Button, Popconfirm } from 'antd'
import { useEffect, useState } from 'react';

const CicloEscolar = () => {
    const [trimestre, setTrimestre] = useState(1)
    const [lastTri, setLastTri] = useState(false)
    const [cicloActivo, setCicloActivo] = useState(false)

    const onConfirmNewCycle = async () => {
        setCicloActivo(true)
    }

    useEffect(() => {
        if(trimestre >= 3) {
            setLastTri(true)
        } else {
            setLastTri(false)
        }
    }, [trimestre])

    const onConfirmFinishCycle = () => {
        setTrimestre(1)
        setCicloActivo(false)
    }

    return ( 
        <div className='ciclo-escolar'>
            <br /><br /><br />
            <Popconfirm
                    title={<span>Estas por iniciar un nuevo ciclo. Esto tendra cambios <strong>irreversibles</strong>. <br />Seguro que quieres continuar?</span>}
                    onConfirm={onConfirmNewCycle}
                    okText="Siguiente trimestre"
                    cancelText="Cancelar"
                    okButtonProps={{
                        type: 'primary',
                        danger: true
                    }}
            >
                <Button style={{width: '300px', height: '70px'}} size='large' disabled={cicloActivo} type='primary'>Iniciar Nuevo Ciclo Escolar</Button> <br /> <br />
            </Popconfirm>
            <div style={{display: cicloActivo ? 'block' : 'none'}}>

                <h1 style={{fontSize: '50px'}}>Trimestre Actual</h1>
                <h1 style={{fontSize: '40px'}}>{trimestre}</h1>
                <Popconfirm
                    title={<span>Estas por pasar de trimestre. Esto tendra cambios <strong>irreversibles</strong>. <br />Seguro que quieres continuar?</span>}
                    onConfirm={() => setTrimestre(trimestre + 1)}
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