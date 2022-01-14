import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { ramblings, postItem } from './blog.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Ramblings">
      <p>Ramble ramble ramble.</p>
      <ul className={ramblings}>
        {
          data.allFile.nodes.map((node) => (
            <li key={node.name} className={postItem}>
                {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
          nodes {
            name
          }
        }
    }
`

export default BlogPage

