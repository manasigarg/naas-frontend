import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Page1} from "./Pages/Page1";
import {Page2} from "./Pages/Page2";
import {Page3} from "./Pages/Page3";
import {Page4} from "./Pages/Page4";
import {Page5} from "./Pages/Page5";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
