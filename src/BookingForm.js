import { submitAPI } from "./api";

function BookingForm({
  availableTimes,
  setBookingDate,
  setBookingTime,
  setGuests,
  setOccasion,
  bookingDate,
  bookingTime,
  guests,
  occasion,
  dispatch, // Receive dispatch from BookingPage
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingDate, bookingTime, guests, occasion);
    submitAPI({
      date: bookingDate,
      time: bookingTime,
      guests: guests,
      occasion: occasion,
    });
  };

  return (
    <>
      <h1>Book Now</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={bookingDate}
          onChange={(e) => {
            setBookingDate(e.target.value);
            dispatch({ type: "UPDATE_TIMES", payload: e.target.value }); // Dispatch action on date change
          }}
        />
        <label htmlFor="res-time">Choose time</label>

        <select
          id="res-time "
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        >
          {availableTimes?.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" value="Make Your reservation">
          Make Your reservation
        </button>
      </form>
    </>
  );
}

export default BookingForm;
