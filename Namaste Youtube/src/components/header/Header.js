import React from 'react';
import MenuHeader from './MenuHeader.js';
import ProfileHeader from './ProfileHeader.js';
import SearchbarHeader from './SearchbarHeader.js';

export default function Header() {
    return (
        <div className='grid grid-flow-col p-2 shadow-lg'>
            <MenuHeader />
            <SearchbarHeader />
            <ProfileHeader />
        </div>
    );
}