import React, {FC} from 'react';

interface IProps {
        message: string,
}
const IndexPage: FC<IProps> = ({message}) => {

    return (
        <h1>{message}</h1>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/hello`)
    const { message } = await res.json()
    return { props: { message } }
}

export default IndexPage;
