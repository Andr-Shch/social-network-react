import React from 'react';
import Users from './Users';
import {connect} from "react-redux";
import {follow, setCurrentPage, setIsFetching, setUsers, setTotalUsersCount, unfollow} from "../../redux/users-reducer";
import preLoader from './../../assets/images/Gear.gif'
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
      this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                
            });
    }

    render() {
        return  <> 
        {this.props.isFetching? <img src={preLoader}/>:null}
         <Users totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChanged={this.onPageChanged}
         users ={this.props.users}
         follow ={this.props.follow}
         unfollow ={this.props.unfollow}/>
               </>
        }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}



export default connect(mapStateToProps,{
    follow,
    
    unfollow,

    setUsers,

    setCurrentPage,

    setTotalUsersCount,

    setIsFetching
    
})(UsersAPIComponent);