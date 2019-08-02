import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../common/footer.js'

class PatternsEmerge extends React.Component{
  constructor(){
    super()

    this.state = {
      title: 'Patterns emerge',
      location: 'Brazil',
      date: 'October 11th, 2012',
      images: [
        '../images/patterns/pe1.jpg',
        '../images/patterns/pe2.jpg',
        '../images/patterns/pe3.jpg',
        '../images/patterns/pe4.jpg',
        '../images/patterns/pe5.jpg',
        '../images/patterns/pe6.jpg',
        '../images/patterns/pe7.jpg',
        '../images/patterns/pe8.jpg'
      ],
      paragraph: [
        //para1[0]
        'So there is no groundhog day when you travel, however a pattern does start to emerge. It becomes apparent that every time you travel you will be hungover. As sure as night follows day, hangover follows a last night…….anywhere. No matter how much mosquito repellent you apply, you wake up scratching. No matter how much suncream you use you always miss a bit. No matter how many times you remember to put the toilet paper in the bin, you always forget once, usually at the worst ‘moment’ and when there is a queue at the door. You say it’s going to be an alcohol free day, then you’re cracking open a nice cold beer. Intentions get quashed every day, the learning Spanish, the promise of reading, the lack of alcohol, the exercise you know you should do. I think that there are cycles of traveling and right now at the end of the second week things are shifting. The ease of Rio has been replaced with an acceptance of these patterns and the challenges they bring…..traveling with a hangover , serious sunburn, travel sickness and an increasingly wobbly belly.',

        //para2[1]
        'We said goodbye to Rio after a final glorious sunset and of course a second night at Lapa. Saying bye to the boys was sad, they were off to the Amazon to wrestle anacondas and we were off to hike the jungle and sweat out some caipirinha. With heavy hearts we hit the road for the 6 hour bus and ferry ride to Ilha Grande an island off the coast with 102 beaches to choose from….that will do nicely. Journey was OK, I wrangled the front seat for the travel sickness which I now realise I have to weigh up against the sheer terror of direct sight of the craziness of Brazilian bus drivers. The ferry ride was touch and go but after an hour on choppy seas we arrived. Ihla Grande really is beautiful. We got kitted out in our trekking gear, and headed off to find Lopes Mendes beach. Off we went, me looking suspiciously like a hockey player if you know what I mean (it really isn’t a good look for me shorts and hiking shoes) and took on the 2.5 hour hike. It was surprisingly tough as we climbed up and up and up the mountain in the searing heat, sweat pouring, hearts pounding, breathing hard, at some points it was more rock climbing than hiking but we made it and it was worth the hike there….not the hike back though so we got the boat.',

        //para3[2]
        'The following day we hiked up to the waterfall, on review of lonely planet we noted that the beach hike was described as ‘light’ and that this hike would be ‘medium’, hmmm ok then. We felt assured when we saw people coming back down the trail in flip flops, it’s always a good sign, with hindsight it is actually just a sign of idiocy. The first hour was hard going, steep climbs over rocks, chatting less and less as we conserved our energy. We were quick though, we would catch up and overtake groups we hadn’t even seen ahead of us, we were getting our alcohol squashed fitness back and we were loving it. We reached the waterfall and it was so beautiful, so worth the sweat and embarrassing appearance. I headed in, but these things don’t come easy and it was a treacherous fumble through dark waters and over rocks to be able to stand beneath the falls. I got there without any serious damage although my dignity was left on shore as I felt for rocks with my hands with my big bum in the air. One girl was not quite as lucky and I heard an almighty splash as she went kamikaze style down a rock and into the deep. It’s every man for himself though, and I couldn’t help for fear of my own demise, note – do not put yourself in this situation with me….you’re on your own, I am still nursing a fracture I cannot risk a set back. On the return we were on a high and we started running, it was like base running, bounding from rock to rock going so fast eyes darting everywhere assessing the ground, practically flying, it was so much fun, I loved it and everyone that saw us thought we were completely insane.',

        //para4[3]
        'The landscape here is gorgeous, so far Brazil has been an incredibly beautiful country. The lush green tropical forests, the cold and incredibly choppy ocean, the huge mountains that surround the coast line, the island that makes me dream of ‘Lost’. The views from the mountains of the glorious beaches are stunning. Walking through so much beauty and nature fills my senses and makes me feel so very far away from home, like an adventurer (or Indiana Jones!).',

        //para5[4]
        'On our last night we thought we deserved a party, a club on the beach front up on the rocks. We marched in, ordered our caipirinha and hit the dancefloor, always the first on. They quickly started clearing away tables for us….I do cover some ground with my running man, and we proceeded to dance the night away. Not surprisingly the night included a dance off which I won by accidentally almost breaking his nose. We headed back in the earlyish hours insanely hungry and searching for food, it’s not like Rio though and nothing was open, we sweet talked the security guy at our hostel and ended up in the locked disgusting kitchen eating chocolate cake covered in ants, I am trying not to picture the ants.',

        //para6[5]
        'So once again traveling with a hangover we left Ihla Grande back on the ferry to the mainland and the minibus ride to Paraty our next stop. Front seat again, this time most definitely a mistake. The driver had a sort of drivers Tourette’s, we would drive along and for no reason he would brake maybe 10 times in quick succession, or stick his hazards on, or beep the horn, or sometimes just pretend to change gear without actually touching the gearstick. Everyone was just looking at each other going WTF?! He even did it to the rhythm of the music which was almost bearable for Bob Marley but dangerous with Guns and Roses. We hit traffic, he got out, we were seriously considering me taking the wheel but were side tracked by the guys selling toy monkeys and clay piggy banks….because that’s what you need when you hit road works on a long journey, not water or snacks, nope there was one thing on my mind on that journey, I was desperate for a soft monkey to take the edge off.',

        //para7[6]
        'It has been a tougher week this week, the high of Rio, the missing the crew, the moving away from the English speaking, the dragging my horrendously heavy backpack, the impossibility of booking any sort of travel, the holiday that has hiked up the prices and reduced availability and the constant niggle of where to go next, of what to do. Tomorrow the girls and I head off in different directions, I am on my own again, but I know it won’t be for long.'
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

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[0]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[1]} />
          </div>

          <p>{this.state.paragraph[1]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[2]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[3]} />
          </div>

          <p>{this.state.paragraph[2]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[4]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[5]} />
          </div>

          <p>{this.state.paragraph[3]}</p>
          <p>{this.state.paragraph[4]}</p>

          <div className="imageBox">
            <img className="articleImg" src={this.state.images[6]} />
          </div>
          <div className="imageBox">
            <img className="articleImg" src={this.state.images[7]} />
          </div>
          
          <p>{this.state.paragraph[5]}</p>
          <p>{this.state.paragraph[6]}</p>

        </section>
        <Footer />
      </main>
    )
  }
}

export default PatternsEmerge
