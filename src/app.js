import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'


import './style.scss'

import Home from './components/common/home'


import Posts from './components/common/posts'
import PatternsEmerge from './components/articles/patternsemerge'
import GroundHogDay from './components/articles/groundhogday'
import Blackouts from './components/articles/blackouts'
import Bonito from './components/articles/bonito'
import Falling from './components/articles/falling'

import OnlyMe from './components/articles/onlyme'
import HighsAndLows from './components/articles/highs'



class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    console.log(this, 'this location')
    return(
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/Posts" component={Posts} />
        <Route path="/patterns" component={PatternsEmerge} />
        <Route path="/groundhogday" component={GroundHogDay} />
        <Route path="/blackouts" component={Blackouts} />
        <Route path="/bonito" component={Bonito} />
        <Route path="/falling" component={Falling} />
        <Route path="/onlyme" component={OnlyMe} />
        <Route path="/highsandlows" component={HighsAndLows} />
      </BrowserRouter>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
