import "./style.css";

export default function Button({ type, children }) {
    function defineButtonAction(action) {
        switch (action) {
            case "home":
                return <button>{children}</button>
            case "reservar assentos":
                return <button>children</button>
            default:
                return <button className="time">{children}</button>
        }
    }


    return (<>
        {defineButtonAction(type)}
    </>)
}