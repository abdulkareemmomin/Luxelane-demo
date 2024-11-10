import { useState } from 'react'
import { useEffect } from 'react';

import axios from 'axios'


function Comp() {
    const [message, setMessage] = useState('');   
    const [data, setData] = useState('');


    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then((response) => setMessage(`this is data from backend -> ${response.data}`))
            .catch((error) => setMessage('Error : ', error));
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/data')
            .then((response) => setData(`take this from backend -> ${response.data}`))
            .catch((error) => setData('Error : ', error));
    }, [])

    return (

        <>
            <h1 className="text-3xl font-bold mb-4">{message}</h1>
            <h1 className="text-3xl font-bold mb-4">{data}</h1>
        </>

    )
}

export default Comp
