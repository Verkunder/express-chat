import Image from 'next/image';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import * as io from 'socket.io-client';

import cn from './Style.module.sass';

const socket = io.connect('http://localhost:5000/');

function Index() {
    const { search } = useLocation();
    const [params, setParams] = useState({
        room: '',
        name: '',
    });
    const [messages, setMessages] = useState([
        {
            message: '',
            user: {
                name: '',
            },
        },
    ]);
    const [userMessage, setUserMessage] = useState('');

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search));
        setParams({ name: searchParams.name, room: searchParams.room });
        socket.emit('join', searchParams);
    }, [search]);

    useEffect(() => {
        socket.on(
            'message',
            ({
                data,
            }: {
                data: {
                    message: '';
                    user: {
                        name: '';
                    };
                };
            }) => {
                setMessages(_messages => [..._messages, data]);
            }
        );
    }, []);

    const leftRoom = () => {
        setUserMessage('1');
        console.log(userMessage);
    };

    const handleChange = () => {
        setUserMessage('1');
        console.log(userMessage);
    };

    return (
        <div className={cn.wrap}>
            <div className={cn.header}>
                <div className={cn.title}> {params.room} </div>
                <div className={cn.users}>0 users in this room</div>
                <button className={cn.left} type="button" onClick={leftRoom}>
                    Left the room
                </button>
            </div>
            <div className={cn.messages}>
                {messages.map(({ message }, key) => (
                    <span key={key}>{message}</span>
                ))}
            </div>
            <form className={cn.form}>
                <div className={cn.input}>
                    <input
                        value={userMessage}
                        name="message"
                        type="text"
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="What do you want to say?"
                        required
                    />
                </div>
                <div className={cn.emojies}>
                    <Image src="/images/svg/emoji.svg" alt="" width={100} height={100} />
                </div>
            </form>
        </div>
    );
}

export default Index;
