
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
            plato_img: `${process.env.PUBLIC_URL}/images/ceviche.png`,
            plato_pre: 10.00,
            categoria_id: 1,
            plato_desc: 'Delicioso ceviche con mariscos frescos'
        },
        {
            plato_id: 2,
            plato_nom: 'Lomo Saltado',
            plato_img: `${process.env.PUBLIC_URL}/images/lomo_saltado.png`,
            plato_pre: 42.00,
            categoria_id: 2,
            plato_desc: 'Clásico lomo saltado con papas fritas'
        },
        {
            plato_id: 3,
            plato_nom: 'Inka Cola',
            plato_img: `${process.env.PUBLIC_URL}/images/inka_cola.png`,
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'La bebida del perú'
        },
        {
            plato_id: 4,
            plato_nom: 'Tequeños de Queso',
            plato_img: `${process.env.PUBLIC_URL}/images/tequenos.png`,
            plato_pre: 15.00,
            categoria_id: 1,
            plato_desc: 'Rellenos de queso fresco con salsa de palta'
        },
        {
            plato_id: 5,
            plato_nom: 'Torta de Chocolate',
            plato_img: `${process.env.PUBLIC_URL}/images/torta_de_chocolate.png`,
            plato_pre: 12.00,
            categoria_id: 4,
            plato_desc: 'Torta húmeda de chocolate con fudge'
        },
        {
            plato_id: 6,
            plato_nom: 'Caldo de mote',
            plato_img: `${process.env.PUBLIC_URL}/images/Caldo_de_mote.png`,
            plato_pre: 10.00,
            categoria_id: 1,
            plato_desc: 'Caldito de mote con carne de res'
        },
        {
            plato_id: 7,
            plato_nom: 'Papa a la Huancaína',
            plato_img: `${process.env.PUBLIC_URL}/images/papa_a_la_huancaina.png`,
            plato_pre: 8.00,
            categoria_id: 1,
            plato_desc: 'Papas bañadas en salsa huancaína'
        },
        {
            plato_id: 8,
            plato_nom: 'Cocktail de Langostinos',
            plato_img: `${process.env.PUBLIC_URL}/images/cocktail_langostinos.png`,
            plato_pre: 10.00,
            categoria_id: 1,
            plato_desc: 'Langostinos frescos con salsa de palta'
        },
        {
            plato_id: 9,
            plato_nom: 'Causa Limeña',
            plato_img: `${process.env.PUBLIC_URL}/images/causa_limeña.png`,
            plato_pre: 8.00,
            categoria_id: 1,
            plato_desc: 'Causa limeña con pollo'
        },
        {
            plato_id: 10,
            plato_nom: 'Aji de Gallina',
            plato_img: `${process.env.PUBLIC_URL}/images/aji_de_gallina.png`,
            plato_pre: 32.00,
            categoria_id: 2,
            plato_desc: 'Ají de gallina con arroz y papa'
        },
        {
            plato_id: 11,
            plato_nom: 'Arroz con mariscos',
            plato_img: `${process.env.PUBLIC_URL}/images/arroz_con_mariscos.png`,
            plato_pre: 30.00,
            categoria_id: 2,
            plato_desc: 'Arroz con mariscos'
        },
        {
            plato_id: 12,
            plato_nom: 'Pasta al Alfredo',
            plato_img: `${process.env.PUBLIC_URL}/images/pasta_alfredo.png`,
            plato_pre: 32.00,
            categoria_id: 2,
            plato_desc: 'Pasta alfredo con pollo'
        },
        {
            plato_id: 13,
            plato_nom: 'Pollo a la plancha',
            plato_img: `${process.env.PUBLIC_URL}/images/pollo_a_la_plancha.png`,
            plato_pre: 28.00,
            categoria_id: 2,
            plato_desc: 'Pollo a la plancha con arroz y ensalada'
        },
        {
            plato_id: 14,
            plato_nom: 'Filete de Pescado',
            plato_img: `${process.env.PUBLIC_URL}/images/filete_de_pescado.png`,
            plato_pre: 25.00,
            categoria_id: 2,
            plato_desc: 'Filete de pescado con arroz y ensalada'
        },
        {
            plato_id: 15,
            plato_nom: 'Coca Cola',
            plato_img: `${process.env.PUBLIC_URL}/images/coca_cola.png`,
            plato_pre: 5.00,
            categoria_id: 3,
            plato_desc: 'La bebida del perú'
        },
        {
            plato_id: 16,
            plato_nom: 'Chicha Morada',
            plato_img: `${process.env.PUBLIC_URL}/images/chicha_morada.png`,
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'Chicha morada'
        },
        {
            plato_id: 17,
            plato_nom: 'Jugo de Maracuya',
            plato_img: `${process.env.PUBLIC_URL}/images/jugo_de_maracuya.png`,
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'Jugo de maracuya'
        },
        {
            plato_id: 18,
            plato_nom: 'Limonada',
            plato_img: `${process.env.PUBLIC_URL}/images/limonada.png`,
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'Limonada'
        },
        {
            plato_id: 19,
            plato_nom: 'Refresco de Hierbaluisa',
            plato_img: `${process.env.PUBLIC_URL}/images/refresco_de_hierbaluisa.png`,
            plato_pre: 8.00,
            categoria_id: 3,
            plato_desc: 'Refresco de hierbaluisa'
        },
        {
            plato_id: 20,
            plato_nom: 'Suspiro a la limeña',
            plato_img: `${process.env.PUBLIC_URL}/images/suspiro_a_la_limeña.png`,
            plato_pre: 12.00,
            categoria_id: 4,
            plato_desc: 'Suspiro a la limeña'
        },
        {
            plato_id: 21,
            plato_nom: 'Flan',
            plato_img: `${process.env.PUBLIC_URL}/images/flan.png`,
            plato_pre: 12.00,
            categoria_id: 4,
            plato_desc: 'Flan'
        },
        {
            plato_id: 22,
            plato_nom: 'Cheesecake de fresa',
            plato_img: `${process.env.PUBLIC_URL}/images/cheesecake_de_fresa.png`,
            plato_pre: 15.00,
            categoria_id: 4,
            plato_desc: 'Cheesecake de fresa'
        },
        {
            plato_id: 23,
            plato_nom: 'Helado artesanal',
            plato_img: `${process.env.PUBLIC_URL}/images/helado_artesanal.png`,
            plato_pre: 10.00,
            categoria_id: 4,
            plato_desc: 'Helado artesanal'
        },
        {
            plato_id: 24,
            plato_nom: 'Arroz con Leche',
            plato_img: `${process.env.PUBLIC_URL}/images/arroz_con_leche.png`,
            plato_pre: 10.00,
            categoria_id: 4,
            plato_desc: 'Arroz con leche'
        },

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
    const localDB = localStorage.getItem('mockDB_v7');
    if (localDB) {
        return JSON.parse(localDB);
    }
    localStorage.setItem('mockDB_v7', JSON.stringify(DB_INITIAL));
    return DB_INITIAL;
};

// Función helper para guardar cambios
export const saveDB = (newDB) => {
    localStorage.setItem('mockDB_v7', JSON.stringify(newDB));
};
