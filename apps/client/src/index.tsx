import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

const appEntryPoint = document.getElementById('app')
const root = createRoot(appEntryPoint)
root.render(<App />)
