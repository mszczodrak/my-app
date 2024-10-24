import { useState } from "react";

import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import { Routes, Route } from "react-router-dom";

import availableTimes from "./availableTimes";

function Main() {

    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

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
                    />
                    }></Route>
            </Routes>
        </main>
    );
}

export default Main;