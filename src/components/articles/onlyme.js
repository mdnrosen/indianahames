import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'

class OnlyMe extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Only Me',
      location: 'Bolivia',
      date: '10th November 2012',
      images: [
        '../images/onlyme/onlyme1.jpg',
        '../images/onlyme/onlyme2.jpg',
        '../images/onlyme/onlyme3.jpg',
        '../images/onlyme/onlyme4.jpg',
        '../images/onlyme/onlyme5.jpg',
        '../images/onlyme/onlyme6.jpg',
        '../images/onlyme/onlyme7.jpg',
        '../images/onlyme/onlyme8.jpg',
        '../images/onlyme/onlyme9.jpg',
        '../images/onlyme/onlyme10.jpg',
        '../images/onlyme/onlyme11.jpg',
        '../images/onlyme/onlyme12.jpg'

      ],
      captions: [
        'Bolivian border, very official',
        'Shaking so much, can\'t even get a pic',
        'Dinner on the oriental express...classy',
        'Fern forest',
        'The very slide that I headed down',
        'Jurassic Park',
        'No repair kit is going to fix that...',
        'A few good men',
        'Me and Angelo my angel',
        'You know you\'re in trouble when it\'s sheer bliss to see this',
        'Just give it a good old whack',
        'Where I sat upfront with the bus driver, sooo comfortable and clean'
      ],
      paragraph: [
        //para1[0]
        'Just the very fact that this is the 2nd time I am writing all this should give you a good indication of my last week. I apologise for the enormity of it…..',
        //para2[1]
        'So I headed for Bolivia, first stop 6 hours, Corumba at the border of Brazil (Ay). On leaving the bus I was immediately accosted by touts but held my ground. As I fought my way through one guy Rodderigo grabbed my arm and asked me if I was Lucy…..ah my reputation proceeds me. Turns out he knows the hostel I am staying at and gives me directions, not far he says, so even though I was going to take a taxi I haul my donkey worthy luggage onto my back and hit the road….fast forward and hour and twenty, it’s pitch black, over 40 degrees, I have no liquid left inside me and I am completely lost. I cannot carry my bag another meter and there are no taxis or gringos in sight. I give in, with curses and bleeding feet I stumble to a petrol station, no one speaks English but through my now sweat drenched scrap of paper, my teary eyes and dust covered face I convey my destination and desperation and they calls me a taxi, sweet as. Forty mins later I arrive at my hostel, a whole 3 blocks from the bus station. As I arrive Rodderigo rocks up on his moped and asks me if I found it OK….moving on. Next morning up at 5.30am to get to the border, word is it’s carnage down there so the sooner we get there the better. We arrive, no one else is there, it doesn’t open until 8am, not the carnage I had envisioned. After receiving our exit stanps we head to Bolivia to receive our entry ones. This also opens at 8am but in the 50m walk we just went back an hour….still at least we are at the front of the queue because this is where it does turn to carnage.',
        //para3[2]
        'Decision time, whether to go to Santa Cruz by train or bus. Train is 16 hours but I am sick of buses I vote train. It leaves in 7 hours, it’s already over 40 degrees and Quijarrow is a town of dust and little else. We wait in the station, no aircon, it’s hellish. Nothing to do but lose liquid and take on liquid. We dream of the train to keep us entertained. We ignore it’s nickname The Death Train and use it’s given name The Oriental Express. Oh the joy this train will bring us, aircon (an oasis in this desert), decent food, TV, beds, such comfort awaits. It arrives and our dreams disappear in a cloud of dust pfoof. It’s dark, miserable, oh there’s aircon alright, it’s minus 20, the food is rubber, the TV is Bolivian pop (read poop) and it’s like being on a 1940’s rollercoaster (I imagine). As it turns to night, all hell breaks loose. Thunder, lightening, very very frightening…it’s like being in a scary movie, we are in a tin train, it’s pitch black and the lightening illuminates this ghost like carriage revealing it’s true horror, rain pours in through the windows, we get soaked, they crank UP the aircon and I fear that I will end up frozen in this moment in time and when I am found it will not be with a smile on my face. 16 hiddeously long sleepless hours later we arrive in Santa Cruz, it’s chucking it down it’s miserable, so are we. Instead of heading into town to find a hostel we head for a taxi with one place on our minds Samaipata. OK so it’s another 4 hours in a car and it’s an expensive (35 quid) taxi we are taking but we have had enough, we are suffering from Travellers Gloom brought about by temperature extremity and the absolutely correctly named Death Train, we need a lift and at 1600m Samaipata should do it.',
        //para4[3]
        'Samaipata is lovely, it’s a small hipply place with treks and lots of holistic stuff and apparently a good place to acclimatise. We trek to the Cloud Forrest and it’s vastly different to Brazil treks. It’s cold for one thing and it’s 2600m above sea level. The views are outstanding, the mountains just don’t look real. The national park we are in takes 15 days to walk through. It’s a fern forrest, they are huge and they only grow 1cm a year. This is probably why this place feels so ancient, it’s like being on earth at it’s beginning, before it was touched by man. It’s so much like Jurrasic Park that I continually expect to hear the distant thump of a T-Rex’s footsteps as he searches for lunch. There are no paths and we fight our way through the forrest climbing and stumbling over fallen trees and through dense folliage (I have always wanted to say that, feel like Attenborough). High up we come to water streaming down a path of rock. My exact words as we start to walk up are “well this would make an interesting water slide” and less than a second after these words have left my lips my legs have gone from under me and I have taken out the guy behind as we slide down we are grabbed by our arms in true Indiana style and saved from our doom (it was a right side fall by the way, left hand OK). I have no idea if I am hurt I am laughing too much at the ridiculousness of this comedy timing….only me. On return I find I am locked out of my room. It’s the first time I have gone private but at a fiver a night I couldn’t say no, I did not realise however that I would not be able to access it. Still I get in 4 hours later and inspect my wounds, no real damage done.',
        //para5[4]
        'The next day we are heading off again on a crazy journey so decide to hire bikes and stretch the old legs. The fact that we are given decent bikes, a helmet (unheard of), repair kits and the like, gives us an idea of the seriousness of our trip. I am still a little nervous of my wrist but vow to be sensible on the downhill. As we venture up the dusty hills I feel my lungs at the point of bursting and then collapse. It is singularly the physically hardest hour of my life. I don’t know if it’s the altitude or my now non-existent fitness but it’s nails. As I am litterally busting a gut uphill I feel my bike go from under me, I fall flat in the dust. The whole back gear changer is now in my spokes. No repair kit is going to fix this. We are a 3 hour walk from base but I have no choice. My buddies continue to at least make the trip worthwhile and I start my long hot walk back. I have walked less than 10 meters when I hear a car (only 3 have passed in the last hour). We flag it down and as luck would have it, it’s only a cheeky 4×4 pick-up!!! They say they will take my bike but the car is full so walk it is for me, but then no!! hang on a minute they only have their buddies in another jeep behind where there is space for me AMAZING!!! The car I am in is driven by the Grandfather of Angelo an 8yr old boy who speaks excellent english and translates the sweetest coversation that makes him blush and curse at his Grandfather. His Grandfather tells me that he has a 28 year old son in Santa Cruz and asks me if he can take me there because he thinks that his son and I will fall in love. Tempting but I have plans.',
        //para6[5]
        'So in the evening we begin our trip to Uyuni. We jumped on our first bus to Sucre, 12 hours. I wasn´t concerned, I thought I had these bus rides nailed. As soon as we got on the lights went out, it was pitch black and he drove off like a bat out of hell. We threw ourselves to our seats and fumbled around for our flashlights. Straight away I felt my stomach go and within 10 minutes the road had gone, just rocks. This is how it continued for an eternity. I can´t describe this experience except to say that it´s like being the only Smartie in a tube, you are thrown around all over the place a 100 times a second, the noise is exrutiating as the windows rattle and the bus threatens to disintegrate. I spent 6 hours with my stomach being thrown from where it belongs into my mouth and back again, green green green. This was no mans land, we didn´t see any light for 9 hours. The only toilet break was 20 mins into the journey, a horror of it´s own….',
        //para7[6]
        'At 3am I was saved, albeit briefly, I heard a massive bang and we ground to a halt, the axel had fallen off….yay!!! I was so happy to get off the bus in the arse end of nowhere, the middle of the night in the freezing cold, it was bliss. Everybody disembarked and 40 people dropped their kecks and went for a piss etc. which was nice, although it may have been better if we had actually had a toilet break sooner as it was obvious that a person or perhaps even people had shat themselves in the very seat they were in. After an hour of hammering the axel was back on and we were off. As day broke I could take no more, I stumbled like a drunkard down the bus and hammered on the drivers door for him to let me up front, I just needed to be able to see FFS. I sat up there for about 30mins and as the driver furiously threw coca leaves into his mouth, I hung on for dear life as he swerved around mountains perilously close to the edge of the cliffs, still at least this was a ´ride´and I was able to get enough adreneline pumping to not throw myself out of the door. We arrived at Sucre, then Potosi, then finally Uyuni after 26 hours, some of the most hideous hours of my life. The saving grace is that since the beginning of this post I have been travelling with the loveliest couple, had I been alone it would have totally sucked, but we were able…just..to laugh at the situation although the next day we were unable to speak of it except to say we felt abused.',
        //para8[7]
        'At 3am I was saved, albeit briefly, I heard a massive bang and we ground to a halt, the axel had fallen off….yay!!! I was so happy to get off the bus in the arse end of nowhere, the middle of the night in the freezing cold, it was bliss. Everybody disembarked and 40 people dropped their kecks and went for a piss etc. which was nice, although it may have been better if we had actually had a toilet break sooner as it was obvious that a person or perhaps even people had shat themselves in the very seat they were in. After an hour of hammering the axel was back on and we were off. As day broke I could take no more, I stumbled like a drunkard down the bus and hammered on the drivers door for him to let me up front, I just needed to be able to see FFS. I sat up there for about 30mins and as the driver furiously threw coca leaves into his mouth, I hung on for dear life as he swerved around mountains perilously close to the edge of the cliffs, still at least this was a ´ride´and I was able to get enough adreneline pumping to not throw myself out of the door. We arrived at Sucre, then Potosi, then finally Uyuni after 26 hours, some of the most hideous hours of my life. The saving grace is that since the beginning of this post I have been travelling with the loveliest couple, had I been alone it would have totally sucked, but we were able…just..to laugh at the situation although the next day we were unable to speak of it except to say we felt abused.',
        //para9[8]
        'OK so you can probably see it´s been an interesting week, and to be honest by the time I got to Uyuni all I wanted to do was fly to Santiago to relative civilisation and my lovely friend, but it´s just like a couple of bad days at the office…well not at all actually because working just sucks…but the highlight of this week has been the help that I have received from friends and strangers and the wicked humour that has kept me company along the way. To quote my Chilean friend ´you love to travel the world but you do it so painfully´…no kidding.'
      ]
    }
  }

  render(){
    return(
      <main className="bolivia1">
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
            <span>
              <p>{this.state.captions[2]}</p>
            </span>
          </div>

          <p>{this.state.paragraph[3]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[3]} />
            <span>
              <p>{this.state.captions[3]}</p>
            </span>
          </div>
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

          <p>{this.state.paragraph[4]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[6]} />
            <span>
              <p>{this.state.captions[6]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[7]} />
            <span>
              <p>{this.state.captions[7]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[8]} />
            <span>
              <p>{this.state.captions[8]}</p>
            </span>
          </div>

          <p>{this.state.paragraph[5]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[9]} />
            <span>
              <p>{this.state.captions[9]}</p>
            </span>
          </div>

          <p>{this.state.paragraph[7]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[10]} />
            <span>
              <p>{this.state.captions[10]}</p>
            </span>
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[11]} />
            <span>
              <p>{this.state.captions[11]}</p>
            </span>
          </div>

          <p>{this.state.paragraph[8]}</p>








        </section>
        <Footer />
      </main>
    )
  }
}


export default OnlyMe
