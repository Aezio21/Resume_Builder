import * as authTypes from '../actionTypes'
import initialState from './initialState.json'

const authReducer=(state=initialState.auth,action)=>{
    switch(action.type){
        case authTypes.REGISTER_REQUEST:
            return{
                ...state,
                loading:true
            }
        
        case authTypes.REGISTER_SUCCESS:
            return{
                ...state,
                loading:false
            }
        
        case authTypes.REGISTER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        
        case authTypes.SIGN_IN_REQUEST:
            return{
                ...state,
                loading:true
            }
        
        case authTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                loading:false
            }
        
        case authTypes.SIGN_IN_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        case authTypes.REMOVE_ERROR:
            return{
                ...state,
                error:""
            }

        case authTypes.SIGN_OUT_FAILED:
            return{
                ...state,
                error:action.payload
            }
        
        default:
            return{
                state
            }
    }
}

export default authReducer