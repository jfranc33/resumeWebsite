import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Landing from '../pages/Landing';

export default function Navigation(): ReactElement {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Landing />} />
            </Routes>
        </Router>
    )
}