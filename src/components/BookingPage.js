import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function BookingPage({ setResDetails }) {
  return (
    <div className="booking-page">
      <BookingHero />
      <BookingForm setResDetails={setResDetails} />
    </div>
  );
}

function BookingHero() {
  return (
    <div className="booking-hero">
      <h2>Reserve a Table</h2>
      <p>Book a table at the Little Lemon restaurant</p>
    </div>
  );
}

function BookingForm({ resDetails, setResDetails }) {
  const occassions = ["Occassion", "Birthday", "Anniversary"];
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resGuests, setGuests] = useState("");
  const [resOccassion, setOccassion] = useState("");
  const [availableTime, setAvailableTime] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setAvailableTime([
      "Time",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  }, []);

  useEffect(() => {
    setResDetails({
      date: resDate,
      time: resTime,
      guests: resGuests,
      occassion: resOccassion,
    });
  }, [resDate, resTime, resGuests, resOccassion]);

  const resSchema = yup.object().shape({
    date: yup.date().required("Please choose a date"),
    time: yup.string().required("Please choose a time"),
    guests: yup
      .number()
      .required("Please enter the number of guests")
      .min(1)
      .max(10),
    occassion: yup.string().required("Please choose an occassion"),
  });

  function getDate(e) {
    setResDate(e.target.value);
  }

  function getTime(e) {
    setResTime(e.target.value);
  }

  function getGuests(e) {
    setGuests(e.target.value);
  }

  function getOccassion(e) {
    setOccassion(e.target.value);
  }

  async function submitForm(e) {
    e.preventDefault();
    const formData = {
      date: resDate,
      time: resTime,
      guests: resGuests,
      occassion: resOccassion,
    };
    console.log(formData);
    try {
      await resSchema.validate(formData);
      navigate("/confirmed");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  return (
    <div className="booking-form">
      <form onSubmit={submitForm}>
        <label htmlFor="res-date" className="date-input">
          <p>Date</p>
          <input type="date" id="res-date" value={resDate} onChange={getDate} />
        </label>

        <label htmlFor="res-time">
          <p>Choose Time</p>
          <select id="res-time" value={resTime} onChange={getTime}>
            {availableTime.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="res-guests" className="date-input">
          <p>Number of guests</p>
          <input
            type="number"
            id="res-guests"
            placeholder="1"
            min="1"
            max="10"
            value={resGuests}
            onChange={getGuests}
          />
        </label>

        <label htmlFor="res-occassion">
          <p>Occassion</p>
          <select
            id="res-occassion"
            value={resOccassion}
            onChange={getOccassion}
          >
            {occassions.map((occassion) => (
              <option value={occassion} key={occassion}>
                {occassion}
              </option>
            ))}
          </select>
        </label>
        <span className="error">{error}</span>
        <button type="submit">Make your Reservation</button>
      </form>
    </div>
  );
}
