import React, { useState } from 'react';
import './cta.css';

const CTA = () => {
   const [showForm, setShowForm] = useState(false);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [number, setNumber] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!name || !email || !number) {
         setError('Please fill in all fields');
         return;
      }

      console.log('Отправлено:', { name, email, number });

      setName('');
      setEmail('');
      setNumber('');
      setError('');

      setShowForm(false);
   };

   return (
      <div className="gpt3__cta">
         <div className="gpt3__cta-content">
            <p>Request Early Access to Get Started</p>
            <h3>Register Today & start exploring the endless possibilities.</h3>
         </div>
         {showForm ? (
            <form onSubmit={handleSubmit}>
               <div className="gpt3__cta-form">
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Name"
                  />
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                  />
                  <input
                     type="tel"
                     value={number}
                     onChange={(e) => setNumber(e.target.value)}
                     placeholder="Number"
                  />
                  {error && <p className="gpt3__cta-error">{error}</p>}
               </div>
               <div className="gpt3__cta-btn">
                  <button type="submit">Get Started</button>
               </div>
            </form>
         ) : (
            <div className="gpt3__cta-btn">
               <button type="button" onClick={() => setShowForm(true)}>
                  Get Started
               </button>
            </div>
         )}
      </div>
   );
};

export default CTA;