import React, { useState } from "react";
import NavBar from "../Header/NavBar";
import "./Reservation.css";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Modal from "../Modal/Modal";
const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};
function Reservation() {
  const [newReservation, setNewReservation] = useState({
    contact_name: "",
    contact_email: "",
    contact_phonenumber: "",
    number_of_guests: "",
    meal_id: "",
    created_date: "",
  });

  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  const { data, error, isLoading } = useSWR(`https://meal-sharing-h3fe.onrender.com/api/meals/${id}`, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error in fetching data</div>;

  const availableSpace = data.data[0].max_reservation - data.data[0].current_reservations;

  const submit = (event) => {
    event.preventDefault();
    if (availableSpace <= 0) {
      return;
    }
    const meal_id = data.data[0].id;
    const created_date = new Date().toISOString().split("T")[0];

    const formData = JSON.stringify({
      ...newReservation,
      meal_id: Number(meal_id),
      created_date: created_date,
    });
    fetch("https://meal-sharing-h3fe.onrender.com/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })

      .then((data) => {
        console.log("Reservation successful:", data);
        setNewReservation({
          contact_name: "",
          contact_email: "",
          contact_phonenumber: "",
          number_of_guests: "",
          meal_id: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting reservation:", error);
      });
    setShowModal(true);
  };

  return (
    <>
      <>
        <NavBar />

        <div className="reservation-div">
          <div className="reservation-container">
            <div className="new-order">
              <h3>
                Your Order :<span> {data.data[0].title}</span>
              </h3>
              <div className="availableSpace">
                {availableSpace <= 0 && <p className="sold-out-message">Sold Out</p>}
              </div>
            </div>

            <div className="form-style">
              <div className="form-style-heading">Provide your information</div>
              <form action="" method="post" onSubmit={submit}>
                <label for="field1">
                  <span>
                    Name <span className="required">*</span>
                  </span>
                  <input
                    type="text"
                    value={newReservation.contact_name}
                    className="input-field"
                    name="field1"
                    onChange={(event) => {
                      setNewReservation({
                        ...newReservation,
                        contact_name: event.target.value.toLowerCase(),
                      });
                    }}
                  />
                </label>

                <label for="field2">
                  <span>
                    Email <span className="required">*</span>
                  </span>
                  <input
                    type="email"
                    value={newReservation.contact_email}
                    className="input-field"
                    name="field2"
                    onChange={(event) => {
                      setNewReservation({
                        ...newReservation,
                        contact_email: event.target.value.toLowerCase(),
                      });
                    }}
                  />
                </label>
                <label>
                  <span>Telephone</span>
                  <input
                    type="text"
                    value={newReservation.contact_phonenumber}
                    className="input-field"
                    name="tel"
                    onChange={(event) => {
                      setNewReservation({
                        ...newReservation,
                        contact_phonenumber: event.target.value.toLowerCase(),
                      });
                    }}
                  />
                </label>

                <label>
                  <span className="guest">guest number</span>
                  <input
                    type="number"
                    value={newReservation.number_of_guests}
                    className="input-field"
                    name="guest"
                    onChange={(event) => {
                      setNewReservation({
                        ...newReservation,
                        number_of_guests: event.target.value,
                      });
                    }}
                  />
                </label>

                <label className="submit">
                  <input type="submit" value="Submit" />
                </label>
              </form>
            </div>
          </div>
          {showModal && <Modal />}
        </div>
      </>
    </>
  );
}

export default Reservation;
