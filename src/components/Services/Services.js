import React, { useState } from "react";
import "./ServiceDetails/Services.css";

const doctors = [
  {
    Doctor_id: "004",
    Doctor_name: "Dr. Ashutosh Jokhakar",
    DocImage:
      "https://assets.lybrate.com/img/documents/doctor/dp/2bd34e5483e476fb6ed17e12a5fb8f31/General-Physician-SanjayGajera-Surat-7ec31f",
    Diseases_name: "Malaria",
    Area: "Citylight",
    Hospital_name: "Suvidha Clinic",
    Hospital_full_address:
      "Suvidha Clinic,G 15/16,Bhagwati Ashish Complex,Citylight Road",
  },

  {
    Doctor_id: "005",
    Doctor_name: "Dr. Sharat Gupta",
    DocImage:
      "https://content3.jdmagicbox.com/comp/surat/g8/0261px261.x261.170927134225.u3g8/catalogue/dr-sharat-gupta-city-light-skin-clinic-citylight-road-surat-dermatologists-ds2nd5lqtt.jpg",
    Diseases_name: "Cancer",
    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      "2nd floor Prasham Building,City light Road near Bank Of Baroda",
  },
  {
    Doctor_id: "008",
    Doctor_name: "Dr. Kaushik Soni",
    DocImage:
      "https://t3.ftcdn.net/jpg/01/64/16/30/360_F_164163068_xUVhVRrAXuGolVeNQnqHB6ewPPkadRCQ.jpg",
    Diseases_name: "fever",
    Area: "Adajan",
    Hospital_name: "Nidan Clinic",
    Hospital_full_address: "Nidan Clinc,near Gujarat Gas station,Adajan Road",
  },
  {
    Doctor_id: "006",
    Doctor_name: "Dr. Pradip Martin",
    DocImage:
      "https://cdn.msruas.ac.in/ruas/media/images/university/people/2022/Dr.OPK.f1672927923.jpg",
    Diseases_name: "Food Poisoning",
    Area: "Citylight",
    Hospital_name: "Healing Hand Hospital",
    Hospital_full_address:
      "3rd floor Prasham Building,City light Road near Bank Of Baroda",
  },
  {
    Doctor_id: "011",
    Doctor_name: "Dr. Ramesh Patel",
    DocImage:
      "https://images.drlogy.com/assets/uploads/img/practice-profile/doctors/photo/dr-ramesh-n-patel-67f2fb1ee0e-b98ce30db01.jpg",
    Diseases_name: "Back-Pain",
    Area: "Adajan",
    Hospital_name: "BAPS Pramukh Swami Hospital",
    Hospital_full_address:
      "Shri Pramukh Swami Maharaj Marg,Adajan Char Rasta,Adajan",
  },

  {
    Doctor_id: "000",
    Doctor_name: "Dr. Sanjay Agrawal",
    DocImage:
      "https://media.licdn.com/dms/image/C5603AQF51XNq2_tOkw/profile-displayphoto-shrink_800_800/0/1517553000076?e=2147483647&v=beta&t=Lkj-gJCJTdOMmvZUWC1c74KrFXH-wCfQwWiN7ICoq3M",
    Diseases_name: "Diabetes",
    Area: "Citylight",
    Hospital_name: "Aman Hospital",
    Hospital_full_address:
      "Diabetologist Clinic 4th Floor,Siddhi Complex,Near ICICI Bank,City Light",
  },
  {
    Doctor_id: "002",
    Doctor_name: " Dr. Shailesh Gandhi",
    DocImage:
      "https://imagesx.practo.com/providers/dr-shailesh-gandhi-general-physician-surat-6c3d0acb-ed82-404e-a320-5f0106330bd3.jpg?i_type=t_100x100-4x",
    Diseases_name: "Typhoid",
    Area: "Citylight",
    Hospital_name: "Shalibhadra Clinic",
    Hospital_full_address:
      "Shalibhadra Clinic,Ground floor,Shalibhadra Apartment,Parle Point",
  },
  {
    Doctor_id: "003",
    Doctor_name: "Dr. Yesha Chokshi",
    DocImage:
      "https://www.spiralshealth.com/public/userdata/doctor/TWxvNEdUcmhoakVpUEpleml3NEwyZz09/1614522685407648_spirals46290_1615627444.png",
    Diseases_name: "WomanCare",
    Area: "Citylight",
    Hospital_name: "Shree Hospital",
    Hospital_full_address:
      "Shree Hospital 3rd floor Siddhi Shopping Center,Citylight Main Road",
  },

  {
    Doctor_id: "007",
    Doctor_name: "Dr. Jayesh Dubhuwala",
    DocImage:
      "https://media.licdn.com/dms/image/C5103AQGtchFP2Ui7Gg/profile-displayphoto-shrink_200_200/0/1516976699160?e=1684972800&v=beta&t=8mEr_yWVRcseEIe5C6VijEok3pE91xtvn1FiX_YZqfM",
    Diseases_name: "Skin Related",
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
            <option value="Fever">Fever</option>
            <option value="Malaria">Malaria</option>
            <option value="Cancer">Cancer</option>
            <option value="Food Poisoning">Food Poisoning</option>
            <option value="Back-Pain">Back-Pain</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Typhoid">Typhoid</option>
            <option value="Delivery">Delivery</option>
            <option value="Skin Related">Skin Related</option>
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
        <div className="doctorInfo">
          {getDoctorSuggestions().length === 0 ? (
            <p>No Doctor Found</p>
          ) : (
            <>
              <ul>
                {getDoctorSuggestions().map((doctor) => (
                  <ul className="onerow" key={doctor.Doctor_id} type="disc">
                    <img className="doctorsimage" src={doctor.DocImage} alt="Doctor" />
                    <p className="docText">
                      Doctor Name{" "}
                      <span className="docSpec">: {doctor.Doctor_name}</span>{" "}
                    </p>
                    <p className="docText">
                      Treatment Specialist{" "}
                      <span className="docSpec">
                        : {doctor.Diseases_name} Specialist
                      </span>{" "}
                    </p>
                    <p className="docText">
                      Full Address{" "}
                      <span className="docSpec">
                        : {doctor.Hospital_full_address}
                      </span>
                    </p>
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
