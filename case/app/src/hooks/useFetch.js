import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { dataLaunch } from '../redux/launch/action';
const useFetch = (url) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {}
    };
    useEffect(() => {
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setData(response.data)
                dispatch(dataLaunch(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return data;
};

export default useFetch;



//
// dispatch(dataLaunch([
//     data
// ]));