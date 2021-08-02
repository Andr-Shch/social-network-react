import React from 'react';
import { NavLink } from 'react-router-dom';
import diStyle from './SideItems.module.css';

const DialogItem = (props) => {
    return (
        <div className={diStyle.user}>
               <NavLink to={'/dialogs/'+props.id} activeClassName={diStyle.active}>{props.name}</NavLink>
      </div>
            
    )
}

const DialogItems = (props) => {
  


    
      let dialogElement =  props.dialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
     
    return (
            
            <div className={diStyle.nameList}>
            <input type="text" />
            {dialogElement}
               
            </div>
            
      
      
   )
}


export default DialogItems