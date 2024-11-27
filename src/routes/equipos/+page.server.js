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
 