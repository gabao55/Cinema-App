export default function Session({ sessionId }) {
    console.log(sessionId);
    return (
        <div className="content-container">
            <h2>Session {sessionId}</h2>
        </div>
    )
}