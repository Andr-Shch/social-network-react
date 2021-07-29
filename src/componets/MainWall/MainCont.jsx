import React from 'react';
import './MainContent.css'
import MyPosts from './MyPosts/MyPosts';

const MainContent = () => {
    return (
        <div className='mainContent'>
            <div className='wallImg'>
                <img src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/welcome-to-react.png" alt="react-app" />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
            </div>
        

    )
}

export default MainContent