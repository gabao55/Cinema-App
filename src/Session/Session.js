import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

const selectedSeatStyle = {backgroundColor: "#8DD7CF", border: "1px solid #1AAE9E"};
const availableSeatStyle = {backgroundColor: "#C3CFD9", border: "1px solid #7B8B99"};
const unavailableSeatStyle = {backgroundColor: "#FBE192", border: "1px solid #F7C52B"};

export default function Session({ selectedSeatsList, setSelectedSeatsList }) {
    const {sessionId} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then(response => setData(response.data));
    }, []);

    function renderSeat(seats) {
        const seatsJSX = seats.map(seat => {
            if (seat.isAvailable === false) {
                return <div style={unavailableSeatStyle} onClick={() => alert("Assento indisponível.")}>{seat.name}</div>
            } else if (selectedSeatsList.includes(seat.name)) {
                return <div style={selectedSeatStyle} onClick={() => selectSeat(seat)}>{seat.name}</div>
            } else {
                return <div style={availableSeatStyle} onClick={() => selectSeat(seat)}>{seat.name}</div>
            }
        });

        return seatsJSX
    };

    function selectSeat(seat) {
        if (selectedSeatsList.includes(seat.name)) {
            const newList = removeItem(seat.name, selectedSeatsList);
            setSelectedSeatsList([...newList]);
            return
        }

        const newList = [...selectedSeatsList];
        newList.push(seat.name);
        setSelectedSeatsList([...newList]);
    };

    function removeItem(value, array) {
        const index = array.indexOf(value);
        array.splice(index, 1);
        return [...array]
    }

    return (
        <div className="content-container">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
            {
                data.length === 0 ?
                null :
                renderSeat(data.seats)
            }    
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
            <Link to="/sucesso" style={{ textDecoration: 'none' }}>
                <Button type="large">Reservar assento(s)</Button>
            </Link>
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