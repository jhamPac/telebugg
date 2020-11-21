import * as React from 'react'
import { Router } from '@reach/router'

import QView from './q/view'
import PView from './p/view'

export default function App() {
    return (
        <Router basepath="/app">
            <QView path="/q/view" />
            <PView path="/p/view" />
        </Router>
    )
}
