import React from 'react';
import Reel from './reels';
import Suggest from './suggest';
import Artical from './article';
import './body.scss';

const Body = () => {
    return (
        <div className='body-container'>
            <Reel />
            <Suggest />
            <Artical />
        </div>
    );
}

export default Body;