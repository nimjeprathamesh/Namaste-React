import React from 'react';

export default function User(props) {
    return (
        <div className='p-[10px] border border-solid mb-[10px]'>
            <h2>Name: {props.name}</h2>
            <h3>Location: Nagpur</h3>
            <h4>Contact: @prathameshnimje1</h4>
        </div>
    );
}