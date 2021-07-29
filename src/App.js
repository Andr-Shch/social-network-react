import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/header/Header';
import MainContent from './componets/MainWall/MainCont';
import Nav from './componets/navSideBAr/NavBar';




const App = ()=>{
  return (
    <BrowserRouter>
    <div className="app-wrapper">
     <Header/>
     <Nav/>
     <div className="mainZone">
     {/* <MainContent/> */}
     <Route component = {Dialogs}/>
     <Route component={MainContent} />
     <Dialogs/>
     </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
