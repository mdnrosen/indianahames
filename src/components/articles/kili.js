import React from 'react'

import { Link } from 'react-router-dom'

class Kilimanjaro extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Kilimanjaro',
      location: 'Tanzania',
      date: 'October 11th, 2015',
      images: [],
      captions: [],
      paragraphs: [
          'We booked up for Kili about 5 months ago. Me, my travel bestie’s Sarah (from Himalayas fame) Sean and my new friends Allen and Claire. Me and four Irish as it turns out. Sarah and I started our training in earnest. Our first walk clocking in at 22 miles, packs on, sun blazing…preparation being key. This level of training continued and I was sticking to the pre-dawn daily gym sessions, pounding the treadmill, steep inclines, hiking boots and trekking gear on, my pack filled with weights…..committed/embarrassing. Six weeks pre-Kili I headed to the US to work for a month. Despite the 5am alarm I was managing to keep the training at a satisfactory level, right up until my back went in week 3. Agony. Training halted and as it turned out never to be resumed pre-trek. Not the preparation I was hoping for but still I’m sure most of this type of mountain success comes down to one thing alone… ALTITUDE.',
          'We arrive at our hotel in Moshi around mid morning and head straight to rent the missing essentials for our climb. This includes our -30C sleeping bags and walking poles, the latter not something we’ve used before but we’re told that we’ll need them for the way down. Moshi Town is hot and dusty and full of anticipation for those about to climb Kili. After a delicious lunch we get to meet our guide, Dan, whose English is excellent as he runs through our itinerary for the Machame six day climb. We picked this route (known as the whisky route) as our research showed that, although it is one of the hardest and most challenging, it has the highest success rate due to the fact that it offers the most efficient way to acclimatise to the altitude with it’s ‘climb high sleep low’ opportunities. Annually approx. 15,000 people attempt to climb Kili and the success rate sits at around 40%. Halfway into my first Kilimanjaro beer I unfortunately witness a man in his 30s, having just returned from the climb, suffer a fit. Whilst it is obvious, due to the slow reactions of the staff, that this is not a regular occurrence, it shakes me to my core. This leads to an uneasy nights rest as I contemplate what lies ahead and ask myself the obvious question, why am I here?!',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
      ]
    }
  }

  render(){
    return(
      <main>
        <section className="tanzaniaHeader header">
          <div className="headerContainer">
            <h1>Mount Kilimanjaro </h1>
            <Link to ="/posts"><i className="fas fa-arrow-left"></i></Link>
          </div>
        </section>
        <section className="blogArticle">
          <h1>{this.state.title}</h1>
          <h3>{this.state.location}</h3>
          <h6>{this.state.date}</h6>

          <h4> TRAINING </h4>
          <p>{this.state.paragraphs[0]}</p>

          <h4> INTRO </h4>
          <p>{this.state.paragraphs[1]}</p>

          

        </section>
      </main>
    )
  }
}


export default Kilimanjaro
