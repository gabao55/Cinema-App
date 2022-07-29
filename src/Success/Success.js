import "./style.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Success({ movieData, selectedSeatsList, setSelectedSeatsList, customerData }) {
    function renderConfirmation() {
        return (
            <>
                <h2 className="success-message">Pedido feito<br /> com sucesso</h2>
                <div className="purchase-info">
                    <b>Filme e sessão</b>
                    <p>{movieData.movie.title}</p>
                    <p>{movieData.day.date} {movieData.name}</p>
                </div>
                <div className="purchase-info">
                    <b>Ingressos</b>
                    {selectedSeatsList.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                </div>
                <div className="purchase-info">
                    <b>Comprador</b>
                    <p>Nome: {customerData.name}</p>
                    <p>CPF: {customerData.CPF}</p>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setSelectedSeatsList([])}>
                    <Button type="large">Voltar para Home</Button>
                </Link>
            </>
        )
    }

    function renderError() {
        return (
            <>
                <h2>Erro ao carregar confirmação</h2>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setSelectedSeatsList([])}>
                    <Button type="large">Voltar para Home</Button>
                </Link>
            </>
        )
    }
    
    return (
        <div className="content-container">
            {movieData.length !== 0 ?
                renderConfirmation() :
                renderError()
            }
        </div>
    )
}