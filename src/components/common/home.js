import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component{
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return(
      <div className="homeWrapper">
        <div className="homeHeadingsWrapper">
          <h1 className="mainTitle"> indiana hames </h1>
          <h4 className="bigAdventure"> a big adventure... </h4>
          <div className="homeLinksWrapper">
            <p><Link to ="/posts">explore</Link></p>
          </div>
        </div>

      </div>
    )
  }

}


export default Home
