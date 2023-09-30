import { Badge, Descriptions } from "antd";
import alumnoImage from "../pages/InfoAlumno/alumnoejemplo.jpg";


const InfoAlumnos = ({ alumnosCard }) => {
    const items = [
        {
          key: '1',
          label: 'Nombre',
          children: `${alumnosCard.nombre} ${alumnosCard.apellidos}`,
        },
        {
          key: '2',
          label: 'Faltas',
          children: '10',
        },
        {
          key: '3',
          label: 'Adeudo',
          children: 'SI (Reportar a caja)',
        },
        {
          key: '4',
          label: 'Matricula',
          children: alumnosCard.matricula,
        },
        {
          key: '5',
          label: 'Usage Time',
          children: '2019-04-24 18:00:00',
          span: 2,
        },
        {
          key: '6',
          label: 'Status',
          children: <Badge status="processing" text="Running" />,
          span: 3,
        },
        {
          key: '7',
          label: 'Foto',
          children: <img src={alumnoImage} width={190}/>,
        },
        {
          key: '8',
          label: 'Discount',
          children: '$20.00',
        },
        {
          key: '9',
          label: 'Official Receipts',
          children: '$60.00',
        },
        
      ];
    return ( 
        <>

            <Descriptions title="Informacion del alumno" bordered items={items} />
        </>
     );
}
 
export default InfoAlumnos;