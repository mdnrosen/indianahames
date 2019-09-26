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
      ],
      search: ''

    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ search: e.target.value}) 
  }

  filteredPosts() {
    const regexp = new RegExp(this.state.search, 'i')
    return this.state.blogs.filter(blog => regexp.test(blog.location))
  }

  render(){
    console.log(this.filteredPosts())
    return(
      <div>
        <section className="header">
          <div className="headerContainer">
            <h1>INDIANA HAMES</h1>
            <div className="select">
              <select defaultValue="" onChange={this.handleChange}>
                <option value="">-</option> 
                <option value="Brazil">Brazil</option> 
                <option value="Bolivia">Bolivia</option> 
                <option value="Tanzania">Tanzania</option>              
              </select> 
            </div>
          </div>
        </section>
       
       
        <section className="mainPage">
          {this.filteredPosts().map((blog, i) =>
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
