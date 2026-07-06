export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
};

export async function getMovies(endpoint) {
    try {
        const response = await fetch(
            `${BASE_URL}${endpoint}?language=es-MX&page=1&region=MX`,
            options
        );

        if (!response.ok) {
            throw new Error("Error al obtener las películas.");
        }

        const data = await response.json();

        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getGenres() {
    try {
        const response = await fetch(
            `${BASE_URL}/genre/movie/list?language=es-MX`,
            options
        );

        if (!response.ok) {
            throw new Error("Error al obtener los géneros.");
        }

        const data = await response.json();

        return data.genres;
    } catch (error) {
        console.error(error);
        return [];
    }
}