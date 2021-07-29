import React from 'react';
import './WallPostStyle.css'

const WallPost = (props) => {
    return (
        
      
            <div className="post">
           {props.message}
            </div>
      

    )
}

export default WallPost