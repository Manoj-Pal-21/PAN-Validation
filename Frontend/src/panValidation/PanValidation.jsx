import React, { useState } from 'react';
import axios from 'axios';

const PanValidation = () => {
    const [pan, setPan] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const validatePan = async () => {
        if (!pan) {
            setError({ message: 'PAN Number is required' });
            return;
        }

        try {
            console.log('Validating PAN:', pan); 
            const apiUrl = `${process.env.REACT_APP_PAN_VALIDATION_API_URL}/api/validate-pan`;
            console.log('API URL:', apiUrl); 

            const response = await axios.post(apiUrl, { pan });
            console.log('API Response:', response.data); 
            setResult(response.data);
            setError(null);
        } catch (err) {
            console.error('API Error:', err); 
            setError(err.response ? err.response.data : { message: 'Unknown error occurred' });
            setResult(null);
        }
    };

    return (
        <div className="container">
            <h1 className="title">PAN Validation</h1>
            <input
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                placeholder="Enter PAN Number"
                className="input-field"
            />
            <button onClick={validatePan} className="validate-button">
                Validate PAN
            </button>
            {result && (
                <div className="result">
                    <h2>Validation Result</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="error">
                    <h2>Error</h2>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PanValidation;
