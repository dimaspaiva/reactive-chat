import React from "react"
import { Link } from "react-router-dom"

import './style.css'

const PageNotFound = () => {
  return (
    <div data-testid="page-not-found" className="container">
      <div className="not-found_container">
        <h2 className="not-found_title">Page not found</h2>
        <h3>get back to home page <Link to={'/'} className="not-found_link">here</Link></h3>
      </div>
    </div>
  )
}

export default PageNotFound
