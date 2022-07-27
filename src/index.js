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
    const [selectedSeatsList, setSelectedSeatsList] = useState([]);

    return (
        <>
            <h1>CINEFLEX</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={"/filme/:movieId"} element={<Movie />} />
                    <Route path={"/sessao/:sessionId"} element={<Session selectedSeatsList={selectedSeatsList} setSelectedSeatsList={setSelectedSeatsList} />} />
                    <Route path="/sucesso" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));