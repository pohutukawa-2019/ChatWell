import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
// components below
import App from './components/App'
import ClientTopics from './components/ClientTopics'
import SponsorTopics from './components/SponsorTopics'
import Register from './components/Register'
import SponsorRegister from './components/SponsorRegister'
import Guidance from './components/Guidance'
import Pair from './components/Pair'
import ChatRoom from './components/ChatRoom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path='/' component={App} />
          <Route path='/topics' component={ClientTopics} />
          <Route path='/sponsor/topics' component={SponsorTopics} />
          <Route path='/register' component={Register} />
          <Route path='/sponsor/register' component={SponsorRegister} />
          <Route path='/guidance' component={Guidance} />
          <Route path="/pair" component={Pair} />
          <Route path='/ChatRoom' component={ChatRoom} />
        </Provider>
      </Switch>
    </HashRouter>,
    document.getElementById('app')
  )
})
