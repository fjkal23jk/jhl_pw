import React from "react"
// import { Link } from "gatsby"
// import Container from "../components/container"
import styles from "./about-css-modules.module.css"
import Layout from "../components/layout"
import Header from "../components/header"
import { withPrefix } from 'gatsby'

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <a href="https://github.com/fjkal23jk"> <img src={props.avatar} className={styles.avatar} alt="" /></a>
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout>
      <Header headerText="About Me" />

      <User
        username="Jane Doe"
        avatar={withPrefix('/face.png')}
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Layout>
  )
}