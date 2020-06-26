import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div style={{ margin: `2rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
      <header style={{ marginBottom: `2rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline`, color: `black` }}>Personal Site</h1>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <a 
            rel="noopener noreferrer"
            href={withPrefix('/resume.pdf')}
            type="application/pdf" 
            target="_blank">Resume
          </a>
        </ul>
      </header>
      {children}
    </div>
  )
}