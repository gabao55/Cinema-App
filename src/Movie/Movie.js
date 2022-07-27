import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movie({ movieId, setSessionId, setSessionsIdList }) {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);

        promise.then((response) => {
            setMovieData(response.data);
            const allSessions = response.data.days.map(day => day.showtimes);
            let allSessionsArray = [];
            allSessions.map(sessions => sessions.map(session => {
                allSessionsArray.push(session.id);
                return session.id
            }));
            setSessionsIdList([...allSessionsArray]);
        });
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
                                        <Link to={`/sessao/${time.id}`} style={{ textDecoration: 'none' }}>
                                            <Button onClick={setSessionId(time.id)}>{time.name}</Button>
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