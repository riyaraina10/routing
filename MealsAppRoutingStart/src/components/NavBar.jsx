import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                position: "sticky",
                top: 0,

                backgroundColor: "white",
            }}
        >
            {" "}
            <nav
                style={{
                    padding: "1rem",
                    backgroundColor: "white",
                    padding: "12px 10px 12px 10px",
                    marginTop: "10px",

                    borderRadius: "40px",
                    position: "sticky",
                }}
            >
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "1rem",
                        margin: 0,
                    }}
                >
                    <li>
                        <NavLink
                            to="/"
                            end
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                textDecoration: "none",
                            })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                textDecoration: "none",
                            })}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                textDecoration: "none",
                            })}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                textDecoration: "none",
                            })}
                        >
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
