import "./style.css"

export default function Footer({ img, children }) {
    return (
        <footer>
            <img src={img} alt="Movie banner" />
            <div>
                {children}
            </div>
        </footer>
    )
}