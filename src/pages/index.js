import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Im a little piggy. </h1>
	  <Link to="/about">About</Link>
      <p>Getting some Gatsby practice in.</p>
    </main>
  )
}

export default IndexPage

