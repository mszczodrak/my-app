import { useState, useReducer } from "react";

import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";

export const updateTimes = (state, action) => {
    // Logic to update times based on selected date will go here
    // For now, return the same available times
    const proposedTimes = fetchAPI(action?.payload);
    return proposedTimes;
};

export const initializeTimes = () => {
    const todaysDate = new Date();
    const proposedTimes = fetchAPI(todaysDate);
    return proposedTimes;
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

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        submitAPI(formData);
        navigate("/confirmed");
    };

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
                        submitForm={submitForm}
                    />
                    }></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />} />

            </Routes>
        </main>
    );
}

export default Main;