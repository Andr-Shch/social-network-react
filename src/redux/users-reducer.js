const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_SOUNT = 'SET_TOTAL_COUNT'

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 20,
    curentPage:1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...action.users ]}
        }
        case SET_CURENT_PAGE:{
            return{...state, curentPage:action.curentPage}
        }
        case SET_TOTAL_SOUNT:{
            return{...state, totalUsersCount:action.count}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurentPageAC = (curentPage) =>({type:SET_CURENT_PAGE, curentPage:curentPage})
export const setTotalUserCountAC = (count)=>({type:SET_TOTAL_SOUNT, totalUsersCount:count})

export default usersReducer;