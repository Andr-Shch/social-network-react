import React from 'react';
import './WallPostStyle.css'



const WallPost = (props) => {
    return (
        
      
            <div className="post">
           {props.text}
            </div>
      

    )
}

export default WallPost