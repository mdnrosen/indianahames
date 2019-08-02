import React from 'react'

class Name extends React.Component{
  constructor(){
    super()

    this.state = {
      title: '',
      location: '',
      date: '',
      images: [],
      captions: [],
      paragraphs: []
    }
  }

  render(){
    return(
      <main>
        <section className="blogArticle">
          <h1>{this.state.title}</h1>
          <h3>{this.state.location}</h3>
          <h6>{this.state.date}</h6>
        </section>
      </main>
    )
  }
}


export default Name
