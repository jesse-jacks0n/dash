import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";

export default function SignupPage() {

    const navigate = useNavigate();

    function goToLogin() {
        navigate("/")
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage)
                // ..
            });


    }
    return (
        <div className="login-container">
            <div className="form-container">
                <h1>Signup</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type={"password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />

                <button onClick={onSubmit} >
                    Sign Up
                </button>



                <div className="signup">
                    <span>Already have an account?</span>
                    <button onClick={goToLogin}>
                        <p>Log In</p>
                    </button>
                </div>
            </div>
        </div>
    );

}