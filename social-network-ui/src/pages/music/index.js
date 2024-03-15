import React from 'react';
import './music.scss';
import ListSong from './lists';
import Song from './music-main';

const Music = () => {
    return (
        <>
            <ListSong />
            <Song />
        </>
    );
}

export default Music;