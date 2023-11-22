import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tripType: "one-way",
    source: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });

  // Provided JSON data
  const data = {
    airports: [
      {
        airport_name: "Kheria Airport",
        city_name: "Agra",
      },
      {
        airport_name: "Ahmedabad Airport",
        city_name: "Ahmedabad",
      },
      {
        airport_name: "Aizawl Airport",
        city_name: "Aizawl",
      },
      {
        airport_name: "Bamrauli Airport",
        city_name: "Allahabad",
      },
      {
        airport_name: "Raja Sansi Airport",
        city_name: "Amritsar",
      },
      {
        airport_name: "Bagdogra Airport",
        city_name: "Bagdogra",
      },
      {
        airport_name: "Bengaluru International Airport",
        city_name: "Bangalore",
      },
      {
        airport_name: "Bhopal Airport",
        city_name: "Bhopal",
      },
      {
        airport_name: "Bhubaneswar Airport",
        city_name: "Bhubaneswar",
      },
      {
        airport_name: "Chandigarh Airport",
        city_name: "Chandigarh",
      },
      {
        airport_name: "Chennai International Airport",
        city_name: "Chennai",
      },
      {
        airport_name: "Peelamedu Airport",
        city_name: "Coimbatore",
      },
      {
        airport_name: "Dehra Dun Airport",
        city_name: "Dehra Dun",
      },
      {
        airport_name: "Dabolim Airport",
        city_name: "Goa",
      },
      {
        airport_name: "Borjhar Airport",
        city_name: "Guwahati",
      },
      {
        airport_name: "Hyderabad International Airport",
        city_name: "Hyderabad",
      },
      {
        airport_name: "Devi Ahilyabai Holkar Airport",
        city_name: "Indore",
      },
      {
        airport_name: "Sanganeer Airport",
        city_name: "Jaipur",
      },
      {
        airport_name: "Jaisalmer Airport",
        city_name: "Jaisalmer",
      },
      {
        airport_name: "Satwari Airport",
        city_name: "Jammu",
      },
      {
        airport_name: "Cochin International Airport",
        city_name: "Kochi",
      },
      {
        airport_name: "Netaji Subhash Chandra Bose International Airport",
        city_name: "Kolkata",
      },
      {
        airport_name: "Kozhikode Airport",
        city_name: "Kozhikode",
      },
      {
        airport_name: "Bakula Rimpoche Airport",
        city_name: "Leh",
      },
      {
        airport_name: "Amausi Airport",
        city_name: "Lucknow",
      },
      {
        airport_name: "Amritsar Airport",
        city_name: "Ludhiana",
      },
      {
        airport_name: "Madurai Airport",
        city_name: "Madurai",
      },
      {
        airport_name: "Bajpe Airport",
        city_name: "Mangalore",
      },
      {
        airport_name: "Chhatrapati Shivaji International Airport",
        city_name: "Mumbai",
      },
      {
        airport_name: "Sonegaon Airport",
        city_name: "Nagpur",
      },
      {
        airport_name: "Indira Gandhi International Airport",
        city_name: "New Delhi",
      },
      {
        airport_name: "Patna Airport",
        city_name: "Patna",
      },
      {
        airport_name: "Pondicherry Airport",
        city_name: "Pondicherry",
      },
      {
        airport_name: "Port Blair Airport",
        city_name: "Port Blair",
      },
      {
        airport_name: "Lohegaon Airport",
        city_name: "Pune",
      },
      {
        airport_name: "Raipur Airport",
        city_name: "Raipur",
      },
      {
        airport_name: "Birsa Munda International Airport",
        city_name: "Ranchi",
      },
      {
        airport_name: "Barapani Airport",
        city_name: "Shillong",
      },
      {
        airport_name: "Kumbhirgram Airport",
        city_name: "Silchar",
      },
      {
        airport_name: "Simla Airport",
        city_name: "Simla",
      },
      {
        airport_name: "Srinagar Airport",
        city_name: "Srinagar",
      },
      {
        airport_name: "Surat Airport",
        city_name: "Surat",
      },
      {
        airport_name: "Tirupati Airport",
        city_name: "Tirupati",
      },
      {
        airport_name: "Thiruvananthapuram International Airport",
        city_name: "Trivandrum",
      },
      {
        airport_name: "Dabok Airport",
        city_name: "Udaipur",
      },
      {
        airport_name: "Vadodara Airport",
        city_name: "Vadodara",
      },
      {
        airport_name: "Varanasi Airport",
        city_name: "Varanasi",
      },
      {
        airport_name: "Vijayawada Airport",
        city_name: "Vijayawada",
      },
      {
        airport_name: "Vishakhapatnam Airport",
        city_name: "Vishakhapatnam",
      },
    ],
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in submit");
    let session = fetch("http://localhost:5000/airline/api/user").then(
      (res) => {
        if (res.status === 200) {
          let res2 = fetch("http://localhost:5000/airline/api/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              source: formData.source,
              destination: formData.destination,
              tripType: formData.tripType,
              departureDate: formData.departureDate,
              returnDate: formData.returnDate,
              passengers: formData.passengers,
            }),
          })
            .then((res) => {
              if (res.status == 200) {
                return res.json();
              } else {
                return null;
              }
            })
            .then((data) => {
              if (data) {
                console.log(data);
                alert(
                  "Successfully booked flight. Your booking ID is " + data.ID
                );
                navigate("/PaymentsPage");
              } else {
                alert("You have already booked a flight with these details!");
              }
            });
        } else {
          alert("You have not logged in!!");
          navigate("/Login");
        }
      }
    );
  };

  const [tripHide, setTripHide] = useState(true);

  function handleOnChangeTrip(event) {
    setFormData({ ...formData, tripType: event.target.value });
    if (event.target.value == "one-way") {
      setTripHide(true);
    } else {
      setTripHide(false);
    }
  }

  // Function to populate the dropdown menus
  const populateDropdown = (dataArray) => {
    return dataArray.map((item) => (
      <option key={item.city_name} value={item.city_name}>
        {item.city_name}
      </option>
    ));
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="trip-type">
          <label>
            Trip Type:
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleOnChangeTrip}
            >
              <option value="one-way">One Way</option>
              <option value="round-trip">Round Trip</option>
            </select>
          </label>
        </div>

        <div className="from-to-container">
          <div className="from">
            <label>
              From:
              <select
                style={{ marginRight: "20px" }}
                name="source"
                value={formData.source}
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })
                }
              >
                {populateDropdown(data.airports)}
              </select>
            </label>
          </div>

          <div className="to">
            <label>
              To:
              <select
                name="destination"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
              >
                {populateDropdown(data.airports)}
              </select>
            </label>
          </div>
        </div>

        <div className="dates-container">
          <div className="departure">
            <label>
              Departure:
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={(e) =>
                  setFormData({ ...formData, departureDate: e.target.value })
                }
              />
            </label>
          </div>
          {tripHide ? (
            <div></div>
          ) : (
            <div className="return">
              <label>
                Return:
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={(e) =>
                    setFormData({ ...formData, returnDate: e.target.value })
                  }
                />
              </label>
            </div>
          )}
        </div>

        <div className="travellers">
          <label>
            Travellers:
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={(e) =>
                setFormData({ ...formData, passengers: e.target.value })
              }
            />
          </label>
        </div>

        <div className="submit-button">
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
