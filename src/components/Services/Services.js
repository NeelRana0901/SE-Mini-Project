import React, { useState } from "react";
import "./ServiceDetails/Services.css";

const doctors = [
  {
    Doctor_id: "004",
    Doctor_name: "Dr. Ashutosh Jokhakar",
    DocImage: "https://assets.lybrate.com/img/documents/doctor/dp/2bd34e5483e476fb6ed17e12a5fb8f31/General-Physician-SanjayGajera-Surat-7ec31f",
    Treatment_id: "123",
    Treatment_name: "NA",
    Diseases_name: "Malaria",
    Treatment_cost: "NA",
    Appointment_fee: "450",
    Hospital_id: "48",
    Area: "Citylight",
    Hospital_name: "Suvidha Clinic",
    Hospital_full_address:
      "Suvidha Clinic,G 15/16,Bhagwati Ashish Complex,Citylight Road",
  },

  {
    Doctor_id: "005",
    Doctor_name: "Dr. Sharat Gupta",
    DocImage:"https://content3.jdmagicbox.com/comp/surat/g8/0261px261.x261.170927134225.u3g8/catalogue/dr-sharat-gupta-city-light-skin-clinic-citylight-road-surat-dermatologists-ds2nd5lqtt.jpg",
    Treatment_id: "124",
    Treatment_name: "Chemotherapy",
    Diseases_name: "Cancer",
    Treatment_cost: "NA",
    Appointment_fee: "300",
    Hospital_id: "49",
    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      "2nd floor Prasham Building,City light Road near Bank Of Baroda",
  },
  {
    Doctor_id: "008",
    Doctor_name: "Dr. Kaushik Soni",
    DocImage:"https://content3.jdmagicbox.com/comp/ahmedabad/44/079p81244/catalogue/dr-kaushik-vaidya-sola-road-ahmedabad-general-physician-doctors-nw3lu.jpg",
    Treatment_id: "127",
    Treatment_name: "NA",
    Diseases_name: "fever",
    Treatment_cost: "NA",
    Appointment_fee: "370",
    Hospital_id: "52",
    Area: "Adajan",
    Hospital_name: "Nidan Clinic",
    Hospital_full_address: "Nidan Clinc,near Gujarat Gas station,Adajan Road",
  },
  {
    Doctor_id: "006",
    Doctor_name: "Dr. Pradip Martin",
    DocImage:"https://media.licdn.com/dms/image/C4E03AQHqFV4FTvRYgw/profile-displayphoto-shrink_200_200/0/1517035668255?e=1681948800&v=beta&t=ITis7wN5WPwvxdcpWm7lE1J-fkVpN4-ognAopp_0S54",
    Treatment_id: "125",
    Treatment_name: "NA",
    Diseases_name: "Food Poisoning",
    Treatment_cost: "NA",
    Appointment_fee: "500",
    Hospital_id: "50",
    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      "3rd floor Prasham Building,City light Road near Bank Of Baroda",
  },
  {
    Doctor_id: "011",
    Doctor_name: "Dr. Ramesh Patel",
    DocImage:"https://images.drlogy.com/assets/uploads/img/practice-profile/doctors/photo/dr-ramesh-n-patel-67f2fb1ee0e-b98ce30db01.jpg",
    Treatment_id: "131",
    Treatment_name: "NA",
    Diseases_name: "Back-Pain",
    Treatment_cost: "NA",
    Appointment_fee: "350",
    Hospital_id: "54",
    Area: "Adajan",
    Hospital_name: "BAPS Pramukh Swami Hospital",
    Hospital_full_address:
      "Shri Pramukh Swami Maharaj Marg,Adajan Char Rasta,Adajan",
  },

  {
    Doctor_id: "000",
    Doctor_name: "Dr. Sanjay Agrawal",
    DocImage:"https://media.licdn.com/dms/image/C5603AQF51XNq2_tOkw/profile-displayphoto-shrink_800_800/0/1517553000076?e=2147483647&v=beta&t=Lkj-gJCJTdOMmvZUWC1c74KrFXH-wCfQwWiN7ICoq3M",
    Treatment_id: "120",
    Diseases_name: "Diabetes",
    Treatment_name: "NA",
    Treatment_cost: "NA",
    Appointment_fee: "300",
    Hospital_id: "45",
    Area: "Citylight",
    Hospital_name: "Aman Hospital",
    Hospital_full_address:
      "Diabetologist Clinic 4th Floor,Siddhi Complex,Near ICICI Bank,City Light",
  },
  {
    Doctor_id: "002",
    Doctor_name: " Dr. Shailesh Gandhi",
    DocImage:"https://imagesx.practo.com/providers/dr-shailesh-gandhi-general-physician-surat-6c3d0acb-ed82-404e-a320-5f0106330bd3.jpg?i_type=t_100x100-4x",
    Treatment_id: "121",
    Treatment_name: "NA",
    Diseases_name: "Typhoid",
    Treatment_cost: "NA",
    Appointment_fee: "150",
    Hospital_id: "46",
    Area: "Citylight",
    Hospital_name: "Shalibhadra Clinic",
    Hospital_full_address:
      "Shalibhadra Clinic,Ground floor,Shalibhadra Apartment,Parle Point",
  },
  {
    Doctor_id: "003",
    Doctor_name: "Dr. Yesha Chokshi",
    DocImage:"https://www.spiralshealth.com/public/userdata/doctor/TWxvNEdUcmhoakVpUEpleml3NEwyZz09/1614522685407648_spirals46290_1615627444.png",
    Treatment_id: "122",
    Treatment_name: "Delivery",
    Diseases_name: "WomanCare",
    Treatment_cost: "NA",
    Appointment_fee: "500",
    Hospital_id: "47",
    Area: "Citylight",
    Hospital_name: "Shree Hospital",
    Hospital_full_address:
      "Shree Hospital 3rd floor Siddhi Shopping Center,Citylight Main Road",
  },

  {
    Doctor_id: "007",
    Doctor_name: "Dr. Jayesh Dubhuwala",
    DocImage:"https://media.licdn.com/dms/image/C5103AQGtchFP2Ui7Gg/profile-displayphoto-shrink_200_200/0/1516976699160?e=1684972800&v=beta&t=8mEr_yWVRcseEIe5C6VijEok3pE91xtvn1FiX_YZqfM",
    Treatment_id: "126",
    Treatment_name: "NA",
    Diseases_name: "Skin related",
    Treatment_cost: "NA",
    Appointment_fee: "350",
    Hospital_id: "51",
    Area: "Citylight",
    Hospital_name: "City light Skin Clinic",
    Hospital_full_address:
      "City light Skin Clinic,22 Upper Ground AgrasenPoint,Citylight Road",
  },
];

const DoctorFinder = () => {
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const getDoctorSuggestions = () => {
    if (!selectedDisease || !selectedLocation) {
      return [];
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
                    <img src={doctor.DocImage} />
                    <b> Doctor Name </b>: {doctor.Doctor_name}{" "}
                    <b>Disease Name</b> : {doctor.Diseases_name}
                    <br />
                    <b>Treatment Name</b> : {doctor.Treatment_name}{" "}
                    <b>Hospital Name</b> : {doctor.Hospital_name}
                    <br />
                    <b>Appointment Fees</b> : {doctor.Appointment_fee}{" "}
                    <b>Full Address </b> : {doctor.Hospital_full_address}
                    <br />
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
