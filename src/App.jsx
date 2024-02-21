import HomePage from './Pages/Home/App';
import EDMI from './Pages/EDMI/EDMI';

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edmi" element={<EDMI />} />
            </Routes>
        </Router>
    )
}