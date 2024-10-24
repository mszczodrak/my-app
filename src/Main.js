import { useState, useReducer } from "react";

import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import { Routes, Route } from "react-router-dom";

const updateTimes = (state, action) => {
    // Logic to update times based on selected date will go here
    // For now, return the same available times
    return initializeTimes();
};

const initializeTimes = () => {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
};

function Main() {

    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    return (
        <main>
            <h1>Main</h1>

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<HomePage />}></Route>
                <Route path="/booking"
                    element={<BookingPage
                        BookingForm={BookingForm}
                        availableTimes={availableTimes}
                        setBookingDate={setBookingDate}
                        setBookingTime={setBookingTime}
                        setGuests={setGuests}
                        setOccasion={setOccasion}
                        bookingDate={bookingDate}
                        bookingTime={bookingTime}
                        guests={guests}
                        occasion={occasion}
                        dispatch={dispatch}
                    />
                    }></Route>
            </Routes>
        </main>
    );
}

export default Main;