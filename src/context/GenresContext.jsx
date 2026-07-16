import { createContext, useEffect, useState } from "react";
import { getGenres } from "../services/tmdb";

export const GenresContext = createContext();

export function GenresProvider({ children }) {
    const [genresMap, setGenresMap] = useState({});

    useEffect(() => {
        async function loadGenres() {
            const genres = await getGenres();

            const map = Object.fromEntries(
                genres.map(genre => [genre.id, genre.name])
            );

            setGenresMap(map);
        }

        loadGenres();
    }, []);

    return (
        <GenresContext.Provider value={{ genresMap }}>
            {children}
        </GenresContext.Provider>
    );
}