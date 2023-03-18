import React from 'react'
import { createRoot } from 'react-dom/client'

const appEntryPoint = document.getElementById('app')
const root = createRoot(appEntryPoint)
root.render(<h1>Hello world!</h1>)
