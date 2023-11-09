// import React, { useState } from 'react';

// function BookingForm() {
//   const [formData, setFormData] = useState({
//     tripType: 'one-way',
//     source: '',
//     destination: '',
//     departureDate: '',
//     returnDate: '',
//     passengers: 1,
//   });

//   // Provided JSON data
//   const data = {
//     airports: [
//       {
//         "airport_name": "Singerbhil Airport",
//         "city_name": "Agartala"
//     },
//     {
//         "airport_name": "Kheria Airport",
//         "city_name": "Agra"
//     },
//     {
//         "airport_name": "Ahmedabad Airport",
//         "city_name": "Ahmedabad"
//     },
//     {
//         "airport_name": "Aizawl Airport",
//         "city_name": "Aizawl"
//     },
//     {
//         "airport_name": "Bamrauli Airport",
//         "city_name": "Allahabad"
//     },
//     {
//         "airport_name": "Raja Sansi Airport",
//         "city_name": "Amritsar"
//     },
//     {
//         "airport_name": "Chikkalthana Airport",
//         "city_name": "Aurangabad"
//     },
//     {
//         "airport_name": "Bagdogra Airport",
//         "city_name": "Bagdogra"
//     },
//     {
//         "airport_name": "Bengaluru International Airport",
//         "city_name": "Bangalore"
//     },
//     {
//         "airport_name": "Bareli Airport",
//         "city_name": "Bareli"
//     },
//     {
//         "airport_name": "Sambre Airport",
//         "city_name": "Belgaum"
//     },
//     {
//         "airport_name": "Bellary Airport",
//         "city_name": "Bellary"
//     },
//     {
//         "airport_name": "Bhopal Airport",
//         "city_name": "Bhopal"
//     },
//     {
//         "airport_name": "Bhubaneswar Airport",
//         "city_name": "Bhubaneswar"
//     },
//     {
//         "airport_name": "Kullu Manali Airport",
//         "city_name": "Bhuntar Kullu."
//     },
//     {
//         "airport_name": "Bikaner Airport",
//         "city_name": "Bikaner"
//     },
//     {
//         "airport_name": "Bilaspur Airport",
//         "city_name": "Bilaspur"
//     },
//     {
//         "airport_name": "Chandigarh Airport",
//         "city_name": "Chandigarh"
//     },
//     {
//         "airport_name": "Chennai International Airport",
//         "city_name": "Chennai"
//     },
//     {
//         "airport_name": "Peelamedu Airport",
//         "city_name": "Coimbatore"
//     },
//     {
//         "airport_name": "Daman Airport",
//         "city_name": "Daman"
//     },
//     {
//         "airport_name": "Darjeeling Airport",
//         "city_name": "Darjeeling"
//     },
//     {
//         "airport_name": "Dehra Dun Airport",
//         "city_name": "Dehra Dun"
//     },
//     {
//         "airport_name": "Dhanbad Airport",
//         "city_name": "Dhanbad"
//     },
//     {
//         "airport_name": "Gaggal Airport",
//         "city_name": "Dharamsala"
//     },
//     {
//         "airport_name": "Dibrugarh Airport",
//         "city_name": "Dibrugarh"
//     },
//     {
//         "airport_name": "Dimapur Airport",
//         "city_name": "Dimapur"
//     },
//     {
//         "airport_name": "Diu Airport",
//         "city_name": "Diu"
//     },
//     {
//         "airport_name": "Gaya Airport",
//         "city_name": "Gaya"
//     },
//     {
//         "airport_name": "Dabolim Airport",
//         "city_name": "Goa"
//     },
//     {
//         "airport_name": "Gorakhpur Airport",
//         "city_name": "Gorakhpur"
//     },
//     {
//         "airport_name": "Guna Airport",
//         "city_name": "Guna"
//     },
//     {
//         "airport_name": "Borjhar Airport",
//         "city_name": "Guwahati"
//     },
//     {
//         "airport_name": "Gwalior Airport",
//         "city_name": "Gwalior"
//     },
//     {
//         "airport_name": "Hissar Airport",
//         "city_name": "Hissar"
//     },
//     {
//         "airport_name": "Hubli Airport",
//         "city_name": "Hubli"
//     },
//     {
//         "airport_name": "Hyderabad International Airport",
//         "city_name": "Hyderabad"
//     },
//     {
//         "airport_name": "Municipal Airport",
//         "city_name": "Imphal"
//     },
//     {
//         "airport_name": "Devi Ahilyabai Holkar Airport",
//         "city_name": "Indore"
//     },
//     {
//         "airport_name": "Jabalpur Airport",
//         "city_name": "Jabalpur"
//     },
//     {
//         "airport_name": "Jagdalpur Airport",
//         "city_name": "Jagdalpur"
//     },
//     {
//         "airport_name": "Sanganeer Airport",
//         "city_name": "Jaipur"
//     },
//     {
//         "airport_name": "Jaisalmer Airport",
//         "city_name": "Jaisalmer"
//     },
//     {
//         "airport_name": "Satwari Airport",
//         "city_name": "Jammu"
//     },
//     {
//         "airport_name": "Govardhanpur Airport",
//         "city_name": "Jamnagar"
//     },
//     {
//         "airport_name": "Sonari Airport",
//         "city_name": "Jamshedpur"
//     },
//     {
//         "airport_name": "Jodhpur Airport",
//         "city_name": "Jodhpur"
//     },
//     {
//         "airport_name": "Kailashahar Airport",
//         "city_name": "Kailashahar"
//     },
//     {
//         "airport_name": "Kamalpur Airport",
//         "city_name": "Kamalpur"
//     },
//     {
//         "airport_name": "Kandla Airport",
//         "city_name": "Kandla"
//     },
//     {
//         "airport_name": "Kanpur Airport",
//         "city_name": "Kanpur"
//     },
//     {
//         "airport_name": "Keshod Airport",
//         "city_name": "Keshod"
//     },
//     {
//         "airport_name": "Khajuraho Airport",
//         "city_name": "Khajuraho"
//     },
//     {
//         "airport_name": "Khowai Airport",
//         "city_name": "Khowai"
//     },
//     {
//         "airport_name": "Cochin International Airport",
//         "city_name": "Kochi"
//     },
//     {
//         "airport_name": "Kolhapur Airport",
//         "city_name": "Kolhapur"
//     },
//     {
//         "airport_name": "Netaji Subhash Chandra Bose International Airport",
//         "city_name": "Kolkata"
//     },
//     {
//         "airport_name": "Kota Airport",
//         "city_name": "Kota"
//     },
//     {
//         "airport_name": "Kozhikode Airport",
//         "city_name": "Kozhikode"
//     },
//     {
//         "airport_name": "Bakula Rimpoche Airport",
//         "city_name": "Leh"
//     },
//     {
//         "airport_name": "Lilabari Airport",
//         "city_name": "Lilabari"
//     },
//     {
//         "airport_name": "Amausi Airport",
//         "city_name": "Lucknow"
//     },
//     {
//         "airport_name": "Amritsar Airport",
//         "city_name": "Ludhiana"
//     },
//     {
//         "airport_name": "Madurai Airport",
//         "city_name": "Madurai"
//     },
//     {
//         "airport_name": "Malda Airport",
//         "city_name": "Malda"
//     },
//     {
//         "airport_name": "Bajpe Airport",
//         "city_name": "Mangalore"
//     },
//     {
//         "airport_name": "Mohanbari Airport",
//         "city_name": "Mohanbari"
//     },
//     {
//         "airport_name": "Chhatrapati Shivaji International Airport",
//         "city_name": "Mumbai"
//     },
//     {
//         "airport_name": "Muzaffarpur Airport",
//         "city_name": "Muzaffarpur"
//     },
//     {
//         "airport_name": "Mysore Airport",
//         "city_name": "Mysore"
//     },
//     {
//         "airport_name": "Sonegaon Airport",
//         "city_name": "Nagpur"
//     },
//     {
//         "airport_name": "Nanded Airport",
//         "city_name": "Nanded"
//     },
//     {
//         "airport_name": "Gandhinagar Airport",
//         "city_name": "Nasik"
//     },
//     {
//         "airport_name": "Indira Gandhi International Airport",
//         "city_name": "New Delhi"
//     },
//     {
//         "airport_name": "Neyveli Airport",
//         "city_name": "Neyveli"
//     },
//     {
//         "airport_name": "Patna Airport",
//         "city_name": "Patna"
//     },
//     {
//         "airport_name": "Pondicherry Airport",
//         "city_name": "Pondicherry"
//     },
//     {
//         "airport_name": "Porbandar Airport",
//         "city_name": "Porbandar"
//     },
//     {
//         "airport_name": "Port Blair Airport",
//         "city_name": "Port Blair"
//     },
//     {
//         "airport_name": "Lohegaon Airport",
//         "city_name": "Pune"
//     },
//     {
//         "airport_name": "Raipur Airport",
//         "city_name": "Raipur"
//     },
//     {
//         "airport_name": "Rajahmundry Airport",
//         "city_name": "Rajahmundry"
//     },
//     {
//         "airport_name": "Rajkot Airport",
//         "city_name": "Rajkot"
//     },
//     {
//         "airport_name": "Birsa Munda International Airport",
//         "city_name": "Ranchi"
//     },
//     {
//         "airport_name": "Ratnagiri Airport",
//         "city_name": "Ratnagiri"
//     },
//     {
//         "airport_name": "Rewa Airport",
//         "city_name": "Rewa"
//     },
//     {
//         "airport_name": "Rourkela Airport",
//         "city_name": "Rourkela"
//     },
//     {
//         "airport_name": "Salem Airport",
//         "city_name": "Salem"
//     },
//     {
//         "airport_name": "Barapani Airport",
//         "city_name": "Shillong"
//     },
//     {
//         "airport_name": "Sholapur Airport",
//         "city_name": "Sholapur"
//     },
//     {
//         "airport_name": "Kumbhirgram Airport",
//         "city_name": "Silchar"
//     },
//     {
//         "airport_name": "Simla Airport",
//         "city_name": "Simla"
//     },
//     {
//         "airport_name": "Srinagar Airport",
//         "city_name": "Srinagar"
//     },
//     {
//         "airport_name": "Surat Airport",
//         "city_name": "Surat"
//     },
//     {
//         "airport_name": "Tezu Airport",
//         "city_name": "Tezu"
//     },
//     {
//         "airport_name": "Thanjavur Airport",
//         "city_name": "Thanjavur"
//     },
//     {
//         "airport_name": "Tirupati Airport",
//         "city_name": "Tirupati"
//     },
//     {
//         "airport_name": "Trichy Airport",
//         "city_name": "Trichy"
//     },
//     {
//         "airport_name": "Thiruvananthapuram International Airport",
//         "city_name": "Trivandrum"
//     },
//     {
//         "airport_name": "Tuticorin Airport",
//         "city_name": "Tuticorin"
//     },
//     {
//         "airport_name": "Dabok Airport",
//         "city_name": "Udaipur"
//     },
//     {
//         "airport_name": "Vadodara Airport",
//         "city_name": "Vadodara"
//     },
//     {
//         "airport_name": "Varanasi Airport",
//         "city_name": "Varanasi"
//     },
//     {
//         "airport_name": "Vijayawada Airport",
//         "city_name": "Vijayawada"
//     },
//     {
//         "airport_name": "Vishakhapatnam Airport",
//         "city_name": "Vishakhapatnam"
//     },
//     {
//         "airport_name": "Warangal Airport",
//         "city_name": "Warangal"
//     }
//     ],
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // You can handle form data submission here
//   };

//   // Function to populate the dropdown menus
//   const populateDropdown = (dataArray) => {
//     return dataArray.map((item) => (
//       <option key={item.city_name} value={item.city_name}>
//         {item.city_name}
//       </option>
//     ));
//   };

//   return (
//     <div className="booking-form">
//       <form onSubmit={handleSubmit}>
//         <div className="trip-type">
//           <label>
//             Trip Type:
//             <select
//               name="tripType"
//               value={formData.tripType}
//               onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
//             >
//               <option value="one-way">One Way</option>
//               <option value="round-trip">Round Trip</option>
//             </select>
//           </label>
//         </div>

//         <div className="from-to-container">
//           <div className="from">
//             <label>
//               From:
//               <select
//               style={{"marginRight":"20px"}}
//                 name="source"
//                 value={formData.source}
//                 onChange={(e) => setFormData({ ...formData, source: e.target.value })}
//               >
//                 {populateDropdown(data.airports)}
//               </select>
//             </label>
//           </div>

//           <div className="to">
//             <label>
//               To:
//               <select
//                 name="destination"
//                 value={formData.destination}
//                 onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
//               >
//                 {populateDropdown(data.airports)}
//               </select>
//             </label>
//           </div>
//         </div>

//         <div className="dates-container">
//           <div className="departure">
//             <label>
//               Departure:
//               <input
//                 type="date"
//                 name="departureDate"
//                 value={formData.departureDate}
//                 onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
//               />
//             </label>
//           </div>

//           <div className="return">
//             <label>
//               Return:
//               <input
//                 type="date"
//                 name="returnDate"
//                 value={formData.returnDate}
//                 onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
//               />
//             </label>
//           </div>
//         </div>

//         <div className="travellers">
//           <label>
//             Travellers:
//             <input
//               type="number"
//               name="passengers"
//               value={formData.passengers}
//               onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
//             />
//           </label>
//         </div>

//         <div className="submit-button">
//           <button type="submit" id="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;


import React, { useState } from 'react';
import './BookingForm.css'
function BookingForm() {
  const [formData, setFormData] = useState({
    tripType: 'one-way',
    source: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
  });

  // Provided JSON data
  const data = {
    airports: [
    {
        "airport_name": "Kheria Airport",
        "city_name": "Agra"
    },
    {
        "airport_name": "Ahmedabad Airport",
        "city_name": "Ahmedabad"
    },
    {
        "airport_name": "Aizawl Airport",
        "city_name": "Aizawl"
    },
    {
        "airport_name": "Bamrauli Airport",
        "city_name": "Allahabad"
    },
    {
        "airport_name": "Raja Sansi Airport",
        "city_name": "Amritsar"
    },
    {
        "airport_name": "Bagdogra Airport",
        "city_name": "Bagdogra"
    },
    {
        "airport_name": "Bengaluru International Airport",
        "city_name": "Bangalore"
    },
    {
        "airport_name": "Bhopal Airport",
        "city_name": "Bhopal"
    },
    {
        "airport_name": "Bhubaneswar Airport",
        "city_name": "Bhubaneswar"
    },
    {
        "airport_name": "Chandigarh Airport",
        "city_name": "Chandigarh"
    },
    {
        "airport_name": "Chennai International Airport",
        "city_name": "Chennai"
    },
    {
        "airport_name": "Peelamedu Airport",
        "city_name": "Coimbatore"
    },
    {
        "airport_name": "Dehra Dun Airport",
        "city_name": "Dehra Dun"
    },
    {
        "airport_name": "Dabolim Airport",
        "city_name": "Goa"
    },
    {
        "airport_name": "Borjhar Airport",
        "city_name": "Guwahati"
    },
    {
        "airport_name": "Hyderabad International Airport",
        "city_name": "Hyderabad"
    },
    {
        "airport_name": "Devi Ahilyabai Holkar Airport",
        "city_name": "Indore"
    },
    {
        "airport_name": "Sanganeer Airport",
        "city_name": "Jaipur"
    },
    {
        "airport_name": "Jaisalmer Airport",
        "city_name": "Jaisalmer"
    },
    {
        "airport_name": "Satwari Airport",
        "city_name": "Jammu"
    },
    {
        "airport_name": "Cochin International Airport",
        "city_name": "Kochi"
    },
    {
        "airport_name": "Netaji Subhash Chandra Bose International Airport",
        "city_name": "Kolkata"
    },
    {
        "airport_name": "Kozhikode Airport",
        "city_name": "Kozhikode"
    },
    {
        "airport_name": "Bakula Rimpoche Airport",
        "city_name": "Leh"
    },
    {
        "airport_name": "Amausi Airport",
        "city_name": "Lucknow"
    },
    {
        "airport_name": "Amritsar Airport",
        "city_name": "Ludhiana"
    },
    {
        "airport_name": "Madurai Airport",
        "city_name": "Madurai"
    },
    {
        "airport_name": "Bajpe Airport",
        "city_name": "Mangalore"
    },
    {
        "airport_name": "Chhatrapati Shivaji International Airport",
        "city_name": "Mumbai"
    },
    {
        "airport_name": "Sonegaon Airport",
        "city_name": "Nagpur"
    },
    {
        "airport_name": "Indira Gandhi International Airport",
        "city_name": "New Delhi"
    },
    {
        "airport_name": "Patna Airport",
        "city_name": "Patna"
    },
    {
        "airport_name": "Pondicherry Airport",
        "city_name": "Pondicherry"
    },
    {
        "airport_name": "Port Blair Airport",
        "city_name": "Port Blair"
    },
    {
        "airport_name": "Lohegaon Airport",
        "city_name": "Pune"
    },
    {
        "airport_name": "Raipur Airport",
        "city_name": "Raipur"
    },
    {
        "airport_name": "Birsa Munda International Airport",
        "city_name": "Ranchi"
    },
    {
        "airport_name": "Barapani Airport",
        "city_name": "Shillong"
    },
    {
        "airport_name": "Kumbhirgram Airport",
        "city_name": "Silchar"
    },
    {
        "airport_name": "Simla Airport",
        "city_name": "Simla"
    },
    {
        "airport_name": "Srinagar Airport",
        "city_name": "Srinagar"
    },
    {
        "airport_name": "Surat Airport",
        "city_name": "Surat"
    },
    {
        "airport_name": "Tirupati Airport",
        "city_name": "Tirupati"
    },
    {
        "airport_name": "Thiruvananthapuram International Airport",
        "city_name": "Trivandrum"
    },
    {
        "airport_name": "Dabok Airport",
        "city_name": "Udaipur"
    },
    {
        "airport_name": "Vadodara Airport",
        "city_name": "Vadodara"
    },
    {
        "airport_name": "Varanasi Airport",
        "city_name": "Varanasi"
    },
    {
        "airport_name": "Vijayawada Airport",
        "city_name": "Vijayawada"
    },
    {
        "airport_name": "Vishakhapatnam Airport",
        "city_name": "Vishakhapatnam"
    }
    ],
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form data submission here
  };

  const [tripHide, setTripHide] = useState(true);

  function handleOnChangeTrip(event) {

    setFormData({ ...formData, tripType: event.target.value })
    if( event.target.value=='one-way'){
      setTripHide(true)
    }else{
      setTripHide(false)
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
              style={{"marginRight":"20px"}}
                name="source"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
              />
            </label>
          </div>
        {
            tripHide ? <div></div>   : 
          <div className="return">
            <label>
              Return:
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
              />
            </label>
          </div>
        }
        </div>

        <div className="travellers">
          <label>
            Travellers:
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            />
          </label>
        </div>

        <div className="submit-button">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;