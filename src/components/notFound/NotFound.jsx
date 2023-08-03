import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.scss"

const NotFound = () => {
  return (
    <div className='notFound'>
        <h1>404</h1>
        <p>
        Sorry, an error has occurred. Requested page not found!
        </p>
        <Link to={"/"}>Back to Home</Link>
    </div>
  )
}

export default NotFound