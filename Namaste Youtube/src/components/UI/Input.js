import React from 'react';

export default function Input({className, ...prop}) {
    return (
        <input className={className} {...prop} required />
    );
}