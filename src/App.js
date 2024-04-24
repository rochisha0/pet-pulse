import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVet, setSelectedVet] = useState(null);
  const [petDetails, setPetDetails] = useState({ name: '', age: '', breed: '' });

  const handleVetSelection = (vet) => {
    setSelectedVet(vet);
  };

  const handlePetDetailsChange = (e) => {
    const { name, value } = e.target;
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProceedToPayment = () => {
    // Logic to proceed to payment
    console.log('Pet Details:', petDetails);
    console.log('Selected Vet:', selectedVet);
    // Implement payment logic here
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <h1>Welcome to PetPulse!</h1>;
      case 'online-consultation':
        return (
          <div className="page-content">
            <h2>Choose a Vet</h2>
            <ul className="vet-list">
              <li>
                <p>Vet A, Rating: 4.5, Specialization: Dogs</p>
                <button onClick={() => handleVetSelection({ name: 'Vet A', rating: 4.5, specialization: 'Dogs' })}>
                  Book Now
                </button>
              </li>
              <li>
              <p>Vet B, Rating: 4.8, Specialization: Cats</p>
                <button onClick={() => handleVetSelection({ name: 'Vet B', rating: 4.8, specialization: 'Cats' })}>
                  Book Now
                </button>
              </li>
              <li>
              <p>Vet C, Rating: 4.3, Specialization: Exotic Pets</p>
                <button onClick={() => handleVetSelection({ name: 'Vet C', rating: 4.3, specialization: 'Exotic Pets' })}>
                  Book Now
                </button>
              </li>
            </ul>
            {selectedVet && (
              <div>
                <h2>Selected Vet Details</h2>
                <p>Name: {selectedVet.name}</p>
                <p>Rating: {selectedVet.rating}/5</p>
                <p>Specialization: {selectedVet.specialization}</p>
                <h2>Pet Details</h2>
                <label>Name:</label>
                <input type="text" name="name" value={petDetails.name} onChange={handlePetDetailsChange} />
                <label>Age:</label>
                <input type="text" name="age" value={petDetails.age} onChange={handlePetDetailsChange} />
                <label>Breed:</label>
                <input type="text" name="breed" value={petDetails.breed} onChange={handlePetDetailsChange} />
                <button onClick={handleProceedToPayment}>Proceed to Payment</button>
              </div>
            )}
          </div>
        );
      case 'home-consultation':
        return <h2>Book a Home Consultation</h2>;
      case 'vaccine-tracker':
        return <h2>Vaccine Tracker</h2>;
      default:
        return <h1>Welcome to PetPulse!</h1>;
    }
  };
  

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => handlePageChange('home')}>Home</li>
          <li onClick={() => handlePageChange('online-consultation')}>Book Online Vet Consultation</li>
          <li onClick={() => handlePageChange('home-consultation')}>Book Home Consultation</li>
          <li onClick={() => handlePageChange('vaccine-tracker')}>Vaccine Tracker</li>
        </ul>
      </nav>
      <div className="main-content">{renderPageContent()}</div>
    </div>
  );
};

export default App;
