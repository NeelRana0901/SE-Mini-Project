import React, { useState } from "react";
import "./ServiceDetails/Services.css";
// assuming your JSON data is stored in a variable called "doctors"
const doctors = [
  {
    Doctor_id: "004",
    Doctor_name: "Dr. Ashutosh Jokhakar",
    Treatment_id: "123",
    Treatment_name: "NA",
    Diseases_name: "Malaria",
    Treatment_cost: "NA",
    Appointment_fee: "450",
    Hospital_id: "48",

    Area: "Citylight",
    Hospital_name: "Suvidha Clinic",
    Hospital_full_address:
      " Suvidha Clinic, G 15/16, Bhagwati Ashish Complex, Citylight Road Surat 395007",
  },

  {
    Doctor_id: "005",
    Doctor_name: "Dr. Sharat Gupta",
    Treatment_id: "124",
    Treatment_name: "Chemotherapy",
    Diseases_name: "Cancer",
    Treatment_cost: "NA",
    Appointment_fee: "300",
    Hospital_id: "49",

    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      "  2nd floor Prasham Building, City light Road near Bank Of Baroda Surat-395007",
  },
  {
    Doctor_id: "008",
    Doctor_name: "Dr. Kaushik Soni",
    Treatment_id: "127",
    Treatment_name: "NA",
    Diseases_name: "fever",
    Treatment_cost: "NA",
    Appointment_fee: "370",
    Hospital_id: "52",
    Area: "Adajan",
    Hospital_name: "Nidan Clinic",
    Hospital_full_address:
      " Nidan Clinc,near Gujarat Gas station,Adajan Road Surat-395007",
  },
  {
    Doctor_id: "006",
    Doctor_name: "Dr. Pradip Martin",
    Treatment_id: "125",
    Treatment_name: "NA",
    Diseases_name: "Food Poisoning",
    Treatment_cost: "NA",
    Appointment_fee: "500",
    Hospital_id: "50",

    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      " 3rd floor Prasham Building, City light Road near Bank Of Baroda Surat-395007",
  },
  {
    Doctor_id: "011",
    Doctor_name: "Dr. Ramesh Patel",
    Treatment_id: "131",
    Treatment_name: "NA",
    Diseases_name: "Back-Pain",
    Treatment_cost: "NA",
    Appointment_fee: "350",
    Hospital_id: "54",
    Area: "Adajan",
    Hospital_name: "BAPS Pramukh Swami Hospital",
    Hospital_full_address:
      "5QQX+R72, Shri Pramukh Swami Maharaj Marg, Adajan Char Rasta, Adajan, Surat, Gujarat 395009",
  },

  {
    Doctor_id: "000",
    Doctor_name: "Dr. Sanjay Agrawal",
    Treatment_id: "120",
    Diseases_name: "Diabetes",
    Treatment_name: "NA",
    Treatment_cost: "NA",
    Appointment_fee: "300",
    Hospital_id: "45",

    Area: "Citylight",
    Hospital_name: "Aman Hospital",
    Hospital_full_address:
      "Diabetologist Clinic 4th Floor, Siddhi Complex, Near ICICI Bank, City Light ,Surat",
  },
  {
    Doctor_id: "002",
    Doctor_name: " Dr. Shailesh Gandhi",
    Treatment_id: "121",
    Treatment_name: "NA",
    Diseases_name: "Typhoid",
    Treatment_cost: "NA",
    Appointment_fee: "150",
    Hospital_id: "46",

    Area: "Citylight",
    Hospital_name: "Shalibhadra Clinic",
    Hospital_full_address:
      "Shalibhadra Clinic, Ground floor, Shalibhadra Apartment, parle point",
  },
  {
    Doctor_id: "003",
    Doctor_name: "Dr. Yesha Chokshi",
    Treatment_id: "122",
    Treatment_name: "Delivery",
    Diseases_name: "WomanCare",
    Treatment_cost: "NA",
    Appointment_fee: "500",
    Hospital_id: "47",
    Area: "Citylight",
    Hospital_name: "Shree Hospital",
    Hospital_full_address:
      "Shree Hospital 3rd floor Siddhi Shopping Center, Citylight Main,Road,Surat,395007",
  },

  {
    Doctor_id: "007",
    Doctor_name: "Dr. Jayesh Dbhuwala",
    Treatment_id: "126",
    Treatment_name: "NA",
    Diseases_name: "Skin related",
    Treatment_cost: "NA",
    Appointment_fee: "350",
    Hospital_id: "51",
    Area: "Citylight",
    Hospital_name: "City light Skin Clinic",
    Hospital_full_address:
      " City light Skin Clinic,22 Upper Ground AgrasenPoint, Citylight Road Surat-395007",
  },
];

const DoctorFinder = () => {
  // state variables to store the user's selected disease and location
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // function to filter doctors based on the selected disease and location
  const getDoctorSuggestions = () => {
    if (!selectedDisease || !selectedLocation) {
      return []; // if either disease or location is not selected, return an empty array
    }

    const matchingDoctors = doctors.filter(
      (doctor) =>
        doctor.Diseases_name.toLowerCase() === selectedDisease.toLowerCase() &&
        doctor.Area.toLowerCase() === selectedLocation.toLowerCase()
    );

    return matchingDoctors;
  };

  return (
    <div className="main-container">
      <div className="doctor-finder">
        <h2>FIND A DOCTOR</h2>
        <div>
          <label htmlFor="disease-select">Select Disease:</label>
          <select
            id="disease-select"
            onChange={(e) => setSelectedDisease(e.target.value)}
          >
            <option value="">Select a disease</option>
            <option value="fever">fever</option>
            <option value="Malaria">Malaria</option>
            <option value="Cancer">Cancer</option>
            <option value="Food Poisoning">Food Poisoning</option>
            <option value="Back-Pain">Back-Pain</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Typhoid">Typhoid</option>
            <option value="Delivery">Delivery</option>
            <option value="Skin related">Skin related</option>
            {/* add more diseases here... */}
          </select>
        </div>
        <div>
          <label htmlFor="location-select">Select Location:</label>
          <select
            id="location-select"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select a location</option>
            <option value="Citylight">Citylight</option>
            <option value="Adajan">Adajan</option>
            {/* add more locations here... */}
          </select>
        </div>
        <div>
          {getDoctorSuggestions().length === 0 ? (
            <p>No doctors found.</p>
          ) : (
            <>
              <p>{getDoctorSuggestions().length} doctors found:</p>
              <br />
              <ul>
                {getDoctorSuggestions().map((doctor) => (
                  <ul key={doctor.Doctor_id} type="disc">
                    <li> Dortor Name: {doctor.Doctor_name} </li>
                    <li> Dieases Name: {doctor.Diseases_name} </li>
                    <li> Treatment Name: {doctor.Treatment_name} </li>
                    <li> Hospital Name: {doctor.Hospital_name} </li>
                    <li> Appointment Fees: {doctor.Appointment_fee} </li>
                    <li> Full Address: ({doctor.Hospital_full_address}) </li>
                  </ul>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorFinder;
