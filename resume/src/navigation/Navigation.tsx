import React, { ReactElement } from 'react'
import Landing from '../pages/Landing';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


type Props = {}

export default function Navigation({ }: Props) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    )
}