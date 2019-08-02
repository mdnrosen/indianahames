import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'

class Bonito extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Bonito...and it is.',
      location: 'Brazil',
      date: 'October 30th, 2012',
      images: [
        '../images/bonito/bonito1.jpg',
        '../images/bonito/bonito2.jpg',
        '../images/bonito/bonito3.jpg',
        '../images/bonito/bonito4.jpg',
        '../images/bonito/bonito5.jpg',
        '../images/bonito/bonito6.jpg',
        '../images/bonito/bonito7.jpg',
        '../images/bonito/bonito8.jpg'
      ],
      captions: [
        'The hot walk there',
        'Looking good hames',
        'Butterflies on my head!',
        'Close...very close',
        'That\'s me up there with the fish!',
        'It\'s all good...honest',
        'Floating on our backs, checking out the view.',
        'So many butterflies...like a dream'
      ],
      paragraph: [
        //para1[0]
        'So I left Iguacu for the 18 hour bus to Bonito, it’s funny how my fear of long bus rides has disappeared. The worst part is actually the waiting between busses, 4 hours in the middle of the night, the middle of nowhere, the darkness, the tiredness, the loneliness, the constant watching of the bags when all you want to do is curl up and sleep. The second bus had no aircon, people unashamedly stripped down to the basics for the 7 hour sweat fest. We arrived at Bonito and I couldn’t wait to get off, it’s like stepping on land after a long stint at sea, it takes a while not to feel like you are still on the road trundling along. By the way, I have received some comments about the sheer wordliness of my posts and I promise you I am trying to be succinct but it’s hard, and you know me, why use one word when ten will do….you see I am at it again…..',
        //para2[1]
        'OK to business….so Bonito, it really is beautiful, not at first glance but once you start to explore there is definite beauty. There are tonnes of spectacular tours here but I have to watch my money so I pick one cheap one and one expensive. The cheap thing is the public park. I hire a bike for the 10k ride. It’s downhill at first and as I bomb along at exhilarating speed, I briefly consider that this bike is actually really rather small. As I level out ready to change gears I realise there are none. My legs are going like the clappers, my bike is not, this is inneficient cycling at it’s worst. I have to manually move the oily chain to the lower gear, this is repeated no fewer than 20 times. It is also already 37 degrees and my hair has freaked out, it is a birds nest. As I arrive on my tiny gearless cycle I catch a glimpse of myself in the window, I am a cross between Brandon in the Goonies on the kids bike and Monica in the Hawaii episode of Friends, although it has to be said, I am no Courtney Cox and I am covered in oil, my hands, my legs, my face. I curse the hostel for giving me this bike and vow to give them what for on my return. The park is…..busy, I forgot it was the weekend – every day is Saturday to me. But it is nice to see the locals enjoying life with their families and for me to collapse on the grass, my big hair as my pillow. The water is super clear and people are snorkelling with fish the length of my arm, people but not me, I don’t like water and I am scared of fish.',
        // para3[2]
        'Which brings me on to my expensive tour choice, snorkelling in the river for 3 hours. I know, I know, but you can’t come to Bonito and not snorkel…it’s law. The night before the tour I couldn’t sleep, I wanted to cancel, so much money for something that I didn’t really want to do, but by morning I knew that I would go, that life is made richer when you challenge yourself. So we head off in the scorching heat following the instruction of no suncream or mozzie repellant, as it could harm the fish (although I doubt as much as serious sunburn and innumerable bites can hurt me). On arrival we sign our waivers, we could be bitten, paralysed, diseased, attacked, drowned and killed and get given our wetsuits. I have two issues with wetsuits, firstly they always size me up wrong – queue three very embarassing public squeezing into and out of moments, and secondly they make me seriously claustrophobic, it’s like being wrapped in clingfilm and I cannot breath. Into the jeep and across the countryside and we are given a list and pictures of the fish we are likely to see. They all seem perfectly pretty to me except the piranha…..WTF!!! piranha oh shit on a stick now I really am scared and I swear this suit is getting tighter. There are general gags about not cutting yourself and attracting the piranha, I glance down and notice the blood on my bikini top, I had torn my toenail off and my sock had been next to my bikini in my bag…disgusting I know. I consider ditching the bikini but it is my favourite one, so now I am claustrophobic, piranha bait, scared as hell, it’s chuffing hot, I am being attacked by mozzies, told I can’t use the toilet for 4 hours and to top it all off I am paying for it, still my bikini is really very pretty.',
        // para4[3]
        'After a 40 minute walk through the jungle (40 minute mozzie battlezone) we arrive at our entry point. It’s so peaceful, calm, clear and beautiful and for once the water is really inviting. We don our snorkelling gear and glide off. It would take me thousands of words to describe these 3 hours and you would be asleep by the time I finished, so I will let some crappy quality pics try to do the talking. We snorkelled for 3 hours, and covered approx. 4k of water, saw the teeniest and the hugest fish. We swam through rapids, through tunnels of water that drag you helplessly so fast between jagged rocks that would slice you open. We floated along the river on our backs, taking in the outstanding beauty of this place. We swam beneath butterflies, more than I have ever seen and listened to natures song in our contented silence….life made richer indeed.',
        // para5[4]
        'Bonito has been beautiful and I have treated myself to two days of just lazing round the pool. For the first time though I am nervous. I leave for Bolivia tomorrow. It will take me two days to get there and I still don’t know how. I have no idea how I will get across the border, I ask around but no one knows.',
        // para5[5]
        'Brazil, it has been an absolute pleasure…until we meet again. Bolivia, please be kind….'
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
            <span>
              <p>{this.state.captions[0]}</p>
            </span>
          </div>

          <p>{this.state.paragraph[3]}</p>

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

          <p>{this.state.paragraph[5]}</p>


        </section>
        <Footer />
      </main>
    )
  }
}


export default Bonito
