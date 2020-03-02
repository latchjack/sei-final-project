import 'bulma'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ArticleIndex from './components/articlefolder/ArticleIndex'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import About from './components/common/About'
import Login from'./components/auth/Login'
import Register from './components/auth/Register'
import ArticleShow from './components/articlefolder/ArticleShow'
import ArticleNew from './components/articlefolder/ArticleNew'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/articles/new" component={ArticleNew}/>
            <Route path="/articles/:id" component={ArticleShow}/> 
            <Route path="/articles" component={ArticleIndex}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
          </main>
        </BrowserRouter>
      // <ArticleIndex />
    )
  }
}

export default App
