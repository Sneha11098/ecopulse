import React, { useState } from 'react';

function App() {
  const [ecoTip, setEcoTip] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example function that calls your backend API to get an eco tip
  async function fetchEcoTip() {
    setLoading(true);
    setError(null);
    try {
      // Example fetch call - update URL to your Firebase Function endpoint or local emulator URL
      const res = await fetch('/getEcoTip'); // REST endpoint, e.g., Firebase HTTPS callable function
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setEcoTip(data.tip);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div style={{padding: 20}}>
      <h1>EcoPulse - AI-powered Eco Tips</h1>
      <button onClick={fetchEcoTip} disabled={loading}>
        {loading ? 'Loading...' : 'Get Eco Tip'}
      </button>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {ecoTip && <p style={{marginTop: 20, fontWeight: 'bold'}}>{ecoTip}</p>}
    </div>
  );
}

export default App;

