import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div class="contact_page">
      <br/><br/>
      <Header headerText="Contact Info" /><br/><br/>
      <h5>I am currently looking for new opportunities, so my inbox is always open.</h5><br/><br/>

      <p>
        <button class="email_button"><a href="mailto:jadenluo@gmail.com" class="email_info" >Say Hello</a></button><br/><br/>
        <h3><bold>OR</bold></h3>
        
        
      </p>
      </div>
    </Layout>
  )
}