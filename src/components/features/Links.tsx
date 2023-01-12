import React from 'react';
import Link from "next/link";

const Links = () => {
    return (
        <div>
            <Link href='/'>
                Home
            </Link>
            <Link href='/chat'>
                Chat
            </Link>
        </div>
    );
};

export default Links;