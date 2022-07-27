import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

export default function Session({ sessionId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then(response => {
            setData(response.data);
        });
    }, []);

    console.log(data);

    const selectedSeatStyle = {backgroundColor: "#8DD7CF", border: "1px solid #1AAE9E"};
    const availableSeatStyle = {backgroundColor: "#C3CFD9", border: "1px solid #7B8B99"};
    const unavailableSeatStyle = {backgroundColor: "#FBE192", border: "1px solid #F7C52B"};

    return (
        <div className="content-container">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
                <div>01</div>
            </div>
            <div className="seats-options">
                <div>
                    <div className="option" style={selectedSeatStyle}></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="option" style={availableSeatStyle}></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="option" style={unavailableSeatStyle}></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="form">
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..."></input>
                <label>CPF do comprador:</label>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>
            <Button type="large">Reservar assento(s)</Button>
            {
                data.length === 0 ?
                null :
                <Footer img={data.movie.posterURL}>
                    <p>{data.movie.title}</p>
                    <p>{data.day.weekday} - {data.name}</p>
                </Footer>
            }
        </div>
    )
}