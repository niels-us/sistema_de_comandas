
import { http, HttpResponse } from 'msw';
import { loadDB, saveDB } from './db';

const API_URL = 'https://api.demo-comandas.com'; // URL ficticia que interceptaremos

// Helper para simular un token JWT decodificable por el frontend
const createMockToken = (usuario) => {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(JSON.stringify({
        usu_id: usuario.usu_id,
        usu_nom: usuario.usu_nom,
        usu_tipo: usuario.usu_tipo,
        iat: Date.now() / 1000,
        exp: (Date.now() / 1000) + 3600
    }));
    const signature = "fake-signature";
    return `${header}.${payload}.${signature}`;
};

export const handlers = [
    // --- AUTH ---
    http.post(`${API_URL}/login`, async ({ request }) => {
        const { correo, password } = await request.json();
        const db = loadDB();
        const usuario = db.usuarios.find(u => u.usu_correo === correo && u.usu_pass === password);

        if (usuario) {
            const token = createMockToken(usuario);
            return HttpResponse.json({
                message: 'Login exitoso',
                token: token
            }, { status: 200 });
        }

        return HttpResponse.json({
            message: 'Credenciales incorrectas'
        }, { status: 401 });
    }),

    http.post(`${API_URL}/verificar`, async ({ request }) => {
        // Simulamos que siempre es válido si envía un token (en un mock real verificaríamos)
        const authHeader = request.headers.get('authorization');
        if (authHeader) {
            return HttpResponse.json({ ok: true });
        }
        return HttpResponse.json({ ok: false }, { status: 401 });
    }),

    // --- CATEGORIAS ---
    http.get(`${API_URL}/categoria`, () => {
        const db = loadDB();
        // El frontend espera response.data.content
        return HttpResponse.json({
            content: db.categorias
        });
    }),

    // --- PLATOS ---
    http.get(`${API_URL}/plato`, () => {
        const db = loadDB();
        return HttpResponse.json({
            content: db.platos
        });
    }),

    http.get(`${API_URL}/categoria/:id/platos`, ({ params }) => {
        const db = loadDB();
        const platosFiltrados = db.platos.filter(p => p.categoria_id === parseInt(params.id));
        return HttpResponse.json({
            content: {
                Platos: platosFiltrados
            }
        });
    }),

    // --- MESAS ---
    http.get(`${API_URL}/mesa`, () => {
        const db = loadDB();
        return HttpResponse.json({
            content: db.mesas
        });
    }),

    // --- PEDIDOS (Lógica simplificada para demo) ---
    http.get(`${API_URL}/pedido`, () => {
        const db = loadDB();
        return HttpResponse.json({
            pedidos: db.pedidos
        });
    }),

    http.post(`${API_URL}/pedido`, async ({ request }) => {
        const newPedido = await request.json();
        const db = loadDB();
        // Simulamos guardar pedido
        db.pedidos.push({ ...newPedido, pedido_id: Date.now() });
        saveDB(db);
        return HttpResponse.json({ message: 'Pedido creado' }, { status: 201 });
    }),

    // Fallback para imágenes para que no fallen si son de imgur
    http.get('https://i.imgur.com/*', ({ request }) => {
        return fetch(request); // Passthrough
    })
];
