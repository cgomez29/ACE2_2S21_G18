import axios from 'axios';

const API = 'http://localhost:4000';

export const getAnalyzed = async () => {
    return await axios.get(`${API}/analyzed/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getAnalyzedUso = async () => {
    return await axios.get(`${API}/analyzed/uso`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const setAnalyzedDate = (date) => {
    return await axios.get(`${API}/analyzed/${date}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
