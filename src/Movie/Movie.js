import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Movie() {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);

        promise.then((response) => setMovieData(response.data));
    }, []);

    return (
        <div className="content-container">
            <h2>Selecione o horário</h2>
            {movieData.length === 0 ? 
            null : 
            movieData.days.map(day => {
                return (
                    <div className="day">
                        <p key={day.id}>{day.weekday} - {day.date}</p>
                        <div className="times">
                            {day.showtimes.map((time) => {
                                return (
                                    <>  
                                        <Link key={time.id} to={`/sessao/${time.id}`} style={{ textDecoration: 'none' }}>
                                            <Button>{time.name}</Button>
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <Footer img={movieData.posterURL}>
                <p>{movieData.title}</p>
            </Footer>
        </div>
    )
}