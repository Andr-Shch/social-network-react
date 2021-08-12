import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileConainer extends React.Component {
     
 componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
               
            })
 }

 render(){  
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    )
 } 
}

const mapStateProps= (state) => ({profile: state.profilePage.profile})

export default connect(mapStateProps,{setUserProfile})(ProfileConainer);