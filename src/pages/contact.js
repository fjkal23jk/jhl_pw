import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact Info" />
      <h5>I'd love to talk! Email me at the address below</h5>
      <p>
        <a href="mailto:jadenluo@gmail.com">jadenluo@gmail.com</a>
      </p>
    </Layout>
  )
}