export const columnsAlumnos = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Apellidos',
      dataIndex: 'apellidos',
      key: 'apellidos',
    },
    {
      title: 'Matricula',
      dataIndex: 'matricula',
      key: 'matricula',
    },
    {
      title: 'Fecha de nacimiento',
      dataIndex: 'fecha_nacimiento',
      key: 'fecha_nacimiento',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Nombre del tutor',
      dataIndex: 'nombre_tutor',
      key: 'nombre_tutor',
    },
    {
      title: 'Curp',
      dataIndex: 'curp',
      key: 'curp',
    },
    {
      title: 'Localidad',
      dataIndex: 'localidad',
      key: 'localidad',
    },
    {
      title: 'Codigo postal',
      dataIndex: 'codigo_postal',
      key: 'codigo_postal',
    },
    {
      title: 'Direccion',
      dataIndex: 'direccion',
      key: 'direccion',
    },
    {
      title: 'Direccion',
      dataIndex: 'direccion',
      key: 'direccion',
    },
    {
      title: 'Telefono fijo',
      dataIndex: 'telefono_fijo',
      key: 'telefono_fijo',
    },
    {
      title: 'Celular',
      dataIndex: 'celular',
      key: 'celular',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      key: 'correo',
    },
    
];

export const columnsAdministracion = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellidos',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    key: 'matricula',
  },
  {
    title: 'Adeudo',
    dataIndex: 'adeudo',
    key: 'adeudo',
    // render: ((_, { adeudo } )=> (
    //   <>
    //     {
    //       adeudo ? <span style={{color: "green"}}>Al corriente</span> : <span style={{color: "red"}}>Debe</span>
    //     }
    //   </>
    // ))
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  
];

export const columnsDocumentosEntregados = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellidos',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    key: 'matricula',
  },
  {
    title: 'Acta de nacimiento',
    dataIndex: 'acta_de_nacimiento',
    key: 'acta_de_nacimiento',
    render: ((_, { acta_de_nacimiento }) => (
      <>
        {
          acta_de_nacimiento ? <span style={{color: "green"}}>Entregado</span> : <span style={{color: "red"}}>Pendiente</span>
        }
      </>
    ))
  },
  {
    title: 'Curp',
    dataIndex: 'curp',
    key: 'curp',
    render: ((_, { curp }) => (
      <>
        {
          curp ? <span style={{color: "green"}}>Entregado</span> : <span style={{color: "red"}}>Pendiente</span>
        }
      </>
    ))
  },
  {
    title: 'Comprobante de domicilio',
    dataIndex: 'comprobante_de_domicilio',
    key: 'comprobante_de_domicilio',
    render: ((_, { comprobante_de_domicilio }) => (
      <>
        {
          comprobante_de_domicilio ? <span style={{color: "green"}}>Entregado</span> : <span style={{color: "red"}}>Pendiente</span>
        }
      </>
    ))
  },
  {
    title: '¿Mayor de 15 años?',
    dataIndex: 'mayor_quince',
    key: 'mayor_quince',
    render: ((_, { mayor_quince }) => (
      <>
        {
          mayor_quince ? <span style={{color: "green"}}>Entregado</span> : <span style={{color: "red"}}>Pendiente</span>
        }
      </>
    ))
  },
  {
    title: 'Fotos',
    dataIndex: 'fotos',
    key: 'fotos',
    render: ((_, { fotos }) => (
      <>
        {
          fotos ? <span style={{color: "green"}}>Entregado</span> : <span style={{color: "red"}}>Pendiente</span>
        }
      </>
    ))
  },
  
];