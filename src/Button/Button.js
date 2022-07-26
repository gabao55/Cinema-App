import "./style.css";

export default function Button({ type }) {
    function defineButtonAction(action) {
        switch (action) {
            case "home":
                return <button>Voltar para Home</button>
            case "reservar assentos":
                return <button>Reservar assento(s)</button>
            default:
                return <button className="time">15:00</button>
        }
    }


    return (<>
        {defineButtonAction(type)}
    </>)
}