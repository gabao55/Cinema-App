import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "./style.css";
import movie from "../assets/image 3.png";

export default function Movie() {
    return (
        <div className="content-container">
            <h2>Selecione o horário</h2>
            <div className="day">
                <p>Quinta-feira - 24/06/2022</p>
                <div className="times">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
            <div className="day">
                <p>Quinta-feira - 24/06/2022</p>
                <div className="times">
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
            <Footer img={movie} />
        </div>
    )
}