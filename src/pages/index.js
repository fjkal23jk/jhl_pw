import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  // return <div>Jinghong Luo!</div>
  // return <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div> 
  return(
    <div style={{color: 'purple'}}>
       <Link to="/contact/">Contact</Link>
      <Header headerText="Jinghong Luo" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt=""/>
    </div>

  );
}
