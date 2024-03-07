import { 
    ArrowLeftOutlined, 
    UnorderedListOutlined, 
    OrderedListOutlined, 
    FormOutlined, 
    CreditCardOutlined, 
    DeleteOutlined, 
    EditOutlined, 
    AppstoreOutlined, 
    FileSearchOutlined, 
    HistoryOutlined,
    UserDeleteOutlined,
    SafetyCertificateOutlined,
    LockOutlined,
    AppstoreAddOutlined,
    BookOutlined,
} from '@ant-design/icons';


export const itemsControlEscolar = [
    
    {
        label: 'Regresar',
        key: 'back',
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Ciclo Escolar',
        key: 'ciclo',
        icon: <BookOutlined />,
    },
    {
        label: 'Lista de Alumnos',
        key: 'lista',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Lista documentos entregados',
        key: 'listaDocumentos',
        icon: <OrderedListOutlined />,
    },
    {
        label: 'Editar Alumnos',
        key: 'editarAlumno',
        icon: <CreditCardOutlined />,
    },
    {
        label: 'Grupos',
        key: 'groups',
        icon: <AppstoreOutlined />
    },
    
];

export const itemsAdministracion = [
    {
        label: 'Regresar',
        key: 'back',
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Lista de Alumnos',
        key: 'lista',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Registrar Pago',
        key: 'registroPago',
        icon: <FileSearchOutlined />,
    },
    {
        label: 'Historial de pagos',
        key: 'historial',
        icon: <HistoryOutlined />,
    },
    
    
];

export const itemsInscripcion = [
    {
        label: 'Regresar',
        key: 'back',
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Inscribir Alumno',
        key: 'newAlumno',
        icon: <EditOutlined />,
    },
    {
        label: 'Alumno Existente',
        key: 'existAlumno',
        icon: <AppstoreAddOutlined />,
    },
    {
        label: 'Crear nuevo grupo',
        key: 'newGroup',
        icon: <FormOutlined />,
    },
    {
        label: 'Eliminar grupo',
        key: 'deleteGroup',
        icon: <DeleteOutlined />,
    },
    {
        label: 'Dar de baja alumno',
        key: 'bajaAlumno',
        icon: <UserDeleteOutlined />,
    },
    
    
];

export const itemsAdministrador = [
    {
        label: 'Regresar',
        key: 'back',
        
        icon: <ArrowLeftOutlined />,
    },
    {
        label: 'Registrar nuevo usuario',
        key: 'newUser',
        icon: <EditOutlined />,
    },
    {
        label: 'Editar usuario',
        key: 'editUser',
        children: [
            {
                label: 'Cambiar contraseña',
                key: 'changePassword',
            },
            {
                label: 'Cambiar usuario',
                key: 'changeUser',
            },
            {
                label: 'Cambiar permiso',
                key: 'changePermit',
            },
        ],
        icon: <FormOutlined />,
    },
    {
        label: 'Eliminar usuario',
        key: 'deleteUser',
        icon: <DeleteOutlined />,
    },
    {
        label: 'Crear Permisos',
        key: 'createPermiso',
        icon: <SafetyCertificateOutlined />,
    },
    {
        label: 'Lista de usuarios',
        key: 'userList',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Lista de permisos',
        key: 'permList',
        icon: <LockOutlined />,
    },
];