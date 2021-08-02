import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/header/Header';
import MainContent from './componets/MainWall/MainCont';
import Nav from './componets/navSideBAr/NavBar';




const App = (props)=>{

  

  return (
    <BrowserRouter>
    <div className="app-wrapper">
     <Header/>
     <Nav/>
     <div className="mainZone">
     {/* <MainContent/> */}
     <Route path='/dialogs' render={()=><Dialogs dialogData={props.appState.dialogData} messageData={ props.appState.messageData}/>}/>
     <Route path='/profile' component={()=><MainContent postText={props.appState.postText}/>} />
     
     </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
