import { error } from '@sveltejs/kit';

export async function load({ params }) {
   let url = new URL(`http://localhost:8000/teams/${params.id}`)
   const response = await fetch(url);
   if (!response.ok) {
       error(response.status)
   }

   let equipo = await response.json();

   return {
       equipo
   };
}
