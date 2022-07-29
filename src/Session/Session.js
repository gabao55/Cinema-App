import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

const selectedSeatStyle = {backgroundColor: "#8DD7CF", border: "1px solid #1AAE9E"};
const availableSeatStyle = {backgroundColor: "#C3CFD9", border: "1px solid #7B8B99"};
const unavailableSeatStyle = {backgroundColor: "#FBE192", border: "1px solid #F7C52B"};

export default function Session({
    setMovieData,
    setCustomerData,
    selectedSeatsList, 
    setSelectedSeatsList 
}) {
    const {sessionId} = useParams();
    const [data, setData] = useState([]);
    const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerCPF, setCustomerCPF] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);

        promise.then(response => setData(response.data));
    }, []);

    function renderSeat(seats) {
        const seatsJSX = seats.map(seat => {
            if (seat.isAvailable === false) {
                return <div style={unavailableSeatStyle} onClick={() => alert("Esse assento não está disponível")}>{seat.name}</div>
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
            const newIds = removeItem(seat.id, selectedSeatsIds);
            setSelectedSeatsIds([...newIds]);
            return
        }

        const newList = [...selectedSeatsList];
        newList.push(seat.name);
        setSelectedSeatsList([...newList]);
        const newIds = [...selectedSeatsIds];
        newIds.push(seat.id);
        setSelectedSeatsIds([...newIds]);
    };

    function removeItem(value, array) {
        const index = array.indexOf(value);
        array.splice(index, 1);
        return [...array]
    }

    function handleForm(e) {
        e.preventDefault();
    }

    function renderButton() {
        if (!customerName || !customerCPF || selectedSeatsList.length === 0) {
             return (
                <div onClick={() => alert("Escolha assentos e insira seus dados para prosseguir.")}>
                    <Button type="large">Reservar assento(s)</Button>
                </div>
             )                   
        } else {
            return (
                <Link to="/sucesso" style={{ textDecoration: 'none' }} onClick={() => {
                        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
                        {
                            ids: selectedSeatsIds,
                            name: customerName,
                            cpf: customerCPF
                        });
                        
                        setMovieData({...data});
                        const newCustomerData = {
                            name: customerName,
                            CPF: customerCPF
                        };
                        setCustomerData({...newCustomerData});
                }}>
                     <Button type="large">Reservar assento(s)</Button>
                </Link>
            )
        }
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
            <form onSubmit={handleForm}>
                <label for="name">Nome do comprador:</label>
                <input id="name" type="text" placeholder="Digite seu nome..." onChange={e => setCustomerName(e.target.value)} value={customerName} required></input>
                <label for="CPF">CPF do comprador:</label>
                <input id="CPF" type="text" placeholder="Digite seu CPF..." onChange={e => setCustomerCPF(e.target.value)} value={customerCPF} required></input>
                <div>
                    {renderButton()}
                </div>
            </form>
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