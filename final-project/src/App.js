
import './App.css';
import { ListMonsters, ListSpells } from './List'
import Form from './Form.js';
import * as React from 'react';



function App() {
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }


  return (
    <div className="App">
     
      <Form useList='monsters'/>
      <ListSpells/>
      <Form useList='spells'/>
      

      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <ListMonsters/>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
}

export default App;
