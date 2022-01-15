import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import { postItem } from './blog.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Ramblings">
      <p>Ramble ramble ramble.</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className={postItem}>
            <h2>{node.frontmatter.title}</h2>
            <p>Rambled: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

// query markdown files
export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
        id
        body
      }
    }
  }
`

// allFile(filter: {sourceInstanceName: {eq: "blog"}}) {

export default BlogPage

