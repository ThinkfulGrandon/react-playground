import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip'


function App() {

  const firstTooltip = (
    <Tooltip color='hotpink' message='tooltip message'>
      ipsum
    </Tooltip>
  )
  const secondTooltip = (
    <Tooltip color='#126bcc' message='another tooltip message'>
      ipsuminum
    </Tooltip>
  )
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
  This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, {firstTooltip} adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
  This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  )
}

export default App;
