import Home from "./pages/Home";

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Meal from "./pages/Meal";
import NotFound from "./pages/NotFound";
import { isAdmin } from "./utils/auth";
import Admin from "./pages/Admin";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/meal/:id" element={<Meal />} />
                <Route path="*" element={<NotFound />} />
                <Route
                    path="/admin"
                    element={isAdmin ? <Admin /> : <Navigate to="/" />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
