import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'

class Falling extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Falling...',
      location: 'Brazil',
      date: '25th October 2012',
      images: [
        '../images/falling/f1.jpg',
        '../images/falling/f2.jpg',
        '../images/falling/f3.jpg',
        '../images/falling/f4.jpg',
        '../images/falling/f5.jpg',
        '../images/falling/f6.jpg',
        '../images/falling/f7.jpg',
        '../images/falling/f8.jpg',
        '../images/falling/f9.jpg',
        '../images/falling/f10.jpg',
        '../images/falling/f11.jpg',
        '../images/falling/f12.jpg',
        '../images/falling/f13.jpg',
        '../images/falling/f14.jpg',
        '../images/falling/f15.jpg'

      ],
      captions: [
        '',
        '',
        '',
        '',
        'Devil\'s throat - Brazilian side',
        'Me and Rory - Brazilian side',
        '',
        '',
        'Argentina Side',
        'Devil\'s Throat - Argentinian side',
        '',
        '',
        '',
        '',
        'Soaking wet from the boat'
      ],
      paragraph: [
        //para1[0]
        'It’s 4 weeks today since I left London and landed in Brazil, and what a month it’s been. Even if I was finishing here I would return having had the time of my life. But I am not finishing here, I have more countries to visit, months to go and no doubt more amazing things to see and more incredible people to meet. I was going to round up the month and give some highlights but it’s nearly impossible they are endless and every day has been awesome, well except one spent travelling, one spent sick and in bed and today because I am roomless still sick and waiting for a bus. I will say though, that the best thing about my trip so far has been the people I have met. Maybe you have to be a certain type of person to pack up your life and hit the road and maybe it’s that that means you meet so many kindred spirits. Everyone I have spent time with so far has a lust for life, energy that knows no bounds and a sponge like being that makes them want to soak up every culture, every experience, every site, every sound and every type of alcohol imaginable. My trip so far has not been without it’s challenges, namely language barriers, a lost kindle charger (still sobbing about this), no access to money, sickness, zero clean underwear, difficulties of leaving some really special people (more tears), horrendous sunburn and sole responsibility for decision making – queue late nights of research and a banging head. But these challenges pale in comparison to the positive side of this trip and I am sure are part and parcel of the overall experience.',
        //para2[1]
        'Well to round off my 4 weeks, I left Trindade and headed for Foz do Iguacu, a lovely 23 hours on 3 different buses. Fortunately my buddy was travelling with me so at least I wasn’t tackling it alone. As it turned out we spoke only briefly as I managed unbelievably to sleep for about 21 hours, simply due to the fact that since I left London I have barely slept. There are two reasons for this, firstly you have to be in bed to sleep and secondly when you are in bed there are at least another 4 people (in the room not the bed) and always, absolutely guaranteed there will be one bear of a man who snores like a beast. This beast is usually in the bunk above me and I spend hours kicking the bottom of the mattress (reminiscent of sharing a bunk with Ellie, although she never actually snored and I manage to refrain from tickling his feet as he climbs the ladder). So being on a bus, music on, unbelievably comfortable seats and no beer or bear meant I had no choice but to finally give in to sleep. I only woke to eat. I even managed to sleep through the horrendous smell of piss by whacking a load of tiger balm up my nostrils.',
        //para3[2]
        'We arrived at our hostel dumped our bags and without so much as a brush of the teeth we legged it to Foz do Iguacu, Brazilian side. The weather was shite, dark and wet but we didn’t care. As we caught our first glimpse of the falls I just stopped short of crying. I was mesmerised and unbelievably this was just the baby of them, as we walked along the path through all of the incredible butterflies that make you feel like you are walking into a fairy tale, the falls just got bigger and bigger and more spectacular. Once we arrived at the biggest Devils Throat we walked out onto the platform got drenched and soaked it all up. Incredible.',
        // para4[3]
        'We legged it back to the hostel so my buddy could rush back off over the border to Argentina. I had had a bad head and stomach for a couple of days by this point but I was trying to ignore it by downing more ibuprofen than usual. The next day I was getting a visit from my English buddy, the first person I had ever met in Brazil, we had got a cab from the airport together in Rio. I was looking forward to catching up and swapping tales and without hesitation heading back to the falls. He arrived and the weather changed, it was absolutely glorious, so lucky. We headed off and I had the opportunity to get a completely different view, the light was incredible, so crisp and clear…awesome!!!!',
        //para5[4]
        'We arranged to go to the Argentinian side the following day but I was feeling worse and worse. As morning arrived (I had been awake since 3 being sick) I had no choice but to cry off. We had to separate here as he was carrying on into Argentina. Gutted. I spent the day in bed feeling utterly sorry for myself, being sick overseas is worse than at home and I was missing the crew from Trindade. Not a great day but receiving some lovely messages from friends and an unexpected bear hug from a lovely Dutch guy (I was obviously looking worse for wear) made it much easier. I couldn’t waste another day though, I was determined to get back on the road. Feeling utterly crap I dragged myself out of bed the following morning and onto the bus, destination Argentina. Crossing the border was strange not once did we leave the bus and not once did we meet an official, if I ever need to disappear I will be nicking someone’s passport and heading to Argentina. This side is so different mainly because you see everything so up close. If the Brazil side is all about the panoramic views, then the Argentina side is all about the experience. The roar of the water, the spray on your face, the monkeys, toucans, vultures, lizards and coatis and best of all the boat trip into the falls. It was absolutely brilliant. As we got on the boat we actually stopped to wipe the water off the seats…I foolishly underestimated just how absolutely soaked we were about to get. We sped towards the falls and all of a sudden amid the screams we were as close to the falls imaginable without ending up in a Titanic scenario. I haven’t laughed or screamed like that since I threw myself out of a plane. It was absolutely exhilarating, the force of the water is incredible, I have never been so drenched in all my life. It meant staying it soaking wet denim for the next 4 hours which is undoubtedly why today I feel like I am swallowing glass.',
        //para6[5]
        'I have spent four days umming and ahhhing about where to go next and with a little help from a guy I have never actually met, I have decided to head off tonight on a 18 hour 2 bus trip to Bonito. It’s going to be beautiful……',
        // para7[6]
        'P.S. please feel free to write comments on my blog, if it wasn’t for the fact I can view ‘hit’ stats I would think no one was reading it………'
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
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[2]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[3]} />
          </div>

          <p>{this.state.paragraph[3]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[4]} />
            <span>
              <p>{this.state.captions[4]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[5]} />
            <span>
              <p>{this.state.captions[5]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[6]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[7]} />
          </div>

          <p>{this.state.paragraph[4]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[8]} />
            <span>
              <p>{this.state.captions[8]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[9]} />
            <span>
              <p>{this.state.captions[9]}</p>
            </span>
          </div>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[10]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[11]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[12]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[13]} />
          </div>

          <p>{this.state.paragraph[5]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[14]} />
            <span>
              <p>{this.state.captions[14]}</p>
            </span>
          </div>


          <p>{this.state.paragraph[6]}</p>

        </section>
        <Footer />
      </main>
    )
  }
}


export default Falling
