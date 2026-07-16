import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { AnimatePresence } from "motion/react";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Works from "../pages/Works";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />
               <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/works"
                    element={<Works />}
                />
            </Routes>
        </AnimatePresence>
    );
}
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}