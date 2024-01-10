import { Link } from "react-router-dom";

export default function BookingConfirmed({ resDetails }) {
  const { date, time, guests, occassion } = resDetails;
  return (
    <div className="booking-confirmation">
      <h2>Reservation Successful</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of guests: {guests}</p>
      <p>Occassion: {occassion}</p>
      <button>
        <Link to="/">Browse Menu</Link>
      </button>
    </div>
  );
}
