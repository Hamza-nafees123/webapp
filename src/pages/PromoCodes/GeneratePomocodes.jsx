import React, { useState } from 'react';

const PromoCodeGenerator = () => {
  const [promoCodes, setPromoCodes] = useState([]);
  const [newPromoCode, setNewPromoCode] = useState('');

  // Function to handle adding a promo code to the list
  const handleAddPromoCode = () => {
    if (newPromoCode.trim() === '') {
      alert('Please enter a promo code.');
      return;
    }
    const newCodeObj = { code: newPromoCode.toUpperCase(), active: true };
    setPromoCodes([...promoCodes, newCodeObj]);
    setNewPromoCode('');
  };

  // Function to handle deleting a promo code from the list
  const handleDeletePromoCode = (code) => {
    const updatedPromoCodes = promoCodes.filter((item) => item.code !== code);
    setPromoCodes(updatedPromoCodes);
  };

  // Function to toggle the active status of a promo code
  const toggleActiveStatus = (code) => {
    const updatedPromoCodes = promoCodes.map((item) => {
      if (item.code === code) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setPromoCodes(updatedPromoCodes);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '50px' }}>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
        className='inputfeild-userDetails'
          type="text"
          value={newPromoCode}
          onChange={(e) => setNewPromoCode(e.target.value)}
          placeholder="Enter promo code"
          style={{ flex: '1', padding: '8px', marginRight: '10px', fontSize: '14px' }}
        />
        <button className='button-all-css' onClick={handleAddPromoCode} style={{ padding: '8px 20px', fontSize: '14px' }}>
          Add
        </button>
      </div>
      <div>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>List of Promo Codes</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {promoCodes.map((promoCode, index) => (
            <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{promoCode.code}</span>
                  - {promoCode.active ? 'Active' : 'Inactive'}
                </div>
                <div>
                  <button
                  className='button-all-css'
                    onClick={() => toggleActiveStatus(promoCode.code)}
                    style={{ marginRight: '10px', padding: '6px 12px', fontSize: '12px' }}
                  >
                    Toggle Active
                  </button>
                  <button
                  
                  className='button-all-css'
                    onClick={() => handleDeletePromoCode(promoCode.code)}
                    style={{ padding: '6px 12px', fontSize: '12px', color: 'white',background:'#ee2d2f' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PromoCodeGenerator;
