function BookingPage({ BookingForm, availableTimes, setBookingDate, setBookingTime, setGuests, setOccasion, bookingDate, bookingTime, guests, occasion, dispatch, submitForm }) {


    return (
        <>
            <h1>BookingPage</h1>
            <BookingForm
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
        </>
    );
}

export default BookingPage;
