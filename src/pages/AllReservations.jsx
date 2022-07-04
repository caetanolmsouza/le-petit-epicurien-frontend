import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "rc-input";
import UpdateReservation from "../components/UpdateReservation";

const API_URL = "http://localhost:5005";

const AllReservations = () => {
  const [reservations, setReservations] = useState([]);
  const getAllReservations = () => {
    axios
      .get(`${API_URL}/api/reservation/`)
      .then((response) => setReservations(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  console.log(getAllReservations);

  const deleteReservation = async (id) => {
    await axios.delete(`${API_URL}/api/reservation/${id}`);
    getAllReservations();

    // axios.delete
    // call the function getAllReservations
    // dont need the following
    // const reservationToKeep = reservations.filter(
    // (reservation) => reservation._id !== id
    //);
    //setReservations(reservationToKeep);
  };

  const editReservation = (id, name, date) => {
    console.log("edit rese...", name, " ", id, "", date);
  };

  return (
    <>
      <h1> My Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            Restaurant-
            {reservation.restaurant.name} booked for -
            {reservation.numberOfGuests} people
            <button onClick={() => deleteReservation(reservation._id)}>
              Delete Reservation
            </button>
            <button
              onClick={() =>
                editReservation(reservation._id, reservation.date, text)
              }
            >
              Update Reservation
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllReservations;
