import React from 'react';
import WallPost from './post/WallPost';
import './PostsStyle.css'

const MyPosts = () => {
    return (
        
            <div className="posts">
            <div className="Input post">
                <textarea className='newText' > </textarea>
                <button>Add Post</button>
            </div>
             <WallPost message = 'Hi, I use props for this text'/>
            </div>
        

    )
}

export default MyPosts