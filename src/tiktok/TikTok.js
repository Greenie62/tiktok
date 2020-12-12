import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./Tik.css"
import {Home,Upload} from "./pages"
import {Header} from "./components"

import {addData} from "./functions/addData"

const TikTok = () => {
  return (
    <div className='tiktokapp'>
      <h1>TikTok</h1>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/upload" component={Upload}/>
              <Route path="/" component={Home}/>
          </Switch>
      </Router>
    </div>
  )
}

export default TikTok
