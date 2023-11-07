import './App.css';
import './tailwind.css';
import LoginPage from "./authentication/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import SignupPage from "./authentication/SignupPage";



function App() {
    return(

    <div className="App">
        <div className="App">
            <Router>

                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/signup" element={<SignupPage />} />
                    <Route exact path="/home" element={<Home />} />

                </Routes>
            </Router>
        </div>
    </div>
    );

}

export default App;
