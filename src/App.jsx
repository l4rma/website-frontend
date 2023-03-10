import Navbar from "./Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Articles from "./pages/articles";
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Articles" element={<Articles />} />
                </Routes>
            </div>
        </>
    )
}

export default App