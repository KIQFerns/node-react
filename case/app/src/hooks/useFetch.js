import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { dataLaunch, dataGrid } from '../redux/launch/action';

const useFetch = (url, action) => {
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
                switch (action) {
                    case 'dataLaunch':
                        dispatch(dataLaunch(response.data));
                        break;
                    case 'dataGrid':
                        dispatch(dataGrid(response.data.results));
                        break;
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return data;
};

export default useFetch;