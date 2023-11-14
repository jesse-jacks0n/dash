import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {auth} from "../firebase";
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading
    const onLogin = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true on login
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home");
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            })
            .finally(() => {
                setLoading(false); // Reset loading state regardless of login success or failure
            });
    };


    function goToSignup() {
        navigate("/signup")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-80 mt-4 m-4 lg:w-96 sm:rounded-lg lg:rounded-xl">
                <h1 className="text-3xl mb-6 text-center">Welcome</h1>
                <form className="space-y-4">
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
                    <div className="flex justify-end">
                        <a href="#!" className="text-blue-500 text-sm">Forgot password?</a>

                    </div>
                    <div className={"flex justify-center"}>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={onLogin}
                                disabled={loading}
                        > {loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center ">
                    <p className="text-sm sm:text-base text-gray-600 ">Don't have an account?
                        <button onClick={goToSignup}
                                className="hover:text-blue-700 px-2 hover:bg-transparent hover:border-none text-blue-500">
                            Signup
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

};
export default LoginPage;
