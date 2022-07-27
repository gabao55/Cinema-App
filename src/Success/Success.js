import "./style.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <div className="content-container">
            <h2 className="success-message">Pedido feito<br /> com sucesso</h2>
            <div className="purchase-info">
                <b>Filme e sessão</b>
                <p>Enola Holmes</p>
                <p>24/06/2022 15:00</p>
            </div>
            <div className="purchase-info">
                <b>Ingressos</b>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div className="purchase-info">
                <b>Comprador</b>
                <p>Nome: Gabriel Rosin</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button type="large">Voltar para Home</Button>
            </Link>
        </div>
    )
}