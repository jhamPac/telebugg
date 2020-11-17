import * as React from 'react'
import { Router } from '@reach/router'

import QView from './q/view'

export default function App() {
    return (
        <Router basepath="/app">
            <QView path="/q/view" />
        </Router>
    )
}
