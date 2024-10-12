import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.photo} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>{doctor.experience} years of experience</p>
      <button className="appointment-button">Book Appointment</button>
    </div>
  );
};

export default DoctorCard;