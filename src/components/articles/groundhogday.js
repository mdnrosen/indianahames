import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'



class GroundHogDay extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'There is no groundhog day when you travel' ,
      date: 'October 5th, 2012' ,
      location: 'Brazil',
      images: [
        '../images/groundhogday/ghd1.jpg',
        '../images/groundhogday/ghd2.jpg',
        '../images/groundhogday/ghd3.jpg',
        '../images/groundhogday/ghd4.jpg',
        '../images/groundhogday/ghd5.jpg',
        '../images/groundhogday/ghd6.jpg',
        '../images/groundhogday/ghd7.jpg'
      ],
      paragraph: [
        // para1
        'The first week has not flown, in fact it already feels like I have been away for a month, it’s largely due to how much you pack in to each day but also because of everyone that comes and goes in that time and how quickly you form relationships with them, more about that later.',
        // para2
        'Rio is amazing!!! I am so glad it was my first stop, it’s so easy here, perfect for acclimatisation. Any city brings with it a level of convenience but add to that the excellence of the brazilians at speaking English and the fact that its one of the most incredible cities in the world and it makes it a pretty chilled and pretty awesome place to start. My first hostel was pretty crappy, 12 bed dorm, 4 bunks, each 3 beds high and me on the top about 12 foot up. I checked out after 4 nights and a very scary moment when all of my belongings were stuck in a locker and an electric saw was brought to the rescue.',
        //para3
        'My first full night here was absolutely insane. About 15 of us headed off to Lapa which has a massive street party with caipirinha stands lining the streets and live samba kicking out. The caipirinha’s are lethal, the volume of alcohol is so high that they have to put a cup of sugar in to make it drinkable, 2 of them and you dance the samba, simple as that. The samba club we hit was absolutely thumping, the locals love to dance so I fit right in and was being taught the samba straight off, I find it more difficult than I thought but that could have been the caipirinha’s…they have a tab system here which is also lethal. After hours of samba and some random Blur and Killers we left the club sweaty as hell but happy as larry and realised it was daylight, in fact 7.30am, time flies when you dance the samba in Rio. Time goes a whole lot slower when you have a hangover from hell but Ipanema beach helps ease the pain. Sunday was the Rio derby football Flamengo v’s Fluminense, we headed off hot on the tail of a man who shouted ‘Gringo’s, gringo’s’ so we knew where to go. The atmosphere at the stadium was electric, colourful and loud as hell. The brazilians are so passionate and we were right in the thick of it, it’s like the tartan army but with samba drums and less kilts. There were times it was edge of the seat stuff, 1 nil down, goal scored, goal disallowed, women weeping, men going crazy, shirts being thrown, us joining in like we had followed them our whole lives, making up our own words to the songs, a great day.',
        //para4
        'Everywhere you go in this city Christ the Redeemer looks down upon you, most of the time I am drawn to it, it’s fascinating and awesome and no pictures could ever do it justice. We took the train up into the mountain to the sound of samba and arrived to see Cristo up close, it rises into the heavens and and stands alongside you as you gaze across the city taking in the ocean, the beaches, the mountains and the lake, pretty spectacular. There were 7 of us and as we took a taxi to the famous Selaron steps I had my first claustrophobia incident. Three girls in the boot section, zero space 30 degree heat and a hangover, I had sweat pouring from me, my heart in my ears and within 2 minutes I was prepared to dive through the headrests over the three guys and out the window. It was horrendous but I had no choice, to avoid a serious accident and serious damage to street cred I held it together (Lucy 1 Claustrophobia 0).' ,
        //para5[4]
        'There have been some great nights out and on the last one we met a Brazilian guy and girl, both plastic surgeons (this is the plastic surgery capital of the world, evident in spades on Ipanema beach) and apparently I have the perfect face!!! By this I assume that they mean big and round, but it was an interesting night and I love that the locals will talk to us gringos, it just adds to the experience and to our knowledge of the city, culture and country. The highlight of my week in Rio is without doubt the people that I have met. Something amazing happens when you travel, you meet people for such a short time but you go through so much together and a lot of it so incredible that you share something more than you would expect. You feel like you have been friends for years, that they have your back, that you could tell them anything (although you know me and talking), that you would do anything to help them out. When you get a great group, it makes it. I have been so lucky and have met totally lovely, intelligent, inspiring, interesting, hilarious and fun people with different backgrounds, ages, opinions and who come from all over the world. The only downside is that when someone leaves it’s gutting. I will never forget the people that I have met so far, even some that I only knew for the 1 night in Lapa. I love Rio, I could stay here for months. Ipanema is perfect, the beach, the backdrop, the people, the atmosphere, the only downside is that it’s chuffing expensive so I have no choice but to move on. My time here is coming to an end but I will be back and that’s a promise.'

      ]
    }
  }

  render(){
    return(
      <main className="brazil1">
        <section className="brazilHeader header">
          <div className="headerContainer">
            <h1>Brazil </h1>
            <Link to ="/posts"><i className="fas fa-arrow-left"></i></Link>
          </div>
        </section>
        <section className="blogArticle">
          <h1>{this.state.title}</h1>
          <h3>{this.state.location}</h3>
          <h6>{this.state.date}</h6>
          <p>{this.state.paragraph[0]}</p>
          <p>{this.state.paragraph[1]}</p>
          <p>{this.state.paragraph[2]}</p>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[0]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[1]} />
          </div>

          <p>{this.state.paragraph[3]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[2]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[3]} />
          </div>

          <p>{this.state.paragraph[4]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[4]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[5]} />
          </div>
        </section>
        <Footer />
      </main>
    )
  }
}


export default GroundHogDay
