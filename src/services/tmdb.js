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

export async function getMovieDetails(id){
    try{
        const response = await fetch(
            `${BASE_URL}/movie/${id}?language=es-MX`,
            options
        );

        if (!response.ok) {
            throw new Error("Error al obtener los detalles de la película.");
        }

        const data = await response.json();
        return data;
    }catch (error){
        console.log(error);
        return[];
    }
}

export async function getActors(id){
    try{
        const response = await fetch(
            `${BASE_URL}/movie/${id}/credits?language=es-MX`,
            options
        );
        if (!response.ok) {
            throw new Error("Error al obtener los actores.");
        }

        const data = await response.json();
        return data.cast;
    }catch (error){
        console.log(error);
        return[];
    }
}

export async function getSearch(query, page){
    try{
        const response = await fetch(
            `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=es-MX&page=${page}`,
            options
        )

        const data = await response.json();
        return data;
    }catch (error){
        console.log(error)
        return[];
    }
};

export async function getRandomMovie(){
    const endpoints = [
        "/movie/now_playing",
        "/movie/popular",
        "/movie/top_rated"
    ]
    const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

    try {
        const response = await fetch(
            `${BASE_URL}${endpoint}?language=es-MX&region=MX`,
            options
        );

        if (!response.ok) {
            throw new Error("Error al obtener las películas para la sección aleatoria.");
        }

        const data = await response.json();
        const maxPages = Math.min(data.total_pages, 100);
        const randomPage = Math.floor(Math.random() * maxPages) + 1;
        const responsePage = await fetch(
            `${BASE_URL}${endpoint}?language=es-MX&page=${randomPage}&region=MX`,
            options
        );

        if (!responsePage.ok) {
            throw new Error("Error al obtener las películas para la sección aleatoria.");
        }

        const finalPageData = await responsePage.json();

        if (finalPageData.results.length === 0) {
            throw new Error("No se encontraron películas.");
        }
        
        const movie = finalPageData.results[Math.floor(Math.random() * finalPageData.results.length)]

        return movie.id;

    } catch (error) {
        console.error(error);
        return;
    }
}