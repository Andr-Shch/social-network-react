import React from 'react';
import { addPostActionCreator, updatePostAcCre } from '../../../redux/state';
import WallPost from './post/WallPost';
import './PostsStyle.css'

const MyPosts = (props) => {
      
    let createPost = props.wallInfo.postText.map( text1 => <WallPost id ={text1.id} text={text1.text}/>)
    let newPostElement = React.createRef();
  
    const addPost = () => {
      props.dispatch(addPostActionCreator())
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updatePostAcCre(text))
    }

     return (
            <div className="posts">
            <div className="Input post">
                <input
                     type='text'
                     className='newText' 
                     ref={newPostElement} 
                     value={props.wallInfo.inputText}
                     onChange={onPostChange}
                    /> 
                <button onClick = {addPost}>Add Post</button>
            </div>
             {createPost}
            </div>
        

    )
}

export default MyPosts