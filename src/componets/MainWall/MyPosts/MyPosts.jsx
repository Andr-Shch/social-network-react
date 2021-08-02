import React from 'react';
import WallPost from './post/WallPost';
import './PostsStyle.css'

const MyPosts = (props) => {
      

 
    let createPost = props.postText.map( text1 => <WallPost id ={text1.id} text={text1.text}/>)
    return (
        
            <div className="posts">
            <div className="Input post">
                <textarea className='newText' > </textarea>
                <button>Add Post</button>
            </div>
             {/* <WallPost /> */}
             {createPost}
            </div>
        

    )
}

export default MyPosts