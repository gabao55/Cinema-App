import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Common/reset.css";
import "./Common/style.css";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Success from "./Success/Success";
import { useState } from "react";

function App() {
    const [selectedMovieId, setSelectedMovieId] = useState("");
    const [moviesIdList, setMoviesIdList] = useState([]);

    return (
        <>
            <h1>CINEFLEX</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home moviesIdList={moviesIdList} setMoviesIdList={setMoviesIdList} />} />
                    {moviesIdList.map((id) => {
                        return <Route key={id} path={`/filme/${id}`} element={<Movie selectedMovieId={selectedMovieId} setSelectedMovieId={setSelectedMovieId} />} />
                    })}
                    <Route path="/sessao" element={<Session />} />
                    <Route path="/sucesso" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));