import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then((response) => setMoviesList(response.data));
    }, []);

    return (
        <div>
            <h2>Selecione o filme</h2>
            <div className="movies">
                {moviesList.map((movie) => {
                    return (<Link key={movie.id} to={`/filme/${movie.id}`}>
                        <img key={movie.id} src={movie.posterURL} alt={movie.title} />
                    </Link>)
                })}
            </div>
        </div>
    )
}