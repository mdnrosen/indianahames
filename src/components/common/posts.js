import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'



import Footer from './footer.js'

class Posts extends React.Component{
  constructor(){
    super()

    this.state = {
      blogs: [
        { title: 'There is no groundhog day when you travel', location: 'Brazil', date: '5th October 2012', url: 'groundhogday', background: 'groundhogBG'},
        { title: 'Patterns Emerge', location: 'Brazil', date: '12th October 2012', url: 'patterns', background: 'patternsBG'},
        { title: '72 Limes & blackouts', location: 'Brazil', date: '21th October 2012', url: 'blackouts', background: 'blackoutsBG'},
        { title: 'Falling...', location: 'Brazil', date: '25th October 2012', url: 'falling', background: 'fallingBG'},
        { title: 'Bonito, and it is.', location: 'Brazil', date: '30th October 2012', url: 'bonito', background: 'bonitoBG'},
        { title: 'Only me...', location: 'Bolivia', date: '10th November 2012', url: 'onlyme', background: 'onlymeBG'},
        { title: 'Highs & Lows', location: 'Bolivia', date: '13th November 2012', url: 'highsandlows', background: 'highsandlowsBG'},
        { title: 'Kilimanjaro', location: 'Tanzania', date: '15th October 2015', url: 'kili', background: 'kilimanjaroBG'}
      ]

    }

      this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
      const filterLocation = e.target.value
      this.state.blogs.forEach(blog => {
        if (filterLocation=== blog.location) {
          console.log('a match')
          this.setState({ blog })
        }
      })
    }
  
  render(){
    console.log(this.state)
    return(
      <div>
        <section className="header">
          <div className="headerContainer">
            <h1>INDIANA HAMES</h1>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="brazil">Brazil</option> 
              <option value="bolivia">Bolivia</option> 
              <option value="tanzania">Tanzania</option>              
            </select> 
          </div>
        </section>
       
       
        <section className="mainPage">
          {this.state.blogs.map((blog, i) =>
            <Link key={i} to={`/${blog.url}`}>
              <div className={`${blog.background} blogCard`}>
                <h2 >{blog.title}</h2>
                <h3 >{blog.location}</h3>
                <h5 >{blog.date}</h5>
              </div>
            </Link>
          )}
        </section>


        <Footer />
      </div>
    )
  }
}



export default Posts
