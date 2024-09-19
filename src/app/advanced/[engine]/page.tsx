import React from 'react';

export default function Page({ params }: { params: { engine: string } }) {
    return <h1>Hello, : { params.engine }</h1>
}