import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
// import Messages from './messages-app/Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import Hello from './state/state-drills/HelloWorld';
import Bomb from './state/state-drills/Bomb';
import Roulette from './state/state-drills/Roulette';
import Tabs from './state/Tabs';
import Accordion from './state/state-drills/Accordion';
import DemonymApp from './api-requests/demonymapp/demonymApp';
// import timer from './api-requests/test'
import AppLang from './lang-context/AppLang'
import HomeElement from './RoutePractice/Home'
import Nav from './RoutePractice/Nav'
import OtherLinks from './RoutePractice/OtherLinks'
import AboutMe from './RoutePractice/AboutMe';
import ApiLink from './RoutePractice/ApiLink'




const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>YOUR APPLICATION NAME!</h1> */}
        {/* <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/> */}
        {/* <TheDate /> */}
        {/* <hr />
        <Counter count={123} />
        <hr /> */}
        <Hello />
        <hr />
        <Bomb />
        <hr />
        <Roulette chamber = {8}/>
        <hr />
        <Tabs tabs={tabsProp}/>
        <hr />
        <Accordion sections={sections} />
        <hr/>
        <DemonymApp />
        <hr/>
        <Nav/>
        <Switch>
            <Route
                path='/' exact
                render={(props) => (
                  <HomeElement 
                      {...props} 
                      title={'HOME PAGE'}/>
                )}
            />
            <Route
                path='/aboutme'
                render={(props) => (
                  <AboutMe 
                      {...props} 
                      title={'About Me'}/>
                )}
            />
            <Route
                path='/otherlinks' exact
                render={(props) => (
                  <OtherLinks 
                      {...props} 
                      title={'Other Links'}/>
                )}
            />
            <Route
                path='/otherlinks/:id'
                // component={ApiLink}
                render={(props) => (
                  <ApiLink 
                      {...props} 
                      title={'API LINK TITLE'}
                />
                )}
            />
        </Switch>
      </div>
    );
  };
};

export default App;