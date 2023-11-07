import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";

export default function SignupPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading
    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage)
            })
            .finally(() => {
                setLoading(false); // Reset loading state regardless of login success or failure
            });
    }

    function goToLogin() {
        navigate("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-80 lg:w-96 sm:rounded-lg lg:rounded-xl">
                <h1 className="text-3xl mb-6 text-center">Signup</h1>
                <form  className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={onSubmit}
                                disabled={loading}
                        > {loading ? 'Loading...' : 'Signup'}
                        </button>
                    </div>

                </form>



                <div className="mt-6 text-center ">
                    <p className="text-xs sm:text-base ">Already have an account?
                        <button onClick={goToLogin}
                                className="hover:text-blue-700 px-2 hover:bg-transparent hover:border-none text-blue-500">
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

}