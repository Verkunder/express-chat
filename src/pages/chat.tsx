import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-use';
import io from "socket.io-client";
import {string} from "prop-types";
const socket = io.connect('http://localhost:5000/')
const Chat = () => {
    const { search } = useLocation();
    const [params, setParams] = useState({});

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search))

        setParams(searchParams)
        socket.emit('join', searchParams)
    }, [search])

    useEffect(() => {
        socket.on('message', ({data}) => {
            console.log(data)
        })
    }, [])

    return (
        <div>
          <h1>Hello chat!</h1>
        </div>
    );
};



export default Chat;