import "./style.css";
import movie from "./assets/image 3.png";

export default function Home() {
    return (
        <div>
            <h2>Selecione o filme</h2>
            <div className="movies">
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
                <img src={movie} alt="movie banner" />
            </div>
        </div>
    )
}