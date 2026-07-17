import "./ActorCard.css"
function ActorCard( { image, name, character}){
    return(
        <div className="actor-card" >
            <div className="actor-card__photo" style={{
            backgroundImage:`url(${image})`
        }}/>
            <p className="actor-card__name">{name}</p>
            <p className="actor-card__character">{character}</p>
        </div>
    );
};

export default ActorCard;