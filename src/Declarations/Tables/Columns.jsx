import { Button, Popconfirm } from 'antd'

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
          acta_de_nacimiento ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
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
          curp ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
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
          comprobante_de_domicilio ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
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
          mayor_quince ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
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
          fotos ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
        }
      </>
    ))
  },
  
];

export const columnsUsuarios = [
  {
    title: 'Usuario',
    dataIndex: 'usuario',
    key: 'usuario',
  },
  {
    title: 'Permiso',
    dataIndex: 'permisos',
    key: 'permisos',
    render: ((_, { permisos }) => (
      <span style={{ color: "black" }}>
        <strong>
          {
            permisos.permiso
          }
        </strong>
      </span>
    ))
  },
  
];

export const columnsAlumnosNombres = [
  {
    title: 'Nombres',
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
  
];

export const columnsPermisos = [
  {
    title: 'Permiso',
    dataIndex: 'permiso',
    key: 'permiso',
  },
  {
    title: 'Administracion',
    dataIndex: 'administracion',
    key: 'administracion',
    render: ((_, { administracion }) => (
      <>
        {
          administracion ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
        }
      </>
    ))
  },
  {
    title: 'Control Escolar',
    dataIndex: 'control_escolar',
    key: 'control_escolar',
    render: ((_, { control_escolar }) => (
      <>
        {
          control_escolar ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
        }
      </>
    ))
  },
  {
    title: 'Administrador',
    dataIndex: 'administrador',
    key: 'administrador',
    render: ((_, { administrador }) => (
      <>
        {
          administrador ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
        }
      </>
    ))
  },
  {
    title: 'Inscripcion',
    dataIndex: 'inscripcion',
    key: 'inscripcion',
    render: ((_, { inscripcion }) => (
      <>
        {
          inscripcion ? <span style={{color: "green"}}>&#x2705;</span> : <span style={{color: "red"}}>&#10060;</span>
        }
      </>
    ))
  },
  {
    title: 'Borrar',
    dataIndex: 'borrar',
    key: 'borrar',
    render: ((_, record) => (
        <div style={{ textAlign: 'center' }}>
            <Popconfirm
                title="Seguro que quieres dar de baja alumno?"
                onConfirm={async (e) => {
                  // Handle delete logic here using the record data
                  try {
                    const response = await fetch(`http://127.0.0.1:3030/api/permisos/${record.id}`, {
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
                }}
                okText="Si"
                cancelText="No"
            >
                <Button style={{ backgroundColor: 'red', color: 'white' }}>Borrar</Button>
            </Popconfirm>
        </div>
    ))
  }
  
  
  
];
