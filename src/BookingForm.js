function BookingForm({availableTimes,
    setBookingDate, setBookingTime, setGuests, setOccasion,
    bookingDate, bookingTime, guests, occasion }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingDate, bookingTime, guests, occasion);
    }

    return (
        <>
            <h1>Booking</h1>

            <form
                onSubmit={handleSubmit}
                style={{ display: 'grid', 'max-width': '200px', gap: '20px' }}
            >
                <label for="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                />
                <label for="res-time">Choose time</label>

                <select
                    id="res-time "
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                >
                    {
                        availableTimes?.map((time) => (
                            <option key={time}>{time}</option>
                        ))
                    }

                </select>

                <label for="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label for="occasion">Occasion</label>
                <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;
