import Home from "./pages/Home";

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Meal from "./pages/Meal";
// import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/meal/:id" element={<Meal />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
