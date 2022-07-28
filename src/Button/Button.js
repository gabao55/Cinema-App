import "./style.css";

export default function Button({ type, children }) {
    function defineButtonAction(style) {
        switch (style) {
            case "large":
                return <button>{children}</button>
            default:
                return <button className="time">{children}</button>
        }
    }

    return (<>
        {defineButtonAction(type)}
    </>)
}