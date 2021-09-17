import axios from 'axios';

const API = 'http://localhost:3000';

export const getData = async () => {
    return await axios.get(`${API}/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


//Uso en tiempo real
export const getRealTime = async () => {
    return await axios.get(`${API}/analyzed/actual`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

//Días de menor uso y de no uso
export const getAVG = async () => {
    return await axios.get(`${API}/analyzed/avg`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};



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

export const setAnalyzedDate = async (date) => {
    return await axios.get(`${API}/analyzed/${date}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
