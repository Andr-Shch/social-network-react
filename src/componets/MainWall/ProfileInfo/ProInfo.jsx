import React from 'react';
import st from './ProfInfoStyle.module.css'


const ProfInfo = () => {
    return (
        <div className={st.profileTop}>
          <div className={st.ava}>
             <img src="https://sun9-43.userapi.com/impf/c629326/v629326935/17db8/iQfUULdfndc.jpg?size=960x720&quality=96&sign=0f5b06926f67387bcbaf7ebd6a328a61&type=album" alt="profile"  />
          </div>
          <div className={st.descrip}></div>
       </div>
    )
}

export default ProfInfo