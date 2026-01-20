
export const DB_INITIAL = {
    usuarios: [
        {
            usu_id: 1,
            usu_nom: 'Administrador',
            usu_correo: 'admin@correo.com',
            usu_pass: '123456', // En la vida real esto estaría hasheado
            usu_tipo: 'ADMIN',
            token: 'fake-jwt-token-admin'
        },
        {
            usu_id: 2,
            usu_nom: 'Mesero 1',
            usu_correo: 'mesera@correo.com',
            usu_pass: '123456',
            usu_tipo: 'MESERO',
            token: 'fake-jwt-token-mesero'
        }
    ],
    categorias: [
        { categoria_id: 1, categoria_nom: 'Entradas' },
        { categoria_id: 2, categoria_nom: 'Platos de Fondo' },
        { categoria_id: 3, categoria_nom: 'Bebidas' },
        { categoria_id: 4, categoria_nom: 'Postres' }
    ],
    platos: [
        {
            plato_id: 1,
            plato_nom: 'Ceviche Mixto',
            plato_img: '/images/ceviche.png',
            plato_pre: 35.00,
            categoria_id: 1,
            plato_desc: 'Delicioso ceviche con mariscos frescos'
        },
        {
            plato_id: 2,
            plato_nom: 'Lomo Saltado',
            plato_img: '/images/lomo.svg',
            plato_pre: 42.00,
            categoria_id: 2,
            plato_desc: 'Clásico lomo saltado con papas fritas'
        },
        {
            plato_id: 3,
            plato_nom: 'Inka Cola',
            plato_img: '/images/inka.svg',
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'La bebida del perú'
        },
        {
            plato_id: 4,
            plato_nom: 'Tequeños de Queso',
            plato_img: '/images/tequenos.png',
            plato_pre: 15.00,
            categoria_id: 1,
            plato_desc: 'Rellenos de queso fresco con salsa de palta'
        },
        {
            plato_id: 5,
            plato_nom: 'Torta de Chocolate',
            plato_img: '/images/postre.svg',
            plato_pre: 12.00,
            categoria_id: 4,
            plato_desc: 'Torta húmeda de chocolate con fudge'
        }
    ],
    mesas: [
        { mesa_id: 1, mesa_nro: '1', mesa_est: 'libre', mesa_cap: 4 },
        { mesa_id: 2, mesa_nro: '2', mesa_est: 'libre', mesa_cap: 2 },
        { mesa_id: 3, mesa_nro: '3', mesa_est: 'ocupada', mesa_cap: 6 },
        { mesa_id: 4, mesa_nro: '4', mesa_est: 'libre', mesa_cap: 4 },
        { mesa_id: 5, mesa_nro: '5', mesa_est: 'libre', mesa_cap: 2 }
    ],
    pedidos: []
};

// Función helper para cargar la DB desde localStorage o iniciarla
export const loadDB = () => {
    const localDB = localStorage.getItem('mockDB_v6');
    if (localDB) {
        return JSON.parse(localDB);
    }
    localStorage.setItem('mockDB_v6', JSON.stringify(DB_INITIAL));
    return DB_INITIAL;
};

// Función helper para guardar cambios
export const saveDB = (newDB) => {
    localStorage.setItem('mockDB_v6', JSON.stringify(newDB));
};
