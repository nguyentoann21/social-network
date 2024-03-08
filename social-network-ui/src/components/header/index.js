import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.scss';
import PandaIcon from '../../icons/panda.png'; 
import SearchIcon from '../../icons/search.png'; 
import HomeIcon from '../../icons/home.png'; 
import MusicIcon from '../../icons/music.png'; 
import NotifyIcon from '../../icons/notify.png'; 
import ChatIcon from '../../icons/chat.png'; 
import PostIcon from '../../icons/post.png'; 
import ProfileIcon from '../../icons/profile.png';
import FriendsIcon from '../../icons/friends.png'; 
import LanguageIcon from '../../icons/earth.png'; 

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path === "/home" || path === "/") {
      setActive('Home');
    } else if (path.startsWith("/music")) {
      setActive('Music');
    } else if (path.startsWith("/friends")) {
      setActive('Friends');
    } else if (path.startsWith("/chat")) {
      setActive('Chat');
    } else if (path.startsWith("/post")) {
      setActive('Post');
    } else if (path.startsWith("/notify")) {
      setActive('Notification');
    } else if (path.startsWith("/profile")) {
      setActive('Profile');
    } else if (path.startsWith("/language")) {
      setActive('Language');
    }
  }, [location.pathname]);

  return (
    <header className="header">

      <div className="header-logo">
        <img src={PandaIcon} alt="Panda" /><span>Panda</span>
      </div>
      

      <div className="header-search">
        <input type="text" placeholder="Search on Panda" autoComplete='on' id='search' name='search' />
        <img src={SearchIcon} alt="Search" />
      </div>
      

      <nav className="header-nav">
        <ul>
          <li className={active === 'Home' ? 'active':''}>
            <Link to="/home">
              <img src={HomeIcon} alt="Home"/>
            </Link>Home
          </li>
          <li className={active === 'Music' ? 'active':''}>
            <Link to="/music">
              <img src={MusicIcon} alt="Music"/>
            </Link>Music
          </li>
          <li className={active === 'Friends' ? 'active':''}>
            <Link to="/friends">
              <img src={FriendsIcon} alt="Friends"/>
            </Link>Friends
          </li>
          <li className={active === 'Chat' ? 'active':''}>
            <Link to="/chat">
              <img src={ChatIcon} alt="Chat"/>
            </Link>Chat
          </li>
          <li className={active === 'Post' ? 'active':''}>
            <Link to="/post">
              <img src={PostIcon} alt="Post"/>
            </Link>Post
          </li>
          <li className={active === 'Notification' ? 'active':''}>
            <Link to="/notify">
              <img src={NotifyIcon} alt="Notification"/>
            </Link>Notify
          </li>
          <li className={active === 'Profile' ? 'active':''}>
            <Link to="/profile">
              <img src={ProfileIcon} alt="Profile"/>
            </Link>Profile
          </li>
          <li className={active === 'Language' ? 'active':''}>
            <Link to="/language">
              <img src={LanguageIcon} alt="Language"/>
            </Link>Lang
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
