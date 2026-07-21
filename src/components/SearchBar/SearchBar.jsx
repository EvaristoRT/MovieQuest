import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar( {inputRef, initialValue}){
    const navigate = useNavigate();
    const [text, setText] = useState(initialValue ?? "");

    function handleSubmit(e){
        e.preventDefault();

        if(!text.trim()) return;

        navigate(`/search?query=${encodeURIComponent(text)}`);
    }

    useEffect(() => {
        setText(initialValue ?? "");
    }, [initialValue]);

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <FaSearch className="search-bar__icon" />
            <input ref={inputRef} type="search" placeholder="Busca películas..." value={text} onChange={(e)=>setText(e.target.value)}/>
        </form>
    );
}

export default SearchBar;