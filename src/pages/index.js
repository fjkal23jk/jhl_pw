import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  // return <div>Jinghong Luo!</div>
  // return <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div> 
  return(
    <Layout>
      <p style={{fontSize: '12px'}}>Hi, my name is</p>
      <Header headerText="Jinghong Luo." />
      <Header headerText="I like to build softwares!" />
      <br/>
      

      <p style={{fontSize: '15px'}}>I'm a Junior student from UCSD, pursuing a B.S. Computer Science Degree,<br/><br/>
         specializing in website and software development.
      </p>


      <br/>
      <img src="https://source.unsplash.com/random/400x200" alt=""/>
    </Layout>

  );
}
