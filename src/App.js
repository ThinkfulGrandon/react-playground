import React, { Component } from 'react';
import './App.css';
// import Messages from './messages-app/Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import Hello from './state/state-drills/HelloWorld'
import Bomb from './state/state-drills/Bomb'
import Roulette from './state/state-drills/Roulette'
import Tabs from './state/Tabs'


const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
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
        <Roulette chamber = { Math.ceil(Math.random() * 8) }/>
        <hr />
        <Tabs tabs={tabsProp}/>
      </div>
    );
  };
};

export default App;