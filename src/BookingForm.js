import { useState } from "react";

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
  dispatch,
  submitForm,
}) {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      bookingDate,
      bookingTime,
      guests,
      occasion,
    };
    await submitForm(formData);
  };

  const handleInputChange = (e) => {
    // Get the latest values from the event target
    const updatedDate = e.target.form.elements['res-date'].value;
    const updatedTime = e.target.form.elements['res-time'].value;
    const updatedGuests = e.target.form.elements['guests'].value;
    const updatedOccasion = e.target.form.elements['occasion'].value;

    // Update the isFormValid state based on the latest values
    setIsFormValid(updatedDate && updatedTime && updatedGuests && updatedOccasion);
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
            dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
            handleInputChange(e); // Pass the event object
          }}
        />
        <label htmlFor="res-time">Choose time</label>

        <select
          id="res-time"
          value={bookingTime}
          onChange={(e) => {
            setBookingTime(e.target.value);
            handleInputChange(e); // Pass the event object
          }}
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
          onChange={(e) => {
            setGuests(e.target.value);
            handleInputChange(e); // Pass the event object
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            handleInputChange(e); // Pass the event object
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button
          type="submit"
          value="Make Your reservation"
          disabled={!isFormValid}
        >
          Make Your reservation
        </button>
      </form>
    </>
  );
}

export default BookingForm;
