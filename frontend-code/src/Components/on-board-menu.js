import React, { useState } from "react";

function Food() {



    const [flightNumber, setFlightNumber] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [foodName, setFoodName] = useState('');


   function handleFlightNumberChange(event) {

       setFlightNumber({flightNumber: event.target.value});
   }
    function handleSeatNumberChange(event) {

        setSeatNumber({seatNumber: event.target.value});
    }
    function handleFoodNameChange(event) {

        setFoodName({foodName: event.target.value});
    }

    function handleSubmit(event) {

        event.preventDefault();

        let data={

            flightNumber,
            foodName,
            seatNumber
        };
    }


    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>On-Board Food Prebooking</title>
            {/* <style dangerouslySetInnerHTML={{__html: "\n body {\n font-family: Arial, sans-serif;\n background-color: #f4f4f4;\n margin: 0;\n padding: 0;\n }\n\n .container {\n max-width: 800px;\n margin: 0 auto;\n background-color: #fff;\n padding: 20px;\n border-radius: 5px;\n box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n }\n\n .food-item {\n display: flex;\n justify-content: space-between;\n align-items: center;\n margin-bottom: 20px;\n }\n\n .food-item img {\n width: 100px;\n height: 100px;\n object-fit: cover;\n margin-right: 20px;\n border-radius: 5px;\n }\n\n .food-details {\n flex: 1;\n }\n\n h2 {\n margin: 0 0 10px 0;\n }\n\n .booking-form {\n margin-top: 30px;\n }\n\n .form-group {\n margin-bottom: 20px;\n }\n\n label {\n display: block;\n margin-bottom: 5px;\n }\n\n input[type=\"text\"] {\n width: 100%;\n padding: 10px;\n border: 1px solid #ccc;\n border-radius: 5px;\n font-size: 16px;\n }\n\n input[type=\"submit\"] {\n background-color: #4caf50;\n color: #fff;\n border: none;\n padding: 12px 20px;\n cursor: pointer;\n font-size: 18px;\n }\n\n input[type=\"submit\"]:hover {\n background-color: #45a049;\n }\n " }} /> */}
            <div className="container">
                <h1>On-Board Food Prebooking</h1>
                <div className="food-item">
                    <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" />
                    <div className="food-details">
                        <h2>PANCAKE </h2>
                        <p>This dish combines the warm, fluffy goodness of freshly made pancakes with the rich sweetness of honey, creating a harmonious blend of flavors that tantalize the taste buds.</p>
                        <strong>Rs.250</strong>
                    </div>
                </div>
                <div className="food-item">
                    <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1060&t=st=1698597507~exp=1698598107~hmac=eb9a189cb8f0bb3cc827b50bc294565d0257fb588b87ea206087807046c10a22" />
                    <div className="food-details">
                        <h2>PASTA</h2>
                        <p>Fresh pasta with hearty bolognese and parmesan cheese, Crafted from the finest durum wheat flour, Nodelles Pasta boasts a smooth surface that captures and holds onto the flavors of accompanying sauces and ingredients. </p>
                        <strong>Rs.299</strong>
                    </div>
                </div>
                <div className="food-item">
                    <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    <div className="food-details">
                        <h2>BURGER</h2>
                        <p>A burger is a patty of ground beef grilled. Added slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavo.</p>
                        <strong>Rs.219</strong>
                    </div>
                </div>
                <div className="booking-form">
                    <h2>Prebook Your Meals</h2>
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number:</label>
                            <input type="text"
                                   id="flightNumber"
                                   name="flightNumber"
                                   value={flightNumber} onChange={handleFlightNumberChange}
                                   required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="seatNumber">Seat Number:</label>
                            <input
                                type="text"
                                id="seatNumber"
                                name="seatNumber"
                                value={seatNumber} onChange={handleSeatNumberChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="seatNumber">Food Name:</label>
                            <input
                                type="text"
                                id="foodName"
                                name="foodName"
                                value={foodName} onChange={handleFoodNameChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bookingID">Booking ID:</label>
                            <input type="text" id="bookingID" name="bookingID" required />
                        </div>
                        <input type="submit" onClick={handleSubmit} defaultValue="Prebook Now" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Food;