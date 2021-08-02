import React from 'react';
import DialogItems from './DIalogItems/DialogItems';

import diStyle from './DialogsStyle.module.css';
import Messages from './Messages/messages';




const Dialogs = (props) => {
  
    // const messageData = [
    //     {id:1, message:'Did you see Lady in red?' },
    //     {id:2, message:'Be carefull, she is an agent' },
    //     {id:3, message:'But she is &#128293;' },
      
    // ]
    // const dialogData = [
    //     {id:1, name:'Thomas Anderson' },
    //     {id:2, name:'Jhon Smith' },
    //     {id:3, name:'Morpheus' },
    //     {id:4, name:'The Merovingian' }
    // ]
   
     
    
    return (
       <div className={diStyle.general}>
           
              <DialogItems dialogData={props.dialogData}/>

              <Messages messageData={props.messageData}/>
       </div> /*End of .general */
   )
}


export default Dialogs