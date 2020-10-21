import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';


const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email };
            setLoggedInUser(signInUser);
            storeAuthToken();
            history.replace(from);

        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);

        });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login with Gmail</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default LogIn;