import { Link } from "react-router-dom";

const NotFound = () => (
    <div
        style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
        }}
    >
        <h1 style={{ fontSize: "3rem" }}>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>

        <Link
            to="/"
            style={{
                padding: "10px 20px",
                borderRadius: "6px",
                background: "#007bff",
                color: "#fff",
                textDecoration: "none",
            }}
        >
            Take me Home
        </Link>
    </div>
);

export default NotFound;
