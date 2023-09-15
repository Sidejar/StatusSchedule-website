import * as React from "react"
import Layout from "../components/Layout/layout"
import Home from "../components/Homepage/index"
import Seo from "../components/Layout/seo"
// import * as styles from "../components/Layout/index.module.css"

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
