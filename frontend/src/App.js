import 'bulma'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ArticleIndex from './components/ArticleIndex'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Login from'./components/auth/Login'
import Register from './components/auth/Register'
import ArticleShow from './components/ArticleShow'
// import SecureRoute from './components/common/SecureRoute'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            {/* <SecureRoute path="/articles/new" component={ArticleForm}/> */}
            <Route exact path="/" component={Home}/>
            <Route path="/articles/:id" component={ArticleShow}/> 
            <Route path="/articles" component={ArticleIndex}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
          </Switch>
          </main>
        </BrowserRouter>
      // <ArticleIndex />
    )
  }
}

export default App
