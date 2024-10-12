// pages/index.js
import React from 'react';
import DoctorCard from '../components/DoctorCard.js';
import doctorsData from '../data/doctorsData.js';

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>Health Map</h1>
        <input type="text" placeholder="Search doctors..." className="search-bar" />
        <button>Log In</button>
      </header>
      <section className="filters">
        <h2>Filters</h2>
        <ul>
          <li><input type="checkbox" id="therapist" /> Therapist</li>
          <li><input type="checkbox" id="pediatrician" /> Pediatrician</li>
          <li><input type="checkbox" id="cardiologist" /> Cardiologist</li>

        </ul>
      </section>
      <section className="doctors-grid">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </section>
    </div>
  );
};

export default Home;
