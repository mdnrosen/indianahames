import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'


class HighsAndLows extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Highs & Lows',
      location: 'Bolivia',
      date: 'November 13th, 2012',
      images: [
          '../images/highsandlows/hal1.jpg',
          '../images/highsandlows/hal2.jpg',
          '../images/highsandlows/hal3.jpg',
          '../images/highsandlows/hal4.jpg',
          '../images/highsandlows/hal5.jpg',
          '../images/highsandlows/hal6.jpg',
          '../images/highsandlows/hal7.jpg',
          '../images/highsandlows/hal8.jpg',
          '../images/highsandlows/hal9.jpg',
          '../images/highsandlows/hal10.jpg',
          '../images/highsandlows/hal11.jpg',
          '../images/highsandlows/hal12.png',
          '../images/highsandlows/hal13.jpg',
          '../images/highsandlows/hal14.jpg',
          '../images/highsandlows/hal15.jpg',
          '../images/highsandlows/hal16.jpg',
          '../images/highsandlows/hal17.jpg',
          '../images/highsandlows/hal18.jpg',
          '../images/highsandlows/hal19.jpg',
          '../images/highsandlows/hal20.jpg',
          '../images/highsandlows/hal21.jpg',
          '../images/highsandlows/hal22.jpg',
          '../images/highsandlows/hal23.jpg',
          '../images/highsandlows/hal24.jpg',
          '../images/highsandlows/hal25.jpg',
          '../images/highsandlows/hal26.jpg',
          '../images/highsandlows/hal27.jpg',
          '../images/highsandlows/hal28.jpg',

          
      ],
      captions: [
          'Train cemetary',
          'Billy Elliot ain\'t got nothing on me',
          '',
          '',
          'On an island of cacti',
          '',
          '',
          'Tiny spec on this huge earth',
          'Just for warmth',
          'The boys',
          '',
          'Literally just been sick….trying to have a great time...',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          'Our digs...in the middle of nowhere',
          'Our room...brrrr',
          'The Geysers at 5am...cold.',
          '',
          'Red Lake',
          '',
          '',
          '',
          ''

      ],
      paragraph: [
          //para1[0]
          'I spent the day doing nothing in Uyuni, which is good because there is actually nothing to do. To get over our unspeakable ordeal we decided to give the coca leaves a go. It’s supposed to reduce appetite, fatigue and altitude sickness. After having the pretty awful tasting leaves in my mouth for 45 mins, we discussed its effects and for me, well you guessed it, a pizza and chocolate bar later and I was in bed shattered and dealing with a severe nose bleed. Being at altitude is tough, the air feels so thin and at night sometimes I wake up gasping for breath. You have to walk really really slow and it’s pretty draining.',
         //para2[1]
         'I booked my 3 day jeep tour once I felt up to the thought of being back in a moving vehicle. I got there a good while before anyone else to bag the front seat, no way I was sitting anywhere else. As the 6’2″ American guy folded himself into the 3rd row seat I stretched myself out in the front. There were 6 of us on the tour so 7 in the jeep. We headed off and I was excited but as I don’t know much about this part of the world I really didn’t know what to expect. It’s gloriously sunny here and although it’s always below 10 degrees the proximity of the sun makes it feel like mid-20’s, it’s a burning danger zone. First stop was the train cemetery which was cool, just all these old steam trains in the middle of nowhere, a good opportunity to climb all over them.',
         //para3[2]
         'Next stop the Salt Flats….OMG…stunning, it’s bright white as far as you can see, it’s blinding and kills your eyes. We had a lot of fun taking pics there. No more words needed.',
         //para4
         'We spend a huge amount of time in the jeep, most of the day but it’s not so bad, it’s hard to feel claustrophobic when you are surrounded by miles and miles of nothing. The thing I notice most on the drive is the varying landscape, it goes from red earth mountains that look like those sand things we used to have as kids where you flip them over and there are layers and layers of colour, to the greens and blues of the grass, the water and of course this beautiful bright blue cloudless sky. This drive is incredible, the scale of everything is unfathomable as the Andes loom in the background, the earth stretches out to infinity and we bomb through it a tiny spec on this huge planet. We arrive at our base for the night, it’s made of salt and stone it’s pretty cool. I walk in and spot my buddy that I met in Ilha Grande Brazil, what feels like a life time ago, we thought we would miss each other as we are heading in opposite directions…..of all the gin joints. Everyone is exhausted and it’s absolutely chuffing freezing. I risk 10 mins outside to look at the stars. I have never seen such a perfectly clear night, so many huge and bright stars in all my life. After a wee snifter….just to keep warm you understand, we head to bed.',
         //para4[3]   
        'I sleep in 6 layers and my hat and gloves. But not for long, I wake up with an almighty churning in my stomach, my legs go like the clappers as I try to get out of my sleeping bag quick enough, its pitch black and I make it to the bathroom just in time to hurl. Oh no no no no no…please do not do this to me! Alas it is done. As the others wake at 5.30 we are heading of at 6, I am still in the bathroom. To use a fave James-ism, it’s boot and bonnet. I manage to speak to my buddies and the hostel is searched for drugs, I get some thankfully, but I am still puking as I make my way to the jeep. This is a big problem here, if you are sick it’s instantly assumed that its altitude sickness and that makes it a risk to have you on board',
         //para5[4]
        'My pulse is taken, my pupils are assessed, my hands looked at for signs and as we drive off I am told I have a decision to make, after 30 mins drive we reach the point of no return. We are already at 4000 metres and will be heading to 5500 so if it’s altitude there is a risk I will struggle to breathe. Now when you are in this situation it’s handy to have a Doc in the team but as luck would have it our jeep turned out to be 50% doctors. There was a team discussion about my bowel movements, stool consistency and regularity of vomit and although I was absolutely certain it was food poisoning (you know, you just know), I felt I had no choice but to return to Uyuni. We drive to the one daily bus back to civilisation, but no bus arrives, no choice then….onwards and upwards.',
         //para6[5]
         `Needless to say this was a pretty hideous day physically. We drove miles after miles after miles and every stop it was boot and bonnet and believe me there arent many toilets in the wilderness. Every time I went to get something out of my bag everyone in the jeep held their breath. But aside from driving with my head out of the window like a dog and puking constantly it was still an incredible day. We saw lagoon after lagoon with beautiful flamingos of all different shades of pink. Sometimes I was able to get out of the jeep sometimes people took pics for me, I couldn’t eat anything and I felt as rotten as my laundry. We made it back to our digs which was reminiscent of a refugee camp and I collapsed on the bed. This was the most freezing night of my life. I wore everything I had including hat and gloves and had about 8 layers of blankets, no electricity. I should also mention that after the salt flats my camera broke, I think it’s the lithium in the salt that did it, it’s only 6 weeks old double shit on a stick….literally.`,
         //para7[6]
         `The next day we were up at 4am to head out early. I woke up and mentally checked myself….hmmmm not great but not so totally pukey either YAY! It was utterly freezational. As we tried to get ready in the dark all you could hear was the chattering of teeth, the rustle of sleeping bags and the now common gasping for breath. First stop was the Geysers where the steam rises from the earth, we stood with our hands in it to warm us up in the early morning light.`,
         //para8[7]
         `Then off to the green lagoon and then the thermal pools. I loved the thermal pools! It was so cold outside but we frantically stripped down and jumped in and it was complete and utter heaven. The water is around 40 degrees and we floated there in the gorgeous sunshine, cold air and bright blue skies. This pool was at the same altitude that I jumped out of a plane, I couldn’t get my head round that. There is a lot I struggle to get my head around in these three days. I can’t believe that I have seen what I have seen, I can’t believe how incredibly beautiful this country is. I cannot put any of it into words really so although I have already written a lot I am not going to go through everything we saw, I will just post some pics and hope you get the gist.`,
         //para9[8]
         `This is the best three consecutive days of travelling I have had in my life, even with the puking. I am sooooooo glad that the bus was not there to take me back to Uyuni, although I would never have known what I had missed, what I do know now is that it was unmissable.`,
         //para10[9]
         `For me Bolivia is all about extremes, the altitude, the climate, the richness of the land and minerals and the poverty of the country, the flats of the salt, the rise of the mountains, the browns and reds of the earth and the greens and blues of the water and sky and finally and most obviously the highs and lows of travelling.`
        ]
    }
  }

  render(){
    return(
      <main>
        <section className="boliviaHeader header">
          <div className="headerContainer">
            <h1>Bolivia </h1>
            <Link to ="/posts"><i className="fas fa-arrow-left"></i></Link>
          </div>
        </section>
        <section className="blogArticle">
          <h1>{this.state.title}</h1>
          <h3>{this.state.location}</h3>
          <h6>{this.state.date}</h6>


          <p>{this.state.paragraph[0]}</p>
          <p>{this.state.paragraph[1]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[0]} />
            <span>
              <p>{this.state.captions[0]}</p>
            </span>
          </div>  
          <p>{this.state.paragraph[2]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[1]} />
            <span>
              <p>{this.state.captions[1]}</p>
            </span>
          </div>  

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[2]} />
          </div>  

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[3]} />
          </div>  

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[4]} />
            <span>
              <p>{this.state.captions[4]}</p>
            </span>
          </div>  

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[5]} />
          </div>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[6]} />
          </div>  

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[7]} />
            <span>
              <p>{this.state.captions[7]}</p>
            </span>
          </div>  

          <p>{this.state.paragraph[3]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[8]} />
            <span>
              <p>{this.state.captions[8]}</p>
            </span>
          </div> 

        <p>{this.state.paragraph[4]}</p>
        <p>{this.state.paragraph[5]}</p>
        <p>{this.state.paragraph[6]}</p>

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
            <span>
              <p>{this.state.captions[11]}</p>
            </span>
        </div> 

        <div className="imageBox">
            <img className="articleImg" src={this.state.images[12]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[13]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[14]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[15]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[16]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[17]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[18]} />
        </div> 

        <div className="imageBox">
            <img className="articleImg" src={this.state.images[19]} />
            <span>
              <p>{this.state.captions[19]}</p>
            </span>
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[20]} />
            <span>
              <p>{this.state.captions[20]}</p>
            </span>
        </div> 

        <p>{this.state.paragraph[7]}</p>

        <div className="imageBox">
            <img className="articleImg" src={this.state.images[21]} />
            <span>
              <p>{this.state.captions[21]}</p>
            </span>
        </div> 

        <p>{this.state.paragraph[8]}</p>

        <div className="imageBox">
            <img className="articleImg" src={this.state.images[22]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[23]} />
            <span>
              <p>{this.state.captions[23]}</p>
            </span>
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[24]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[25]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[26]} />
        </div> 
        <div className="imageBox">
            <img className="articleImg" src={this.state.images[27]} />
        </div> 

        <p>{this.state.paragraph[9]}</p>
        <p>{this.state.paragraph[10]}</p>



 
        

        </section>
        <Footer />
      </main>
    )
  }
}


export default HighsAndLows
