import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      {/* 1. Place the SEO component here to manage the head tags */}
      <Seo title="About Me" />
      
      <h1>About</h1>
      <p>Nice to meet you!</p>
      <Link to="/">Home</Link>
    </Layout> 
  )
}

// 2. Export the component function, not a single tag
export default AboutPage;