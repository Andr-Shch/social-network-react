import React from 'react';
import './MainContent.css'
import MyPosts from './MyPosts/MyPosts';
import ProfInfo from './ProfileInfo/ProInfo';

const MainContent = (props) => {

    return (
        <div className='mainContent'>
            <ProfInfo/>
            <MyPosts  wallInfo={props.wallInfo} 
                      dispatch={props.dispatch}/>
            </div>
        
     
    )
}

export default MainContent