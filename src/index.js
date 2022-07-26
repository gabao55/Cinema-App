import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Common/reset.css";
import "./Common/style.css";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Success from "./Success/Success";

function App() {
    return (
        <>
            <h1>CINEFLEX</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme" element={<Movie />} />
                    <Route path="/sessao" element={<Session />} />
                    <Route path="/sucesso" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));