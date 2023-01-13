import Link from 'next/link';
import React from 'react';

function Links() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/chat">Chat</Link>
        </div>
    );
}

export default Links;
