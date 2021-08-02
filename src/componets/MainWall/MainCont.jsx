import React from 'react';
import './MainContent.css'
import MyPosts from './MyPosts/MyPosts';
import ProfInfo from './ProfileInfo/ProInfo';

const MainContent = (props) => {

    return (
        <div className='mainContent'>
            <ProfInfo/>
            <MyPosts  postText={props.postText}/>
            </div>
        
     
    )
}

export default MainContent