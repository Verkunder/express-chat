import Link from 'next/link';
import React, { useState } from 'react';

import cn from './Style.module.sass';

const fields = {
    username: 'username',
    room: 'room',
};

interface IInputChange {
    target: HTMLInputElement;
}

function Index() {
    const { username, room } = fields;
    const [values, setValues] = useState({
        [username]: '',
        [room]: '',
    });
    const handleChange = ({ target: { value, name } }: IInputChange) => {
        setValues({ ...values, [name]: value });
    };

    const handleClick = (e: MouseEvent) => {
        const isDisabled = Object.values(values).some(value => !value);
        if (isDisabled) e.preventDefault();
    };

    return (
        <div className={cn.wrap}>
            <div className={cn.container}>
                <h1 className={cn.heading}>Join</h1>
                <form className={cn.form}>
                    <div className={cn.group}>
                        <input
                            className={cn.input}
                            value={values[username]}
                            name="username"
                            type="text"
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className={cn.group}>
                        <input
                            className={cn.input}
                            value={values[room]}
                            name="room"
                            type="text"
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Room"
                            required
                        />
                    </div>
                    <Link
                        className={cn.group}
                        onClick={handleClick}
                        href={`/chat?name=${values[username]}&room=${values[room]}`}
                    >
                        <button type="submit" className={cn.button}>
                            Sign In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Index;
