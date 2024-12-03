export async function load() {
    let url = new URL('http://localhost:8000/teams/')
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
 
    let equipos = await response.json();
 
    return {
        equipos: equipos
    };
 }

 export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        const id = data.get('id');
        if (!id) {
            throw new Error('Datos inválidos.');
        }

        const payload = { id };

        const url = `http://localhost:8000/teams/${encodeURIComponent(id)}`;

        const response = await fetch(url, {
            method: 'DELETE', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el equipo. Response status: ${response.status}`);
        }

        return { success: true };
    },
};
