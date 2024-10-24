import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('Test initializeTimes function', () => {
  const initializeTimesValues = initializeTimes();
  expect(initializeTimesValues).toEqual([
    "17:00",
    "18:30",
    "20:00",
    "21:30",
  ]);
});

test('Test updateTimes function', () => {
  const updateTimesValues = updateTimes();
  expect(updateTimesValues).toEqual([
    "17:00",
    "18:30",
    "20:00",
    "21:30",
  ]);
});
