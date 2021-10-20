import React from "react";
import firebase from "../firebase/clientApp";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],

}

function SignInScreen(){
    return(
        <div
        style={{
            maxWidth: "320px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
        }}>

            <h1>Pineapple Login</h1>
            <p>Please Sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

        </div>
    )
}
export default SignInScreen;