import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main>
            <h1>Main</h1>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;