import React, { useState } from 'react';
import './suggest.scss';

import Avatar from '../../../icons/panda.png';
import ViewAllIcon from '../../../icons/view-all.png';

const Suggest = () => {
    const [friends, setFriends] = useState([
        { id: 1, name: 'Job Biden', avatarUrl: Avatar },
        { id: 2, name: 'Donal Trump', avatarUrl: Avatar },
        { id: 3, name: 'Tony Stack', avatarUrl: Avatar },
        { id: 4, name: 'Harry Kenz', avatarUrl: Avatar },
        { id: 5, name: 'Jonny Tri Nguyen', avatarUrl: Avatar },
    ]);

    const handleAddFriend = (friendId) => {
        console.log(`Added friend with id: ${friendId}`);
    };

    const handleNext = () => {
        console.log('Load more friends or go to the next page');
    };

    return (
        <div className='suggest-container'>
            <div className="suggest-title">
                <h1>Suggestion</h1>
                <ul className='light'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='suggestion'>
                <ul className='suggestion-ul'>
                    {friends.map(friend => (
                        <li key={friend.id} className='suggest-friend'>
                            <img src={friend.avatarUrl} alt={friend.name} />
                            <span>{friend.name}</span>
                            <button onClick={() => handleAddFriend(friend.id)}>Add Friend</button>
                        </li>
                    ))}
                    <li className="view-all">
                        <img src={ViewAllIcon} alt='view-all-suggest' onClick={handleNext} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Suggest;
