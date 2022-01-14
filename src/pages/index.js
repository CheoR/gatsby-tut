import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout.js'

const IndexPage = () => {
  return (
	<Layout pageTitle="Home Page">
	  <p>Home Page p tag child</p>
      <StaticImage
        alt="Github developer CheoR"
        src="https://avatars.githubusercontent.com/u/5026476?s=400&u=357fc7b5f06a2b344b42d7bdf3e33b7ea1530e0e&v=4"
      />
      <br />
      <StaticImage
        alt="Paddington with tounge out"
        src="../images/paddington.png"
      />
	</Layout>
  )
}

export default IndexPage

