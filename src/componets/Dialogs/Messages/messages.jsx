import React from 'react';

import diStyle from './messageStyles.module.css';


const Message = (props)=>{
    return(
        <div className={diStyle.message}>{props.message}</div>
    )
}

const Messages = (props) => {
  
   
  
    
      let finalMessage = props.messageData.map(messageInfo=> <Message   message={messageInfo.message}/>)
    return (
     
           
            
          <div className={diStyle.messages}>
              
               {finalMessage}

          <div className="textSend">
           
              <textarea placeholder="Type message here" cols="50" rows="5" ></textarea><br/>
              <button>Send</button>
              </div>
         
          </div>
     
   )
}


export default Messages