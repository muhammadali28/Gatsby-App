import React from 'react';

export default function store({ pageContext }) {
    return <div>
        <h1>{pageContext.Heading}</h1>
        <br />
        <h6>{pageContext.Desc}</h6>
    </div>;
}
