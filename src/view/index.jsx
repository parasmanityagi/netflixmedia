import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Plan from './Pages/Plan'
import Category from './Pages/Category'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'
import './Main.scss'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/plan" component={Plan} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  )
}

export default App