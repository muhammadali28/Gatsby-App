import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"


const IndexPage = () => (
  <Layout>
    <div >
      <h1>Hi people</h1>
      <p>Welcome to my new Gatsby site.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p />
    </div>
  </Layout >
)

export default IndexPage
