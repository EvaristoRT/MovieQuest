import "./ActorCarousel.css";
import ActorCard from "../ActorCard/ActorCard";
import { useEffect, useState, useRef } from "react";
import { getActors, IMAGE_BASE_URL } from "../../services/tmdb";
function ActorCarousel({ id }){
    const [actors, setActors] = useState([]);
    const carouselRef = useRef(null);
    useEffect(() => {
            async function loadActors() {
                const data = await getActors(id);
                setActors(data);
            }
            if (carouselRef.current) {
                carouselRef.current.scrollTo({
                    left: 0,
                    behavior: "instant" // o simplemente asigna scrollLeft
                });
            }
            loadActors();
        }, [id]);
    return(
        <>
        <p className="actor-carousel__title">Cast</p>
        <div ref={carouselRef} className="actor-carousel__carousel">
            {
                actors.map((actor) => {
                    return (<ActorCard 
                        key={actor.id}
                        image={IMAGE_BASE_URL + actor.profile_path} 
                        name={actor.name} 
                        character={actor.character} 
                        />);
                })
            }
        </div>
        </>
    );
}

export default ActorCarousel;