
import * as authTypes from './actionTypes'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 const registerReq=()=>{
    return{
        type:authTypes.REGISTER_REQUEST
    }
}

 const registerFail=(error)=>{
    return{
        type:authTypes.REGISTER_FAILED,
        payload:error.message
    }
}

 const registerSuc=()=>{
    return{
        type:authTypes.REGISTER_SUCCESS,
    }
}


const removeError =() =>{
    return{
        type:authTypes.REMOVE_ERROR
    }
}

export const register=(userData)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(registerReq())
          const firebase=getFirebase();
          const firestore=getFirestore();
           firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
             const res=await firestore.collection('users').doc(data.user.uid).set({
                email:userData.email,
                resumeIds:[]
            })
            dispatch(registerSuc())
          }).catch((err)=>{ 
            dispatch(registerFail(err))
            setTimeout(()=>{
               dispatch(removeError())
            },5000)
          })
    }
}




const signInReq=()=>{
    return{
        type:authTypes.SIGN_IN_REQUEST
    }
}

 const signInFail=(error)=>{
    return{
        type:authTypes.SIGN_IN_FAILED,
        payload:error.message
    }
}

 const signInSuc=()=>{
    return{
        type:authTypes.SIGN_IN_SUCCESS,
    }
}


export const signIn=(userData)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signInReq())
        const firebase=getFirebase();
        try{
           const  res=await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
           dispatch(signInSuc());
        }catch(error){
           dispatch(signInFail(error))
           setTimeout(()=>{
            dispatch(removeError())
           },2000)
        }  
    }
}





const signoutSuc=() =>{
    return{
        type:authTypes.SIGN_OUT_SUCCESS
    }
}

const signoutreq = ()=>{
    return{
        type:authTypes.SIGN_OUT_REQUEST
    }
}

const signoutFail =(err)=>{
    return{
            type:authTypes.SIGN_OUT_FAILED,
            payload:err.message
    }
}

export const signout =()=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signoutreq())
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
               dispatch(signoutSuc)
            }).catch((err)=>{
                dispatch(signoutFail(err))
                setTimeout(()=>{
                    dispatch(removeError())
                },2000)
            })
    }
}