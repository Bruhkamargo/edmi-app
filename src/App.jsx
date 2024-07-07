
import EDMI from './Pages/EDMI/EDMI';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<EDMI />} />
                {/* <Route path="/edmi" element={<EDMI />} /> */}
            </Routes>
        </Router>
    )
}